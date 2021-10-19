import { Command } from "../../interfaces";
import { InteractionCallbackTypes, MessageComponentButtonStyles, MessageComponentTypes } from "detritus-client/lib/constants";
import { ComponentActionRow } from "detritus-client/lib/utils";

export const command: Command = {
    name: "invite",
    run: async (client, payload) => {
        const component = new ComponentActionRow()
            .createButton({
                label: "Invite Me",
                url: "https://discord.com",
                style: MessageComponentButtonStyles.LINK,
                type: MessageComponentTypes.BUTTON
            });

        payload.interaction.respond(InteractionCallbackTypes.CHANNEL_MESSAGE_WITH_SOURCE, {
            content: "Click the button below to invite me!",
            components: [
                { components: [component.toJSON()], type: MessageComponentTypes.ACTION_ROW }
            ]
        });
    }
}