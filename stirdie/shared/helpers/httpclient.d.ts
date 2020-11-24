interface RequestOptions {
    method?: string;
    headers?: any;
    body?: any;
    redirect?: "follow" | "manual" | "error";
    signal?: any;
}
declare class HttpHelper {
    private setHeaders;
    private setFetchRequestOptions;
    get(url: string, opts?: RequestOptions, callback?: (err: Error | string, data: any) => void): Promise<any>;
    post(url: string, data: any, opts?: RequestOptions, callback?: (err: Error | string, data: any) => void): Promise<any>;
    put(url: string, data: any, opts?: RequestOptions, callback?: (err: Error | string, data: any) => void): Promise<any>;
    patch(url: string, data: any, opts?: RequestOptions, callback?: (err: Error | string, data: any) => void): Promise<any>;
    delete(url: string, opts: RequestOptions, callback?: (err: Error | string, data: any) => void): Promise<any>;
}
declare const _default: HttpHelper;
export default _default;
