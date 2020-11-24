import { EventEmitter } from "../helpers/events";
import { IUploadService } from "../services/upload.service";
import { FileChunkUploader } from "./uploader/fileChunkUploader";
export interface UploadJobParams {
    file: File;
    encryptedFile: ArrayBuffer;
    checksum: string;
    iv: Uint8Array;
    symmetricalKey: string;
    saveLocationStrategy: any;
}
export declare class UploadJob extends EventEmitter {
    private jobs;
    private jobsArray;
    private errors;
    get totalJobs(): number;
    get jobsCompleted(): number;
    get jobsRemaining(): number;
    get percentage(): number;
    constructor(files: UploadJobParams[], uploadService: IUploadService);
    start(callback: (err: any) => void): void;
    getJobs(): FileChunkUploader[];
    getJob(id: string): FileChunkUploader;
    getProgress(): {
        total: number;
        percent: number;
        completed: number;
        remaining: number;
        errors: any[];
    };
    onStart(callback: any): void;
    onProgress(callback: any): void;
    onFinish(callback: any): void;
    onError(callback: any): void;
}
