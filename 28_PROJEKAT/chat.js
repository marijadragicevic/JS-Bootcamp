export class Classroom {

    constructor(rm, usr) {
        this.room = rm;
        this.username = usr;
        this.chats = db.collection("chats");
        //kada nam treba nesto i mora da bude predefinisano,stvljamo to u konstr zato sto se on sigurno ocita
        this.unsub = false; // Odreditili smo da je false kao signal da je stranica 1. put ucitana
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
        // stavljamo sve metode u promenljivu i pozivamo je kao funkciju unsub();
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

    // poziv getChats i samo u if uporediti vremena ? ili ova metoda
    getMessages(date1, date2, callback) {
        date1 = firebase.firestore.Timestamp.fromDate(new Date(date1));
        date2 = firebase.firestore.Timestamp.fromDate(new Date(date2))
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

    updateUsername(newUsername) {
        this.username = newUsername;
    }

    updateRoom(newRoom) {
        this.room = newRoom;
        if (this.unsub != false) { // ovo je signal - unsub vise nije false nego je u getChats postalo funkcija
            this.unsub(); // unsub je sada funkcija i poziavam je sa zagradama
        }
    }

    // Brisanje poruke iz baze
    deleteChat(id) {
        this.chats
            .doc(id)
            .delete()
            .then((result) => {
                alert('Your message is deleted');
            }).catch((err) => {
                console.log(`Error ${err}`);
            });
    }

}

