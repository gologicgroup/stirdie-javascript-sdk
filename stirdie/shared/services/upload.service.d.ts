export interface IUploadInitParams {
    fileId: string;
    filename: string;
    size: number;
    symKey: string;
    iv: string;
    contentMD5: string;
    contentType: string;
    saveLocation: string;
}
export interface IUploadPartParams {
    fileId: string;
    total: number;
    num: number;
    hash: string;
    file: FormData;
}
export interface IUploadService {
    uploadInit(params: IUploadInitParams): Promise<any>;
    uploadPart(params: IUploadPartParams): Promise<any>;
}
