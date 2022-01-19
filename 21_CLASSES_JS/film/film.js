export class Film {
    constructor(n, r, gi, o) {
        this.naslov = n;
        this.reziser = r;
        this.godIzdanja = gi;
        this.ocene = o;
    }
    // seter i geter za _naslov
    set naslov(n) {
        this._naslov = n;
    }
    get naslov() {
        return this._naslov;
    }
    // seter i geter za _reziser
    set reziser(r) {
        let r1 = r.trim();
        if (r1.length > 0) {
            this._reziser = r1;
        }
        else {
            this._reziser = "Reziser";
        }
    }
    get reziser() {
        return this._reziser;
    }
    //  seter i geter za _godIzdanja
    set godIzdanja(gi) {
        if (gi > 1800) {
            this._godIzdanja = gi;
        }
        else {
            this._godIzdanja = 1800;
        }
    }
    get godIzdanja() {
        return this._godIzdanja;
    }
    // seter i geter za _ocene
    set ocene(o) {
        this._ocene = o;
    }
    get ocene() {
        return this._ocene;
    }
    // DODAVANJE  OCENE
    dodajOcenu(novaOcena) {
        this._ocene.push(novaOcena);
    }

    // OSTALE METODE
    stampaj() {
        console.log(this);
    }
    prosek() {
        let suma = 0;
        this.ocene.forEach(element => {
            suma += element;
        });
        return (this.ocene.length == 0) ? 0 : suma / this.ocene.length;
    }
}

// export default Film;