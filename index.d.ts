import { Stirdie as StirdieMain } from "./stirdie";
import { Credentials } from "./stirdie/credentials";
import { IConfig } from "./stirdie/configuration";
export declare function Stirdie(credentials: Credentials, config: Partial<IConfig>, callback: (err: Error | string, stirdie?: StirdieMain) => void): void;
