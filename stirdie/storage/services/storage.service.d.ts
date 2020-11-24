import { IUploadInitParams, IUploadPartParams, IUploadService } from "../../shared/services/upload.service";
export interface IStirdieStorageService {
    get(id: string): Promise<any>;
    list(folder: string): Promise<any>;
    copy(id: string, copyLocation: string): Promise<any>;
    move(id: string, moveLocation: string): Promise<any>;
    delete(id: string): Promise<any>;
}
declare class StirdieStorageService implements IStirdieStorageService, IUploadService {
    uploadInit(params: IUploadInitParams): Promise<any>;
    uploadPart(params: IUploadPartParams): Promise<any>;
    get(id: string): Promise<any>;
    list(folder: string): Promise<any>;
    copy(id: string, copyLocation: string): Promise<any>;
    move(id: string, moveLocation: string): Promise<any>;
    delete(id: string): Promise<any>;
}
declare const _default: StirdieStorageService;
export default _default;
