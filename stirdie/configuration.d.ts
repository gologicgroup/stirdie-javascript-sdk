export interface IHttpConfig {
    baseURL: string;
    keys: {
        publicKey: string;
        privateKey: string;
    };
    storage: {
        uploadInitialise: string;
        uploadPart: string;
        get: string;
        list: string;
        copy: string;
        move: string;
        delete: string;
    };
    transfer: {
        uploadInitialise: string;
        uploadPart: string;
        get: string;
        activity: string;
    };
}
export interface IConfig {
    http: IHttpConfig;
}
declare const _default: {
    get: () => IConfig;
    set: (overrides: Partial<IConfig>) => void;
};
export default _default;
