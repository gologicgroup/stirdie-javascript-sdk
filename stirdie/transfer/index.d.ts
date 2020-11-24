import { IStirdieTransferService } from "./services/transfer.service";
export declare class StirdieTranfer {
    private transferService;
    constructor(transferService: IStirdieTransferService);
    send(files: File[], sendToStirdieID: string, callback: (err: any, result?: any) => void): void;
    retrieve(transferID: string, callback: (err: any, result?: any) => void): void;
    activity(callback: (err: any, result?: any) => void): void;
}
