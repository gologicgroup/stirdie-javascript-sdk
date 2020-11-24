import { IUploadService } from "../../services/upload.service";
export declare const sendChunks: (fileId: string, checksum: string, chunkCount: number, chunkSize: number, chunksTotal: number, file: Blob, uploadService: IUploadService) => Promise<any>;
