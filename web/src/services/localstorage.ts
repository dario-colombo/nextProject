export class CustomlocalStorage {
    public _getString(key: string) {
        return localStorage.getItem(key);
    }
    public _setString(key: string, value: string) {
        localStorage.setItem(key, value);
    }
  public _remove(key: string){
    localStorage.removeItem(key);    }
}

