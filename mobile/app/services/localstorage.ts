import {
    getBoolean,
    setBoolean,
    getNumber,
    setNumber,
    getString,
    setString,
    hasKey,
    remove,
    clear
} from 'application-settings';

export class CustomlocalStorage {
    public _getString(key: string) {
        return getString(key);
    }
    public _setString(key: string, value: string) {
        setString(key, value);
    }
    public _remove(key: string) {
        remove(key);    }

    public _clear() {
        clear();
    }
}
