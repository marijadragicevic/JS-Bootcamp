import { Classroom } from "./chat.js";

let Chatroom1 = new Classroom("js", "mikamikic");
console.log(Chatroom1.username, Chatroom1.room); // testiramo getere
Chatroom1.username = "Dusan"; // testiramo setere
Chatroom1.room = "general";
console.log(Chatroom1.username, Chatroom1.room);