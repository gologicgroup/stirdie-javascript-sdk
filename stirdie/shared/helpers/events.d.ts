export declare class EventEmitter {
    subscribers: {};
    on(event: string, callback: (...data: any[]) => void): void;
    emit(event: string, ...args: any[]): void;
}
