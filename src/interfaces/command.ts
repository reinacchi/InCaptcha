import { InCaptcha } from "../extension/client";
import { GatewayClientEvents } from "detritus-client";

interface CommandRun {
    (client: InCaptcha, payload: GatewayClientEvents.InteractionCreate): Promise<any>;
}

export interface Command {
    name: string;
    description?: string;
    category?: string;
    run: CommandRun;
}