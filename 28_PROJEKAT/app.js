import { Classroom } from "./chat.js";
import { ChatUI } from "./ui.js";

// DOM
let lista = document.querySelector("section ul");
let formSend = document.querySelector("#messageForm");
let formUsername = document.querySelector("#usernameForm");
let inputSend = document.querySelector("#message");
let inputUsername = document.querySelector("#username");

// instance klasa
let chatroom = new Classroom("js", "mikamikic");
let chatUI = new ChatUI(lista);

// ispis dokumenata iz baze u konzoli
chatroom.getChats(d => {
    console.log(d.room);
});

// ispis dokumenata na stranici
chatroom.getChats(d => {
    chatUI.templateLI(d);
});

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
    inputUsername.value = "";
});