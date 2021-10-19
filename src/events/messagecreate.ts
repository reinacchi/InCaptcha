import { GatewayClientEvents } from "detritus-client";
import { ClientEvents } from "detritus-client/lib/constants";
import { Embed } from "detritus-client/lib/utils";
import { Event } from "../interfaces";
import { ADMIN, PREFIX } from "../../config.json";
import { inspect } from "util";

export const event: Event = {
    name: ClientEvents.MESSAGE_CREATE,
    run: async (client, payload: GatewayClientEvents.MessageCreate) => {
        const message = payload.message;

        if (message.author.bot || !message.guild || !message.content.startsWith(PREFIX)) return;

        let messageArray: string[] = message.content.split(" ");
        let args: string[] = messageArray.slice(1);
        let command: string = messageArray[0].slice(PREFIX.length);

        switch (command) {
            case "eval":
                if (!ADMIN.includes(message.author.id)) return;

                const evaluated = inspect(eval(args.join(" ")), { depth: 0 });

                const embed = new Embed()
                    .setDescription(`\`\`\`ts\n${evaluated}\`\`\``)
                    .setColor(0x7289DA)
                    .setFooter("Eval", client.user.avatarUrl)
                    .setTimestamp();

                message.channel.createMessage({
                    embeds: [embed],
                    messageReference: {
                        channelId: message.channelId,
                        messageId: message.id
                    },
                    allowedMentions: {
                        repliedUser: false
                    }
                });
                break;
            case "sweep":
                if (!ADMIN.includes(message.author.id)) return;

                const messageIds: string[] = await message.channel.fetchMessages().then((msg) => msg.map((m) => m.id));

                client.rest.bulkDeleteMessages(message.channelId, messageIds)
        }
    }
}