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

    templateLI(doc) {
        let data = doc.data();
        let p = document.createElement("p");
        let li = document.createElement("li");
        li.id = doc.id;
        li.classList.add(doc.data().username);

        li.innerHTML = `${data.username} : ${data.message}`;
        p.innerHTML = `<span>${this.formatDateTime(data.created_at.toDate())}</span> <i class="fas fa-trash-alt"></i>`

        li.appendChild(p);
        this.list.appendChild(li);
    }

    // Metod za ispis poruka u zavisnosti od username-a
    reorderMessages(user) {
        let allUser = document.querySelectorAll(".user");
        let sameUserMessages = document.querySelectorAll(`.${user}`);

        allUser.forEach(user => {
            user.classList.remove("user");
        });
        sameUserMessages.forEach(message => {
            message.classList.add("user");
        });
    }

    clear() {
        this.list.innerHTML = "";
    }
}