export class ChatUI {
    constructor(ul) {
        this.list = ul;
    }

    set list(ul) {
        this._list = ul;
    }
    get list() {
        return this._list;
    }

    formatDateTime(d) {
        let a = new Date();

        let day = d.getDate();
        let month = d.getMonth() + 1;
        let year = d.getFullYear();
        let hours = d.getHours();
        let min = d.getMinutes();

        let fullInfo = "";
        if (year === a.getFullYear() && month === a.getMonth() + 1 && day === a.getDate()) {
            day = String(day).padStart(2, "0");
            month = String(month).padStart(2, "0");
            hours = String(hours).padStart(2, "0");
            min = String(min).padStart(2, "0");
            fullInfo = `${hours}:${min}`;
        }
        else {
            day = String(day).padStart(2, "0");
            month = String(month).padStart(2, "0");
            hours = String(hours).padStart(2, "0");
            min = String(min).padStart(2, "0");
            fullInfo = `${day}.${month}.${year} - ${hours}:${min}`
        }
        return fullInfo;
    }

    templateLI(data) {
        let li = document.createElement("li");
        let p = document.createElement("p");

        li.innerHTML = `${data.username} : ${data.message}`;
        p.innerHTML = this.formatDateTime(data.created_at.toDate());

        li.appendChild(p);
        this.list.appendChild(li);
    }
}