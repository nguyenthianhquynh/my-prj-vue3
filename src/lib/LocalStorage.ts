export default class LocalStorage {
    private isSupported: boolean;

    constructor() {
        this.isSupported = typeof window.localStorage !== 'undefined';
    }

    set(key: string, value: string,) {
        if (!this.isSupported) return;
        localStorage.setItem(key, value)
    }

    get(key: string,) {
        if (!this.isSupported) return;
        return localStorage.getItem(key)
    }
}
