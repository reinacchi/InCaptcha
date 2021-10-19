import { InCaptcha } from "./src/extension/client";
import { GatewayIntents } from "detritus-client-socket/lib/constants";
import { TOKEN } from "./config.json";

const client = new InCaptcha(TOKEN, {
    cache: {
        presences: { limit: 0, enabled: false },
        emojis: { limit: 0, enabled: false },
        messages: { limit: 15, enabled: true, expire: 60 * 60 * 1000 },
    },
    gateway: {
        autoReconnect: true,
        intents: [GatewayIntents.GUILDS, GatewayIntents.GUILD_BANS, GatewayIntents.GUILD_MEMBERS, GatewayIntents.GUILD_MESSAGES, GatewayIntents.DIRECT_MESSAGES],
        loadAllMembers: true,
        shardCount: 2,
    }
});

client.initialize();