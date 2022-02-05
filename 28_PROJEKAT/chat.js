export class Classroom {

    constructor(rm, usr) {
        this.room = rm;
        this.username = usr;
        this.chats = db.collection("chats");
        this.unsub = false;
    }
    // Seteri polja
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
    // Geteri polja
    get room() {
        return this._room;
    }
    get username() {
        return this._username;
    }

    updateUsername(newUsername) {
        this.username = newUsername;
    }

    updateRoom(newRoom) {
        this.room = newRoom;
        if (this.unsub) {
            this.unsub();
        }
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

    // Callback metod getChats()
    getChats(callback) {
        this.unsub = this.chats
            .where("room", "==", this.room)
            .orderBy("created_at")
            .onSnapshot(snapshot => {
                snapshot.docChanges().forEach(change => {
                    if (change.type === "added") {
                        callback(change.doc);
                    }
                });
            });
    }

    // Callback mestod getMessages()-dohvatanje dokumenata koji su nastali u odredjenom vrenskom periodu
    getMessages(date1, date2, callback) {
        date1 = firebase.firestore.Timestamp.fromDate(new Date(date1));
        date2 = firebase.firestore.Timestamp.fromDate(new Date(date2));
        this.chats
            .where("room", "==", this.room)
            .where("created_at", ">", date1)
            .where("created_at", "<", date2)
            .orderBy("created_at")
            .onSnapshot(snapshot => {
                snapshot.docChanges().forEach(change => {
                    if (change.type === "added") {
                        callback(change.doc);
                    }
                });
            });
    }

    // Brisanje poruke iz baze
    deleteChat(id) {
        this.chats
            .doc(id)
            .delete()
            .then(() => {
                alert('Your message has been deleted');
            }).catch(err => {
                console.log(`Error ${err}`);
            });
    }

}

