import { IUploadService } from "../../services/upload.service";
export declare const sendChunk: (fileId: string, checksum: string, chunk: Blob, chunkCount: number, chunkTotal: number, uploadService: IUploadService) => Promise<any>;
