import { Classroom } from "./chat.js";
import { ChatUI } from "./ui.js";

// DOM
let lista = document.querySelector("section ul");
let formSend = document.querySelector("#messageForm");
let formUsername = document.querySelector("#usernameForm");
let inputSend = document.querySelector("#message");
let inputUsername = document.querySelector("#username");
let nav = document.querySelector("nav");
let notification = document.querySelector(".changeUsername");

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
// instance klasa
let chatroom = new Classroom(checkRoom(), checkUsername());
let chatUI = new ChatUI(lista);

// funkcija koja ispisuje obavestenje o promeni Username-a
function displayNotification(p) {
    let interval = null;
    let a = checkUsername();
    let br = 0;
    if (interval === null) {
        interval = setInterval(() => {
            notification.innerHTML = `<p class="notification">Username is set to ${p} ${br}</p>`;
            br++;
            if (br > 30 * 10) {
                clearInterval(interval);
                notification.innerHTML = "";
                interval = null;
            }
        }, 1000 / 100);
    }
}

// Kada je submit dugme Send posalji poruku
formSend.addEventListener("submit", (e) => {
    e.preventDefault();
    let inputSendValue = inputSend.value;
    if (inputSendValue.trim().length > 0) {
        chatroom.addChat(inputSendValue)
            .then(() => {
                message.value = "";
            }).catch((err) => {
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
        localStorage.setItem("username", inputUsernameValue);
        // ispisiuje i kad je isti username
        displayNotification(inputUsernameValue, chatroom);
    }

    inputUsername.value = "";
});

// Kada se klikne na dugme u nav baru da se otvori ta soba
nav.addEventListener("click", e => {
    e.preventDefault();

    if (e.target.tagName === "BUTTON") {
        // 1.izbrisali sve poruke sa ekrana pomocu, clear metode koju smo kreirali u chatUI
        chatUI.clear();
        // 2.promena sobe
        chatroom.updateRoom(e.target.id);
        localStorage.setItem("room", e.target.id);
        // 3.ispis poruka iz odgovarajuce sobe
        chatroom.getChats(d => {
            chatUI.templateLI(d);
        });
    }

});