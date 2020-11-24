export interface IStirdieKeyManagementService {
    getPublicKey(user: string): Promise<any>;
    getPrivateKey(): Promise<any>;
}
declare class StirdieKeyManagementService implements IStirdieKeyManagementService {
    getPublicKey(user: string): Promise<string>;
    getPrivateKey(): Promise<string>;
}
declare const _default: StirdieKeyManagementService;
export default _default;
