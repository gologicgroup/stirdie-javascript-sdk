import { IUploadInitParams, IUploadPartParams, IUploadService } from "../../shared/services/upload.service";
export interface IStirdieTransferService {
    getTransfer(transferID: string): Promise<any>;
    getActivity(): Promise<any>;
}
declare class StirdieTransferService implements IStirdieTransferService, IUploadService {
    uploadInit(params: IUploadInitParams): Promise<any>;
    uploadPart(params: IUploadPartParams): Promise<any>;
    getTransfer(transferID: string): Promise<any>;
    getActivity(): Promise<any>;
}
declare const _default: StirdieTransferService;
export default _default;
