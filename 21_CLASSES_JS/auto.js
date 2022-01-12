class Auto {
    // constructor ima svaka klasa;
    // svaka klasa moze da ima 1 konstruktor
    // to je metoda i pomocu nje dodeljujemo metode i polja
    constructor(m, b, ik, bv = 5 /*dodajemo difovlte vrednosti da bismo izbegli undefined */) {
        // malo slozeniji dodavanje polja

        /*  osnovno dodavanje polja
        this._marka = m; 
        this._boja = b; 
        this._imaKrov = ik;
        this._brojVrata = bv;
        */

        // trim() brise prazan prostor
        // this.postaviMarku(m); preko obicne metode
        // treba preko setera da se postavi polje
        this.marka = m; // poziva se seter marka
        this.boja = b; // poziva se seter boja
        this.imaKrov = ik; // poziva se seter imaKrov
        this.brojVrata = bv; // poziva se seter brojVrata
    }

    // dodajemo metode
    // svaka metoda moze da pristupa poljima this.polje
    sviraj() {
        console.log("Beep! Beep!");
    }

    vozi(x) {
        console.log(`Auto ${this.marka} vozi ${x} km`);
        // poziva se geter marka
    }
    stamaj() {
        console.log(`Auto marka ${this.marka}, boja ${this.boja}, ima krov ${this.imaKrov}`);
        // svuda su pozvani geteri
    }

    //SETTER JE METODA KOJA MENJA VREDNOST POLJA
    // SETER I GETER ZA POLJE _marka
    // seter mozemo da nazivamo kako hocemo ali najbolje je isto kao i polje samo bez _
    set marka(m) {
        let m1 = m.trim();
        if (m1.length > 0) {
            this._marka = m1;
        }
        else {
            this._marka = "Auto";
        }
    }
    get marka() {
        return this._marka;
    }

    // seter i geter za polje _boja
    set boja(b) {
        this._boja = b;
    }
    get boja() {
        return this._boja;
    }

    // seter i geter za polje _imaKrov
    set imaKrov(ik) {
        if (ik === true || ik === false) {
            this._imaKrov = ik;
        }
        else {
            this._imaKrov = false;
        }
    }
    get imaKrov() {
        return this._imaKrov;
    }

    // seter i geter za polje _brojVrata
    set brojVrata(bv) {
        if (bv > 0) {
            this._brojVrata = bv;
        }
        else {
            this._brojVrata = 1;
        }
    }
    get brojVrata() {
        return this._brojVrata = bv
    }
}

export default Auto;

/* MOZE OBICNE METODE ALI VIZUELNO NIJE LEPO
    // METODA KOJA POSTAVLJA VREDNOST POLJA;

    postaviMarku(m) {
        let m1 = m.trim();
        if (m1.length > 0) {
            this._marka = m1;
        }
        else {
            this._marka = "Auto";
        }

    }

    // METODA KOJA CITA VREDNOST POLJA
    dohvatiMarku() {
        return this._marka;
    }
 */