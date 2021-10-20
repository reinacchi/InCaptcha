import { ShardClient, ShardClientRunOptions } from "detritus-client";
import { ChannelBase } from "detritus-client/lib/structures";
import { Database } from "xen.db";
import { Command, Event } from "../interfaces";
import { readdirSync } from "fs";
import Config from "../../config.json";
import path from "path";
import { MessageCollector, MessageCollectorOptions } from "./messagecollector";

export class InCaptcha extends ShardClient {
    public commands: Map<string, Command> = new Map();
    public config: typeof Config = Config;
    public database: Database = new Database("Database/CaptchaBase.sql", { path: "Database", table: "CAPTCHAPROD", useWalMode: false });
    public events: Map<string, Event> = new Map();

    /**
     * Initialize the bot to the Gateway 
     * @param options Client Run Options
     * @returns {Promise<void}
     */
    public async initialize(options?: ShardClientRunOptions): Promise<void> {
        this.run(options);

        const commandPath: string = path.join(__dirname, "..", "commands");
        
        readdirSync(commandPath).forEach((dir) => {
            const commands: string[] = readdirSync(`${commandPath}/${dir}`).filter((file) => file.endsWith(".ts"));

            for (const file of commands) {
                const { command } = require(`${commandPath}/${dir}/${file}`);
                this.commands.set(command.name, command);
            }
        });

        const eventPath: string = path.join(__dirname, "..", "events");

        readdirSync(eventPath).forEach(async (file) => {
            const { event } = await import(`${eventPath}/${file}`);
            this.events.set(event.name, event);
            this.on(event.name, event.run.bind(null, this));
        });
    }

    public awaitChannelMessages(channel: ChannelBase, options: MessageCollectorOptions): Promise<MessageCollector> {
        return new MessageCollector(channel, options).run();
    }
}