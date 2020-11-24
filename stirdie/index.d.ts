import { Credentials } from "./credentials";
import { StirdieKeyManagement } from "./keys";
import { StirdieStorage } from "./storage";
import { StirdieTranfer } from "./transfer";
export declare class Stirdie {
    storage: StirdieStorage;
    transfer: StirdieTranfer;
    keys: StirdieKeyManagement;
    constructor(creds: Credentials, options?: {});
}
