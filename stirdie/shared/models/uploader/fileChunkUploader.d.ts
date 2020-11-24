import { EventEmitter } from "../../helpers/events";
import { IUploadService } from "../../services/upload.service";
export declare class FileChunkUploader extends EventEmitter {
    private uploadService;
    private filename;
    private size;
    private checksum;
    private symmetricalKey;
    private iv;
    private saveLocationStrategy;
    private chunkSize;
    private _id;
    private _status;
    private _percentComplete;
    private file;
    private chunksTotal;
    get complete(): boolean;
    constructor(uploadService: IUploadService, filename: string, size: number, encrypted: ArrayBuffer, // Encrypted File
    contentType: string, checksum: string, symmetricalKey: string, // Encrypted Key
    iv: Uint8Array, saveLocationStrategy: any, chunkSize?: number);
    start(): void;
    getId(): string;
    getStatus(): string;
    getPercentageComplete(): number;
    onStart(callback: any): void;
    onProgress(callback: any): void;
    onFinish(callback: any): void;
    onError(callback: any): void;
}
