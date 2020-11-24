export declare type KeyType = "private" | "public";
export declare type KeyMode = "encrypt" | "decrypt";
export declare type ImportKeyFormat = "raw" | "pkcs8" | "spki" | "jwk";
export declare type BinaryType = ArrayBuffer | Uint16Array | Uint8Array | Int8Array | Int16Array | Int32Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView;
export declare const importPrivateKey: (pem: string) => Promise<CryptoKey>;
export declare const importPublicKey: (pem: string) => Promise<CryptoKey>;
