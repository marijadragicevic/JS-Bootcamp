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
        let now = new Date();

        let day = d.getDate();
        let month = d.getMonth() + 1;
        let year = d.getFullYear();
        let hours = d.getHours();
        let min = d.getMinutes();

        let time = "";
        let date = "";
        if (year === now.getFullYear() && month === now.getMonth() + 1 && day === now.getDate()) {
            hours = String(hours).padStart(2, "0");
            min = String(min).padStart(2, "0");
            date = "";
            time = `${hours}:${min}`;
        } else {
            day = String(day).padStart(2, "0");
            month = String(month).padStart(2, "0");
            hours = String(hours).padStart(2, "0");
            min = String(min).padStart(2, "0");
            date = `${day}.${month}.${year}`;
            time = `${hours}:${min}`;
        }
        return `${date} ${time}`;
    }

    templateLI(doc) {
        let data = doc.data();
        let li = document.createElement("li");
        li.classList.add("main__content-list-chat");
        li.id = doc.id;

        let messageWraper = handleCreateEl("div", "main__content-list-chat__item");

        let avatarDiv = handleCreateEl("div", "main__content-chat-avatar");
        let avatarSpan = handleCreateEl("span");
        avatarSpan.innerHTML = data.username[0];
        avatarDiv.appendChild(avatarSpan);

        let messageContainer = handleCreateEl("div", "main__content-list-message");

        let messageUsername = handleCreateEl("div", "main__content-list-chat-participant");
        messageUsername.innerHTML = data.username;
        let messageContent = handleCreateEl("div", "main__content-list-chat-text");
        messageContent.innerHTML = data.message;

        messageContainer.appendChild(messageUsername);
        messageContainer.appendChild(messageContent);

        let messageTimestamp = handleCreateEl("div", "main__content-list-timestamp");
        let messageSentTime = this.formatDateTime(data.created_at.toDate());
        messageTimestamp.innerHTML = messageSentTime;

        let deleteIcon = handleCreateEl("div", "main__content-list-chat-icon");
        deleteIcon.innerHTML = '<i class="bi bi-trash3"></i>';

        messageWraper.appendChild(avatarDiv);
        messageWraper.appendChild(messageContainer);
        messageWraper.appendChild(messageTimestamp);

        li.appendChild(messageWraper);
        li.appendChild(deleteIcon);

        li.classList.add(doc.data().username);
        this.list.appendChild(li);
    }

    // Metod za preraspodelu poruka u zavisnosti od username-a
    reorderMessages(user) {
        let allUser = document.querySelectorAll(".main__content-list-chat");
        let sameUserMessages = document.querySelectorAll(`.${user}`);

        allUser.forEach((user) => {
            user.classList.remove("right");
            user.classList.add("left");
        });
        sameUserMessages.forEach((message) => {
            message.classList.remove("left");
            message.classList.add("right");
        });
    }

    clear() {
        this.list.innerHTML = "";
    }
}

const handleCreateEl = (el, className) => {
    let newElement = "";

    if (el) {
        newElement = document.createElement(el);
    }

    if (className && newElement) {
        newElement.classList.add(className);
    }

    return newElement;
};
