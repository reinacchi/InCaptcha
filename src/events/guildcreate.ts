import { GatewayClientEvents } from "detritus-client";
import { ApplicationCommandTypes, ClientEvents } from "detritus-client/lib/constants";
import { Event } from "../interfaces";
import Logger from "../extension/logger";

export const event: Event = {
    name: ClientEvents.GUILD_CREATE,
    run: async (client, payload: GatewayClientEvents.GuildCreate) => {
        if (payload.fromUnavailable) {
            /* Set Default Config (If Non-Exist) */
            if (!client.database.fetch(`Database.${payload.guild.id}`)) {
                client.database.set(`Database.${payload.guild.id}.CaptchaFail`, "None");
                client.database.set(`Database.${payload.guild.id}.CaptchaOnDM`, true);
            }

            client.rest.createApplicationGuildCommand(client.applicationId, payload.guild.id, {
                name: "ping",
                description: "Ping the Bot",
                type: ApplicationCommandTypes.CHAT_INPUT
            }).catch(() => { });

            client.rest.createApplicationGuildCommand(client.applicationId, payload.guild.id, {
                name: "invite",
                description: "Invite the Bot",
                type: ApplicationCommandTypes.CHAT_INPUT
            }).catch(() => { });

            client.rest.createApplicationGuildCommand(client.applicationId, payload.guild.id, {
                name: "verify",
                description: "Request for a Captcha Verification",
                type: ApplicationCommandTypes.CHAT_INPUT
            }).catch(() => { });

            client.rest.createApplicationGuildCommand(client.applicationId, payload.guild.id, ({
                name: "Force Verify User",
                type: ApplicationCommandTypes.USER
            } as any)).catch(() => { });

            client.rest.createApplicationGuildCommand(client.applicationId, payload.guild.id, ({
                name: "Verification Info",
                type: ApplicationCommandTypes.USER
            } as any)).catch(() => { });

            Logger.info("AVAILABLE GUILD", `Connected To Guild: "${payload.guild.name}" (${payload.guild.id}) Bringing Us To ${client.guilds.length} Guilds`)
        }
    }
}