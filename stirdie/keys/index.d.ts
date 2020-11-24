import { IStirdieKeyManagementService } from "../shared/services/keys.service";
export declare class StirdieKeyManagement {
    private keyManagementSerivce;
    constructor(keyManagementSerivce: IStirdieKeyManagementService);
    getPublicKey(user: string, callback: (err: any, result?: any) => void): Promise<void>;
    getPrivateKey(callback: (err: any, result?: any) => void): Promise<void>;
}
