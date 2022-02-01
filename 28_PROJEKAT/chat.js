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
        this._username = usr;
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
        //kreiranje dokum/obj  prosledjujem bazi podataka
        let docChat = {
            message: mess,
            username: this.username,
            room: this.room,
            // dohvatanjne trenutnog vremena 
            created_at: firebase.firestore.Timestamp.fromDate(new Date())
        }
        // Da sacuvam dokument u db
        let response = await this.chats.add(docChat);
        return response; // vracam promis i mogu za njega da kazem .then i .catch
    }

    // kreirati callback metod getChats()
    getChats(callback) {
        this.chats
            .where("room", "==", this.room)
            .orderBy("created_at")
            .onSnapshot(snapshot => {
                snapshot.docChanges().forEach(change => {
                    // console.log(change.type); //proveravamo koja je promena nastala
                    // if (change.type === "added") {
                    //     console.log(`Promena u bazi`);
                    // }
                    if (change.type === "added") {
                        // console.log(change.doc.data());
                        callback(change.doc.data());// prosledjivanje dokumenta na ispis(ispis realizujemo kada realizujemo callback)
                    }

                });
            })
    }




    // ne stavljmao  then i cacth u metodu u klasi vec kada pozivamo metodu pisemo then i catch
    // async addChat(poruka) {
    //     let newDoc = await db.collection("chats")
    //         .add({
    //             message: poruka,
    //             username: this.username,
    //             room: this.room,
    //             created_at: firebase.firestore.Timestamp.fromDate(new Date())
    //         })
    //         .then(() => {
    //             console.log(`Uspesno dodat chat`);
    //         }).catch((err) => {
    //             console.log(`Greska ${err}`);
    //         });

    //     return newDoc;

    // }
}