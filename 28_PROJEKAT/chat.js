export class Classroom {
    constructor(rm, usr) {
        this.room = rm;
        this.username = usr;
        this.chats = db.collection("chats");
    }
    set room(rm) {
        this._room = rm;
    }
    get room() {
        return this._room;
    }
    set username(usr) {
        this._username = usr;
    }
    get username() {
        return this._username;
    }
}