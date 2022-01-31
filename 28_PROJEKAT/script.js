import { Classroom } from "./chat.js";

let chatroom1 = new Classroom("js", "mikamikic");
console.log(chatroom1.username, chatroom1.room); // testiramo getere
chatroom1.username = "Dusan"; // testiramo setere
chatroom1.room = "general";
console.log(chatroom1.username, chatroom1.room);

let chatroom2 = new Classroom("general", "Milena");
// chatroom2.addChat("HR trening");
// chatroom2.addChat(`Posaljite CV`)
chatroom2.addChat(`Trening pisanja CV-a`)
    .then(() => console.log(`Uspesno dodat chat`))
    .catch(err => console.log(`Greska ${err}`))
chatroom2.getChats(() => {

});