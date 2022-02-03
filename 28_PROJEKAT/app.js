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

// Postavljanje vrednosti u Local Storage-u
localStorage.setItem("nazivPromenljive", 5);
localStorage.setItem("nazivPromenljive", 6);
localStorage.setItem("nazivPromenljive", "Test string");
localStorage.setItem("x", 7);
localStorage.setItem("y", 10);

// Uzimanje vrednosti iz Local Storage-a; kao i za input polja vrednosti su string
let z = localStorage.x + localStorage.y;
console.log(z);
console.log(localStorage.x);
if (localStorage.x) {
    console.log(`X postoji`);
}
else {
    console.log(`X ne postoji`);
}

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