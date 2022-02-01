export class ChatUI {
    constructor(ul) {
        this.list = ul;
    }
    set list(ul) {
        this._lista = ul;
    }
    get list() {
        return this._list;
    }
}