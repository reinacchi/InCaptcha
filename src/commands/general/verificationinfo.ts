import { Command } from "../../interfaces";
import { InteractionDataApplicationCommand } from "detritus-client/lib/structures";
import { InteractionCallbackTypes, MessageFlags } from "detritus-client/lib/constants";
import { Embed } from "detritus-client/lib/utils";

export const command: Command = {
    name: "Verification Info",
    run: async (client, payload) => {
        const verifiedRole: string = client.database.fetch(`Database.${payload.interaction.guildId}.VerifiedRole`);
        const member = (payload.interaction.data as InteractionDataApplicationCommand).resolved.members.get((payload.interaction.data as InteractionDataApplicationCommand).targetId);
        let embed = new Embed()
            .setTitle(`${member.username}'s Information`)
            .setColor(0x7289DA);

        if (member.roles.has(verifiedRole)) {
            embed.addField("Status", "**Verified**", true);
            embed.addField("Verified Since", "**Coming Soon!**", true);
        } else {
            embed.addField("Status", "**Not Verified**", true);
            embed.addField("Verified Since", "**Not Verified**", true);
        }

        payload.interaction.respond(InteractionCallbackTypes.CHANNEL_MESSAGE_WITH_SOURCE, {
            embeds: [embed],
            flags: MessageFlags.EPHEMERAL
        });
    }
}