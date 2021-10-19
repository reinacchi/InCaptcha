import { ActivityTypes, ClientEvents, PresenceStatuses } from "detritus-client/lib/constants";
import { Event } from "../interfaces";
import Logger from "../extension/logger";

export const event: Event = {
    name: ClientEvents.GATEWAY_READY,
    run: async (client) => {
        client.gateway.setPresence({
            activity: {
                name: "Captcha 0.3",
                type: ActivityTypes.WATCHING
            },
            status: PresenceStatuses.IDLE
        });

        Logger.success("DATABASE", `Successfully Fetch And Load Database: ${client.database.options.table}`);
        Logger.success("GATEWAY READY", `${client.user.tag} Has Gone Online!`);
        Logger.system("SPECS", `Shard Count: ${client.shardCount} | Guilds: ${client.guilds.length} | Members: ${client.members.length}`);
    }
}