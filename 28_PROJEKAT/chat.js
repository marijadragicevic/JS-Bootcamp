export class Classroom {
    constructor(rm, usr) {
        this.room = rm;
        this.username = usr;
        this.chats = db.collection("chats");
    }
    // seteri polja
    set room(rm) {
        this._room = rm;
    }
    set username(usr) {
        if (usr.length >= 2 && usr.length <= 10 && !usr.includes(" ")) {
            this._username = usr;
        }
        else {
            alert(`Wrong input!`);
        }
    }
    // geteri polja
    get room() {
        return this._room;
    }
    get username() {
        return this._username;
    }

    // Dodavanje nove poruke
    async addChat(mess) {
        let docChat = {
            message: mess,
            username: this.username,
            room: this.room,
            created_at: firebase.firestore.Timestamp.fromDate(new Date())
        }
        let response = await this.chats.add(docChat);
        return response;
    }

    // kreirati callback metod getChats()
    getChats(callback) {
        this.chats
            .where("room", "==", this.room)
            .orderBy("created_at")
            .onSnapshot(snapshot => {
                snapshot.docChanges().forEach(change => {
                    if (change.type === "added") {
                        callback(change.doc.data());
                    }
                });
            });
    }

    updateUsername(newUsername) {
        this.username = newUsername;
    }
    updateRoom(newRoom) {
        this.room = newRoom;
    }
}

