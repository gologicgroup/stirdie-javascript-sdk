declare const _default: (opts: {
    buffer: ArrayBuffer;
    key: CryptoKey;
    iv: ArrayBuffer;
    pem: string;
}) => Promise<{
    buffer: ArrayBuffer;
    key: string;
}>;
export default _default;
