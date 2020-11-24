import { IStirdieStorageService } from "./services/storage.service";
import { UploadJob } from "../shared/models/upload-job";
export declare class StirdieStorage {
    private storageService;
    constructor(storageService: IStirdieStorageService);
    upload(files: File[], folderId: string, callback: (err: any, uploadJob?: UploadJob) => void): void;
    download(fileId: string, callback: (err: any, result?: any) => void): void;
    get(id: string, callback: (err: any, result?: any) => void): void;
    list(folder: string, callback: (err: any, result?: any) => void): void;
    copy(id: string, copyLocation: string, callback: (err: any, result?: any) => void): void;
    move(id: string, moveLocation: string, callback: (err: any, result?: any) => void): void;
    delete(id: string, callback: (err: any, result?: any) => void): void;
}
