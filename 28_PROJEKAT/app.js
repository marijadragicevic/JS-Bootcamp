import { Classroom } from "./chat.js";
import { ChatUI } from "./ui.js";

// DOM
let lista = document.querySelector("section ul");
let formSend = document.querySelector("#messageForm");
let formUsername = document.querySelector("#usernameForm");
let formColor = document.querySelector("#colorForm");
let formDate = document.querySelector("#setDate");
let textareaSend = document.querySelector("#message");
let inputUsername = document.querySelector("#username");
let inputColor = document.querySelector("#color");
let inputStartDate = document.querySelector("#startDate");
let inputDueDate = document.querySelector("#dueDate");
let nav = document.querySelector("nav");
let notification = document.querySelector(".changeUsername");
let ispisSection = document.querySelector(".ispis");

// uzmianje vrednosti iz localStorage-a
function checkUsername() {
    if (localStorage.username) {

        return localStorage.username;
    }
    else {
        return "anonymous";
    }
}
function checkRoom() {
    if (localStorage.room) {
        return localStorage.room;
    }
    else {
        return "general";
    }
}
function checkColor(tag) {
    if (localStorage.backgroundColor) {
        tag.style.backgroundColor = localStorage.backgroundColor;
        return tag;
    }
    else {
        tag.style.backgroundColor = "#ffffff";
        return tag;
    }
}
// poziv funkcije za pozadinsku boju; ostaje poslednja boja koja je izabrana
checkColor(ispisSection);

// instance klasa
let chatroom = new Classroom(checkRoom(), checkUsername());
let chatUI = new ChatUI(lista);

// Ispis dokumenta iz db na stranici
chatroom.getChats(d => {
    chatUI.templateLI(d);
    chatUI.reorderMessages(checkUsername());
});

// Funkcija koja ispisuje obavestenje o promeni Username-a
function displayNotification(p) {
    let interval = null;
    let a = checkUsername();
    let br = 0;
    if (interval === null) {
        if (p.length === a.length && !p.includes(a) || (p.length > a.length || p.length < a.length)) {
            interval = setInterval(() => {
                notification.innerHTML = `<p class="notification">Username is set to ${p} </p>`;
                br++;
                if (br > 30 * 10) {
                    clearInterval(interval);
                    notification.innerHTML = "";
                    interval = null;
                }
            }, 1000 / 100);
        }
    }
}

// Kada je submit dugme Send posalji poruku
formSend.addEventListener("submit", (e) => {
    e.preventDefault();
    let textareaSendValue = textareaSend.value;
    textareaSend.value = "";
    if (textareaSendValue.trim().length > 0) {
        chatroom.addChat(textareaSendValue)
            .then(() => console.log(`Radi`))
            .catch((err) => {
                console.log(err);
            });
    }
    else {
        alert("Wrong input!");
    }
});

// Kada je submit dugme Update izmeni korisnicko ime
formUsername.addEventListener("submit", e => {
    e.preventDefault();
    let inputUsernameValue = inputUsername.value;
    chatroom.updateUsername(inputUsernameValue);

    if (inputUsernameValue.length >= 2 && inputUsernameValue.length <= 10 && !inputUsernameValue.includes(" ")) {
        displayNotification(inputUsernameValue);
        localStorage.setItem("username", inputUsernameValue);
        chatUI.reorderMessages(checkUsername());
    }
    inputUsername.value = "";
});

// Kada se klikne na dugme u nav baru da se otvori ta soba
nav.addEventListener("click", e => {
    e.preventDefault();
    if (e.target.tagName === "BUTTON") {
        chatUI.clear();
        chatroom.updateRoom(e.target.id);
        localStorage.setItem("room", e.target.id);
        chatroom.getChats(d => {
            chatUI.templateLI(d);
            chatUI.reorderMessages(checkUsername());
        });
    }
});

// Kada se klikne na update color da se promeni boja pozadine ceta
formColor.addEventListener("submit", function (e) {
    e.preventDefault();
    let inputColorValue = inputColor.value;
    let timer = setTimeout(() => {
        ispisSection.style.backgroundColor = inputColorValue;
    }, 1000 / 2);
    localStorage.setItem("backgroundColor", inputColorValue);
});

// Kada se klikne na Set dates da se prikazu poruke u tom vremenskom intervalu iz te sobe
formDate.addEventListener("submit", function (e) {
    e.preventDefault();
    let inputStartDateValue = inputStartDate.value;
    let inputDueDateValue = inputDueDate.value;
    chatUI.clear();
    if (inputStartDateValue === "" || inputDueDateValue === "") {
        alert("Wrong input!");
    }
    else {
        chatroom.getMessages(inputStartDateValue, inputDueDateValue, (d) => {
            chatUI.templateLI(d);
            chatUI.reorderMessages(checkUsername());
        });
    }
});

// Kada se klikne na kanticu da se izbrise poruka
ispisSection.addEventListener("click", e => {
    e.preventDefault();
    if (e.target.tagName === "I") {
        let li = event.target.parentElement.parentElement;
        if (li.classList.contains(checkUsername())) {
            if (confirm("Are you sure you want to delete this message?")) {
                li.remove();
                chatroom.deleteChat(li.id);
            }
        }
        else {
            li.remove();
        }
    }
});


