class Pacijent {
    constructor(i, v, t) {
        this.ime = i;
        this.visina = v;
        this.tezina = t;
    }

    set ime(i) {
        this._ime = i;
    }
    get ime() {
        return this._ime;
    }

    set visina(v) {
        if (v > 0 && v <= 250) {
            this._visina = v;
        }
        else {
            this._visina = 150;
        }
    }
    get visina() {
        return this._visina;
    }

    set tezina(t) {
        if (t > 0 && t <= 550) {
            this._tezina = t;
        }
        else {
            this._tezina = 50;
        }
    }
    get tezina() {
        return this._tezina;
    }

    // OSTALE METODE
    stampaj() {
        console.log(this.ime, this.visina, this.tezina);
    }
    stampajListu() {
        let htmlLista =
            `<ul>
                <li>Ime: ${this.ime}</li>
                <li>Visina: ${this.visina}</li>
                <li>Tezina: ${this.tezina}</li>
            </ul> `;
        return htmlLista;
    }
    Bmi() {
        let bmi = this.tezina / (this.visina / 100) ** 2;
        return bmi;
    }
    Kriticni() {
        let bmi = this.Bmi();
        return (bmi < 15 || bmi > 40) ? true : false;
    }
}

export default Pacijent;