import { EventEmitter } from "events";
import { ChannelBase, ChannelGuildText, Message } from "detritus-client/lib/structures";
import { Messages } from "detritus-client/lib/collections";

export interface MessageCollectorOptions {
    count?: number;
    timeout?: number;
    filter?: (message: Message) => boolean;
}

const MessageCollectorDefaults = {
    timeout: 10000,
    count: 10,
    filter: (_message) => true
}

/**
 * Message Collector Class
 * @extends {EventEmitter}
 */
export class MessageCollector extends EventEmitter {
    channel: ChannelBase | ChannelGuildText;
    collected: Messages;
    count: number;
    filter: ((_message: any) => boolean) & ((message: Message) => boolean);
    message: Message;
    running: boolean;
    timeout: number;
    constructor(channel: ChannelBase, options: MessageCollectorOptions) {
        super();

        const opt = Object.assign(MessageCollectorDefaults, options);
        this.channel = channel;
        this.collected = new Messages(channel.client);
        this.count = opt.count;
        this.filter = opt.filter;
        this.running = false;
        this.timeout = opt.timeout;
    }

    _onMessageCreate(message: Message) {
        if (!this.running) return;
        if (this.channel.id !== message.channelId) return;
        this.emit("collect", message);
    }

    _onMessageUpdate(message: Message, oldMessage: Message) {
        if (!this.running) return;
        if (this.channel.id !== message.channelId) return;
        if (!this.filter(message)) return this.collected.delete(message.id);
        if (!this.collected.has(oldMessage.id)) return this.emit("collect", message);
        this.emit("update", message);
    }

    _onMessageDelete(message: Message) {
        if (!this.running) return;
        if (!this.collected.has(message.id)) return;
        this.emit("delete", message);
    }

    run(): Promise<MessageCollector> {
        this.running = true;
        return new Promise((res) => {
            this.channel.client.setMaxListeners(this.getMaxListeners() + 1);
            this.channel.client.on("messageCreate", this._onMessageCreate);
            this.channel.client.on("messageUpdate", this._onMessageUpdate);
            this.channel.client.on("messageDelete", this._onMessageDelete);

            this.setMaxListeners(this.getMaxListeners() + 1);
            this.on("collect", this.onCollect);
            this.on("update", this.onUpdate);
            this.on("delete", this.onDelete);

            if (this.timeout) setTimeout(() => this.stop(), this.timeout);
            this.once("stop", () => res(this));
        });
    }

    stop(): MessageCollector {
        this.running = false;
        this.channel.client.setMaxListeners(this.getMaxListeners() - 1);
        this.channel.client.off("messageCreate", this._onMessageCreate);
        this.channel.client.off("messageUpdate", this._onMessageUpdate);
        this.channel.client.off("messageDelete", this._onMessageDelete);

        this.setMaxListeners(this.getMaxListeners() - 1);
        this.off("collect", this.onCollect);
        this.off("update", this.onUpdate);
        this.off("delete", this.onDelete);
        this.emit("stop");

        return this;
    }

    onCollect(message: Message) {
        this.collected.set(message.id, message);
        this.message = message;
        if (this.count && this.collected.size === this.count) this.stop();
    }

    onUpdate(message: Message) {
        this.collected.set(message.id, message);
    }

    onDelete(message: Message) {
        this.collected.delete(message.id);
    }
}