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
let header = document.querySelector(".header");
let chatSection = document.querySelector(".chat");
let headerBtn = document.querySelector(".btn");
let exitBtn = document.querySelector(".exitBtn");
let moreOptions = document.querySelector("#options");


// FUNKCIJE
// vrsimo proveru localStorage-a
function check(x, y) { return (x) ? x : y; }

function checkColor(tag) {
    let c = check(localStorage.backgroundColor, "#ffffff");
    tag.style.backgroundColor = c;
}
function checkActiveBtn() {
    let id = check(localStorage.room, "general");
    let tag = document.querySelector(`#${id}`);
    tag.classList.add("activeBtn");
}

// prikazuju se najskorije poruke

// ispisuje obavestenje o promeni Username-a
function displayNotification(p) {
    let interval = null;
    let a = check(localStorage.username, "anonymous");
    let br = 0;
    if (interval === null) {
        if ((p.length === a.length && !p.includes(a)) || (p.length > a.length || p.length < a.length)) {
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
// pozivi funkcija
checkColor(ispisSection);
checkActiveBtn();

// INSTANCE KLASA
let chatroom = new Classroom(check(localStorage.room, "general"), check(localStorage.username, "anonymous"));
let chatUI = new ChatUI(lista);

// ISPIS DOKUMENATA IZ DB NA STRANICI
chatroom.getChats(d => {
    chatUI.templateLI(d);
    chatUI.reorderMessages(check(localStorage.username, "anonymous"));
});

// EVENT LISTENERS
// DUGME OPEN CHATROOM = PRIKAZ CHAT-A
headerBtn.addEventListener("click", e => {
    e.preventDefault();
    header.style.display = "none";
    chatSection.style.display = "block";
});

// DUGME EXIT CHAT = VRACA NA POCETNU STRANU
exitBtn.addEventListener("click", e => {
    e.preventDefault();
    chatSection.style.display = "none";
    header.style.display = "block";
});

// More options = prikazuje colorform i setDate
moreOptions.addEventListener("click", e => {
    e.preventDefault();
    moreOptions.innerHTML = "Double click to go back";
    moreOptions.style.borderRadius = "0px 0px 10px 10px";
    formColor.style.display = "flex";
    formDate.style.display = "flex";
});
moreOptions.addEventListener("dblclick", e => {
    e.preventDefault();
    moreOptions.style.borderRadius = "0px";
    moreOptions.innerHTML = "Click to see more options";
    formColor.style.display = "none";
    formDate.style.display = "none";
    moreOptions.style.display = "block";
});


// SUBMIT DUGME SEND = POSALJI PORUKU
formSend.addEventListener("submit", (e) => {
    e.preventDefault();
    let textareaSendValue = textareaSend.value;
    textareaSend.value = "";
    if (textareaSendValue.trim().length > 0) {
        chatroom.addChat(textareaSendValue)
            .then(() => console.log(`Message sent`))
            .catch((err) => {
                console.log(`Error ${err}`);
            });
    }
    else {
        alert("Wrong input!");
    }
});

// SUBMIT DUGME UPDATE = IZMENI KORISNICKO IME
formUsername.addEventListener("submit", e => {
    e.preventDefault();
    let inputUsernameValue = inputUsername.value;
    chatroom.updateUsername(inputUsernameValue);

    if (inputUsernameValue.length >= 2 && inputUsernameValue.length <= 10 && !inputUsernameValue.includes(" ")) {
        displayNotification(inputUsernameValue);
        localStorage.setItem("username", inputUsernameValue);
        chatUI.reorderMessages(check(localStorage.username, "anonymous"));
    }
    inputUsername.value = "";
});

//KLIK NA DUGME U NAVBARU = OTVORI SE TA SOBA
nav.addEventListener("click", e => {
    e.preventDefault();
    let activeBtnClass = document.querySelectorAll(".activeBtn");
    activeBtnClass.forEach(element => {
        element.classList.remove("activeBtn");
    });

    if (e.target.tagName === "BUTTON") {
        e.target.classList.add("activeBtn");
        chatUI.clear();
        chatroom.updateRoom(e.target.id);
        localStorage.setItem("room", e.target.id);
        chatroom.getChats(d => {
            chatUI.templateLI(d);
            chatUI.reorderMessages(check(localStorage.username, "anonymous"));
        });
    }
});

// KLIK NA DUGME UPDATE COLOR = MENJA SE POZADINSKA BOJA CETA
formColor.addEventListener("submit", function (e) {
    e.preventDefault();
    let inputColorValue = inputColor.value;
    let timer = setTimeout(() => {
        ispisSection.style.backgroundColor = inputColorValue;
    }, 1000 / 2);
    localStorage.setItem("backgroundColor", inputColorValue);
});

// KLIK NA DUGME SET DATES = PRIKAZ PORUKA U IZABRANOM VREMSKOM INTERVALU IZ TE SOBE
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
            chatUI.reorderMessages(check(localStorage.username, "anonymous"));
        });
    }
    inputStartDate.value = "";
    inputDueDate.value = ""
});

// KLOK NA KANTICU = BRISANJE PORUKE 
ispisSection.addEventListener("click", e => {
    e.preventDefault();
    if (e.target.tagName === "I") {
        let li = event.target.parentElement.parentElement;
        if (li.classList.contains(check(localStorage.username, "anonymous"))) {
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


