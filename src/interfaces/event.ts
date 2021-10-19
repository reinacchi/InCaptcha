import { InCaptcha } from "../extension/client";
import { ClientEvents } from "detritus-client/lib/constants";

interface EventRun {
    (client: InCaptcha, ...args: any): Promise<any>;
}

export interface Event {
    name: ClientEvents;
    run: EventRun;
}