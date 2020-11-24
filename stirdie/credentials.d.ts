export interface Credentials {
    idToken?: string;
    refreshToken?: string;
}
declare const _default: {
    get: () => Credentials;
    set: (cred: Credentials) => void;
};
export default _default;
