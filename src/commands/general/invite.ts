import { Command } from "../../interfaces";
import { InteractionCallbackTypes, MessageComponentButtonStyles, MessageComponentTypes } from "detritus-client/lib/constants";
import { ComponentActionRow } from "detritus-client/lib/utils";

export const command: Command = {
    name: "invite",
    run: async (client, payload) => {
        const component = new ComponentActionRow()
            .createButton({
                label: "Invite Me",
                url: "https://discord.com/oauth2/authorize?client_id=786803477842100286&scope=bot%20applications.commands&permissions=268553222",
                style: MessageComponentButtonStyles.LINK,
                type: MessageComponentTypes.BUTTON
            }).toJSON();

        payload.interaction.respond(InteractionCallbackTypes.CHANNEL_MESSAGE_WITH_SOURCE, {
            content: "Click the button below to invite me or click [Here](https://discord.com/oauth2/authorize?client_id=786803477842100286&scope=bot%20applications.commands&permissions=268553222).",
            components: [
                { components: [component], type: MessageComponentTypes.ACTION_ROW }
            ]
        });
    }
}