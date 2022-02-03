import { Classroom } from "./chat.js";
import { ChatUI } from "./ui.js";

let chatroom1 = new Classroom("js", "mikamikic");
console.log(chatroom1.username, chatroom1.room); // testiramo getere
chatroom1.username = "Dusan"; // testiramo setere
chatroom1.room = "general";
console.log(chatroom1.username, chatroom1.room);

let chatroom2 = new Classroom("general", "Milena");
// chatroom2.addChat("HR trening");
// chatroom2.addChat(`Posaljite CV`);
// chatroom2.addChat(`Trening pisanja CV-a`)
//     .then(() => console.log(`Uspesno dodat chat`))
//     .catch(err => console.log(`Greska ${err}`))
chatroom2.getChats(d => {
    console.log(d);
});

// let chatroom3 = new Classroom("js", "p er a");
// chatroom3.addChat("Neki tekst").then(() => {
//     console.log(`Uspesno dodat chat`);
// }).catch((err) => {
//     console.log(`Greska ${err}`);
// });

chatroom1.room = "js";
// ispis dokumenata iz baze u konzoli
chatroom1.getChats(d => {
    console.log(d.room);
})
////////////////////////////////////////////////////////
let lista = document.querySelector("section ul");
let chatUI = new ChatUI(lista);
console.log(chatUI.list);

// ispis dokumenata na stranici
chatroom1.getChats(d => {
    chatUI.templateLI(d);
})

////////////////////////////////////////////////////////

let formSend = document.querySelector("#messageForm");
let formUsername = document.querySelector("#usernameForm");

formSend.addEventListener("submit", (e) => {
    e.preventDefault();
    let inputSendValue = message.value;
    if (inputSendValue.trim().length > 0) {
        chatroom1.addChat(inputSendValue)
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
