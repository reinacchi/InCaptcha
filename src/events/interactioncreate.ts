import { Event } from "../interfaces";
import { GatewayClientEvents } from "detritus-client";
import { InteractionDataApplicationCommand } from "detritus-client/lib/structures";
import { ClientEvents } from "detritus-client/lib/constants";

export const event: Event = {
    name: ClientEvents.INTERACTION_CREATE,
    run: async (client, payload: GatewayClientEvents.InteractionCreate) => {
        const interaction = payload.interaction;

        if (interaction.member.bot || !interaction.guild) return;

        if ((interaction.data as InteractionDataApplicationCommand).type === 1) {
            const command = client.commands.get((interaction.data as InteractionDataApplicationCommand).name);

            if (!command) return;

            if (command) {
                command.run(client, payload);
            }
        }
    }
}