export class ChatUI {
    constructor(ul) {
        this.list = ul;
    }
    // parametar koji je prosledjen u konstruktoru i seteru ne moraju da budu isti
    set list(ul) {
        this._list = ul;
    }
    get list() {
        return this._list;
    }

    templateLI(data) {
        let li = document.createElement("li");
        let p = document.createElement("p");

        li.innerHTML = `${data.username} : ${data.message}`;
        p.innerHTML = data.created_at.toDate();

        li.appendChild(p);
        this.list.appendChild(li);
    }
}