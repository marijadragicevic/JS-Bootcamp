import { Classroom } from "./chat.js";
import { ChatUI } from "./ui.js";

// DOM
let messagesListContainer = document.querySelector(".main__content--top");
let messagesList = document.querySelector(".main__content-list");
const formSend = document.querySelector("#message-form");
const formUsername = document.querySelector("#user-form");
const formColor = document.querySelector("#apearance-form");

const sendBtn = document.querySelector(".main__content-chat-input-send");
let formInput = document.querySelector("#chat-input");
let inputUsername = document.querySelector("#username");
let inputColor = document.querySelector("#color");
let inputStartDate = document.querySelector("#startDate");
let inputDueDate = document.querySelector("#dueDate");
const notificationDialog = document.querySelector(".notification-dialog");
const notificationDialogContent = document.querySelector(".notification-dialog__text");
const notificationDialogIcon = document.querySelector(".notification-dialog__icon");

// UI toggle
const expandBtnList = document.querySelectorAll(".aside__content-btn-expand");
const apearanceContainer = document.querySelector("#apearance-settings");
const userContainer = document.querySelector("#user-settings");
const headerArrow = document.querySelector("#header__icon-arrow");
const headerFunnel = document.querySelector("#header__icon-funnel");

const channelList = document.querySelector(".channels-list");

const main = document.querySelector(".main");
const aside = document.querySelector(".aside");
const searchDialog = document.querySelector(".search-dialog");
const searchClose = document.querySelector(".search-dialog__close");

const skipBtns = document.querySelectorAll(".btn-skip");
const introductionContainer = document.querySelector(".section-guide");

expandBtnList?.length > 0 &&
    expandBtnList?.forEach((expandBtn) => {
        expandBtn?.addEventListener("click", (event) => {
            let id = expandBtn?.id;

            let settingsForm = null;

            if (id === "expand-appearance") {
                settingsForm = apearanceContainer;
            } else {
                settingsForm = userContainer;
            }

            if (settingsForm) {
                if (settingsForm?.classList.contains("active")) {
                    settingsForm?.classList.remove("active");
                    expandBtn.innerHTML = '<i class="bi bi-chevron-up"></i>';
                } else {
                    settingsForm?.classList.add("active");
                    expandBtn.innerHTML = '<i class="bi bi-chevron-down"></i>';
                }
            }
        });
    });

headerArrow?.addEventListener("click", (event) => {
    if (main?.classList.contains("active")) {
        headerArrow.innerHTML = '<i class="bi bi-arrow-left"></i>';
    } else {
        headerArrow.innerHTML = '<i class="bi bi-arrow-right"></i>';
    }

    aside.classList.toggle("active");
    main.classList.toggle("active");
});

headerFunnel?.addEventListener("click", (event) => {
    searchDialog?.classList.toggle("active");
});

searchClose?.addEventListener("click", () => {
    searchDialog?.classList.remove("active");
});

// FUNKCIJE
// vrsimo proveru localStorage-a
function check(x, y) {
    return x ? x : y;
}

function checkColor(tag) {
    let color = check(localStorage.backgroundColor, "#ffffff");
    tag.style.backgroundColor = color;
}
function checkActiveBtn() {
    let id = check(localStorage.room, "general");
    let tag = document.querySelector(`#${id}`);
    tag.classList.add("active");
}

function changeNotificationIcon(type = "warning") {
    if (notificationDialogIcon) {
        if (type === "success") {
            notificationDialogIcon.innerHTML = '<i class="bi bi-check2-circle text-success"></i>';
        } else if (type === "error") {
            notificationDialogIcon.innerHTML = '<i class="bi bi-exclamation-circle text-danger"></i>';
        } else {
            notificationDialogIcon.innerHTML = '<i class="bi bi-exclamation-circle"></i>';
        }
    }
}

function scrollToLastMessage() {
    const lastMessage = document.querySelector(".main__content-list-chat:last-child");
    if (lastMessage) {
        lastMessage.scrollIntoView({ behavior: "smooth" });
    }
}

const handleCloseAside = () => {
    if (window.innerWidth <= 992) {
        aside.classList.remove("active");
        main.classList.add("active");
    }
};

// prikazuju se najskorije poruke

// ispisuje obavestenje o promeni Username-a ------>  IZMENITI OVO
function displayNotification(newUser) {
    let interval = null;
    let oldUser = check(localStorage.username, "anonymous");
    let br = 0;
    if (interval === null) {
        if (
            (newUser.length === oldUser.length && !newUser.includes(oldUser)) ||
            newUser.length > oldUser.length ||
            newUser.length < oldUser.length
        ) {
            interval = setInterval(() => {
                changeNotificationIcon("success");
                notificationDialogContent.innerHTML = `Username is set to ${newUser}.`;
                notificationDialog.classList.add("active");
                br++;
                if (br > 30 * 10) {
                    clearInterval(interval);
                    notificationDialog.classList.remove("active");
                    notificationDialogContent.innerHTML = "";
                    interval = null;
                }
            }, 1000 / 100);
        }
    }
}

// pozivi funkcija
checkColor(messagesListContainer);
checkActiveBtn();

// INSTANCE KLASA
let chatroom = new Classroom(check(localStorage.room, "general"), check(localStorage.username, "anonymous"));
let chatUI = new ChatUI(messagesList);

// ISPIS DOKUMENATA IZ DB NA STRANICI
chatroom.getChats((d) => {
    chatUI.templateLI(d);
    chatUI.reorderMessages(check(localStorage.username, "anonymous"));
    scrollToLastMessage();
});

// EVENT LISTENERS

// SUBMIT DUGME SEND = POSALJI PORUKU
function addNewMessage(e) {
    e.preventDefault();
    let formInputValue = formInput.value;
    formInput.value = "";
    if (formInputValue?.trim()?.length > 0) {
        chatroom
            .addChat(formInputValue)
            .then(() => {
                scrollToLastMessage();

                console.log(`Message sent`);
            })
            .catch((err) => {
                console.log(`Error ${err}`);
            });
    } else {
        changeNotificationIcon("warning");
        notificationDialogContent.innerHTML = `Please, make sure to enter valid input.`;
        notificationDialog.classList.add("active");

        setTimeout(() => {
            notificationDialog.classList.remove("active");
            notificationDialogContent.innerHTML = "";
        }, 3 * 1000);
    }
}

formSend.addEventListener("submit", (e) => {
    addNewMessage(e);
});

sendBtn.addEventListener("click", (event) => {
    addNewMessage(event);
});

// SUBMIT DUGME UPDATE = IZMENI KORISNICKO IME
formUsername.addEventListener("submit", (e) => {
    e.preventDefault();
    let inputUsernameValue = inputUsername.value;
    chatroom.updateUsername(inputUsernameValue);

    if (inputUsernameValue.length >= 2 && inputUsernameValue.length <= 10 && !inputUsernameValue.includes(" ")) {
        displayNotification(inputUsernameValue);
        localStorage.setItem("username", inputUsernameValue);
        chatUI.reorderMessages(check(localStorage.username, "anonymous"));
    } else {
        changeNotificationIcon("warning");
        notificationDialogContent.innerHTML = `Please, make sure to enter valid username. Username can not contain spaces and must be at least 2 characters long.`;
        notificationDialog.classList.add("active");

        setTimeout(() => {
            notificationDialog.classList.remove("active");
            notificationDialogContent.innerHTML = "";
        }, 3 * 1000);
    }
    inputUsername.value = "";

    handleCloseAside();
});

//KLIK NA DUGME U NAVBARU = OTVORI SE TA SOBA
channelList.addEventListener("click", (e) => {
    e.preventDefault();
    let activeBtnClass = document.querySelectorAll(".aside__content-list-channel.active");
    activeBtnClass.forEach((element) => {
        element.classList.remove("active");
    });

    if (e.target.tagName === "LI") {
        e.target.classList.add("active");
        chatUI.clear();
        chatroom.updateRoom(e.target.id);
        localStorage.setItem("room", e.target.id);
        chatroom.getChats((d) => {
            chatUI.templateLI(d);
            chatUI.reorderMessages(check(localStorage.username, "anonymous"));
            scrollToLastMessage();
        });
        handleCloseAside();
    }
});

// KLIK NA DUGME UPDATE COLOR = MENJA SE POZADINSKA BOJA CETA
formColor.addEventListener("submit", function (e) {
    e.preventDefault();
    let inputColorValue = inputColor.value;
    messagesListContainer.style.backgroundColor = inputColorValue;
    localStorage.setItem("backgroundColor", inputColorValue);
    handleCloseAside();
});

// KLIK NA DUGME SET DATES = PRIKAZ PORUKA U IZABRANOM VREMSKOM INTERVALU IZ TE SOBE
searchDialog.addEventListener("submit", function (e) {
    e.preventDefault();
    let inputStartDateValue = inputStartDate.value;
    let inputDueDateValue = inputDueDate.value;
    if (inputStartDateValue === "" || inputDueDateValue === "" || inputStartDateValue >= inputDueDateValue) {
        notificationDialog.classList.add("active");
        notificationDialogContent.innerHTML = `Please, select valid dates.`;
        changeNotificationIcon("error");

        setTimeout(() => {
            notificationDialog.classList.remove("active");
            notificationDialogContent.innerHTML = "";
        }, 3 * 1000);
    } else {
        chatUI.clear();
        chatroom.getMessages(inputStartDateValue, inputDueDateValue, (d) => {
            chatUI.templateLI(d);
            chatUI.reorderMessages(check(localStorage.username, "anonymous"));
        });
    }
    inputStartDate.value = "";
    inputDueDate.value = "";
    searchDialog?.classList.remove("active");
});

// KLIK NA KANTICU = BRISANJE PORUKE
messagesList.addEventListener("click", (event) => {
    event.preventDefault();
    if (event.target.tagName === "I") {
        let li = event.target.parentElement.parentElement;
        const currentUsername = check(localStorage.username, "anonymous");
        if (li.classList.contains(currentUsername)) {
            if (confirm("Are you sure you want to delete this message?")) {
                li.remove();
                chatroom.deleteChat(li.id);
            }
        } else {
            li.remove();
        }
    }
});

// Swiper
let swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
});

// Close and show Introduction
skipBtns?.forEach((skipBtn) => {
    skipBtn.addEventListener("click", () => {
        introductionContainer.classList.remove("active");
        localStorage.setItem("introduction", "seen");
    });
});

window.addEventListener("load", () => {
    const sawIntroduction = localStorage.getItem("introduction");
    if (!sawIntroduction) {
        introductionContainer.classList.add("active");
    } else {
        introductionContainer.classList.remove("active");
    }
});

// Confetti
let W = window.innerWidth;
let H = window.innerHeight;
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const maxConfettis = 150;
const particles = [];

const possibleColors = [
    "DodgerBlue",
    "OliveDrab",
    "Gold",
    "Pink",
    "SlateBlue",
    "LightBlue",
    "Gold",
    "Violet",
    "PaleGreen",
    "SteelBlue",
    "SandyBrown",
    "Chocolate",
    "Crimson",
];

function randomFromTo(from, to) {
    return Math.floor(Math.random() * (to - from + 1) + from);
}

function confettiParticle() {
    this.x = Math.random() * W; // x
    this.y = Math.random() * H - H; // y
    this.r = randomFromTo(11, 33); // radius
    this.d = Math.random() * maxConfettis + 11;
    this.color = possibleColors[Math.floor(Math.random() * possibleColors.length)];
    this.tilt = Math.floor(Math.random() * 33) - 11;
    this.tiltAngleIncremental = Math.random() * 0.07 + 0.05;
    this.tiltAngle = 0;

    this.draw = function () {
        context.beginPath();
        context.lineWidth = this.r / 2;
        context.strokeStyle = this.color;
        context.moveTo(this.x + this.tilt + this.r / 3, this.y);
        context.lineTo(this.x + this.tilt, this.y + this.tilt + this.r / 5);
        return context.stroke();
    };
}

function Draw() {
    const results = [];

    // Magical recursive functional love
    requestAnimationFrame(Draw);

    context.clearRect(0, 0, W, window.innerHeight);

    for (var i = 0; i < maxConfettis; i++) {
        results.push(particles[i].draw());
    }

    let particle = {};
    let remainingFlakes = 0;
    for (var i = 0; i < maxConfettis; i++) {
        particle = particles[i];

        particle.tiltAngle += particle.tiltAngleIncremental;
        particle.y += (Math.cos(particle.d) + 3 + particle.r / 2) / 2;
        particle.tilt = Math.sin(particle.tiltAngle - i / 3) * 15;

        if (particle.y <= H) remainingFlakes++;

        // If a confetti has fluttered out of view,
        // bring it back to above the viewport and let if re-fall.
        if (particle.x > W + 30 || particle.x < -30 || particle.y > H) {
            particle.x = Math.random() * W;
            particle.y = -30;
            particle.tilt = Math.floor(Math.random() * 10) - 20;
        }
    }

    return results;
}

window.addEventListener(
    "resize",
    function () {
        W = window.innerWidth;
        H = window.innerHeight;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    },
    false
);

// Push new confetti objects to `particles[]`
for (var i = 0; i < maxConfettis; i++) {
    particles.push(new confettiParticle());
}

// Initialize
canvas.width = W;
canvas.height = H;
Draw();
