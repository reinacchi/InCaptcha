import { Command } from "../../interfaces";
import { InteractionCallbackTypes, MessageFlags } from "detritus-client/lib/constants";

export const command: Command = {
    name: "ping",
    run: async (client, payload) => {
        payload.interaction.respond(InteractionCallbackTypes.CHANNEL_MESSAGE_WITH_SOURCE, {
            content: `🏓 Pong!`,
            flags: MessageFlags.EPHEMERAL
        });
    }
}