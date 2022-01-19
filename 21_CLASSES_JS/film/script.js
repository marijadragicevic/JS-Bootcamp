import { Film } from "./film.js"; // `` ne rade kod importa

let f1 = new Film("Nebo", "Pera Peric", 2008, [8, 9, 7]);
let f2 = new Film("Voda", "Mika Mikic", 1813, [8, 9, 7, 6]);
let f3 = new Film("Sunce", "Sima Simic", 1905, [7, 6, 7, 7, 9, 7]);

f1.stampaj();
// f1.godIzdanja = 1801;
console.log(f1.godIzdanja);

// Testiram da li moj seter za naslov radi
f1.naslov = "Nebo1";
f1.stampaj();

// Testiram da li moj geter za naslov radi
console.log(f1.reziser);

// dodavanje ocene u film1
// f1.dodajOcenu(10);
// f1.stampaj();

// prikaz svih filmova u tabeli
let tabela =
    `<table border="1">
        <tr>
            <th>Naziv filma</th>
            <th>Reziser</th>
            <th>Godina izdanja</th>
            <th>Ocene</th>
            <th>Prosecna ocena:</th>
        </tr>`;

let filmovi = [f1, f2, f3];

filmovi.forEach(f => {
    tabela +=
        `<tr>
            <td>${f.naslov}</td>
            <td>${f.reziser}</td>
            <td>${f.godIzdanja}</td>
            <td>${f.ocene}</td>
            <td>${f.prosek()}</td>
         </tr>`;
});

tabela += `</table>`
document.body.innerHTML = tabela;

// 21S
console.log(f1.prosek());
console.log(f2.prosek());
console.log(f3.prosek());

let vekFilmova = (array, vek) => {
    let vp = (vek - 1) * 100 + 1;
    let vk = vek * 100;
    array.forEach(el => {
        if (el.godIzdanja >= vp && el.godIzdanja <= vk) {
            console.log(el.naslov);
        }
    });
}
vekFilmova(filmovi, 19);

let prosekOcenaSvi = array => {
    let suma = 0;
    let broj = 0;
    array.forEach(el => {
        el.ocene.forEach(x => {
            suma += x;
        });
        broj += el.ocene.length;
    });
    return (broj == 0) ? 0 : suma / broj;
}
console.log(prosekOcenaSvi(filmovi));

// 22S

let naboljeOcenjeni = array => {
    let p = array[0];
    array.forEach(element => {
        if (p.prosek() < element.prosek()) {
            p = element;
        }
    });
    return p;
}
console.log(naboljeOcenjeni(filmovi));

let osrednjiFilm = array => {
    let prosekSvi = prosekOcenaSvi(array);
    let p = array[0];;
    let razlika = Math.abs(prosekSvi - p.prosek());
    for (let i = 1; i < array.length; i++) {
        if (razlika > Math.abs(prosekSvi - array[i].prosek())) {
            razlika = Math.abs(prosekSvi - array[i].prosek());
            p = array[i];
        }
    }
    return p;
}
// console.log(osrednjiFilm(filmovi));
osrednjiFilm(filmovi).stampaj();

let najmanjaOcenaNajboljeg = array => {
    let najboljiFilm = naboljeOcenjeni(array);
    let min = najboljiFilm.ocene[0];
    for (let i = 1; i < najboljiFilm.ocene.length; i++) {
        if (min > najboljiFilm.ocene[i]) {
            min = najboljiFilm.ocene[i];
        }
    }
    console.log(min);
}
najmanjaOcenaNajboljeg(filmovi);

let najmanjaOcena = array => {
    let min = array[0].ocene[0];
    array.forEach(element => {
        element.ocene.forEach(o => {
            if (min > o) {
                min = o;
            }
        });
    });
    return min;
}
console.log(najmanjaOcena(filmovi));

// 23S
// niz ocena svakog filma
// f1=[...]
// f2=[.....]
// f3=[......]
// f=[niz svih ocena]

// let f = [];
// f = f.concat(f1, f2, f3);
// f = f.concat(f1);
// f = f.concat(f2);
// f = f.concat(f3);
// console.log(f);

// moze i preko push; push stvara podnizove, a contact sve ih spaja u jedan
// kada radimo push typeof je array,a za contact je object  

let sveOcene = array => {
    let arrSveOcene = [];
    array.forEach(f => {
        arrSveOcene = arrSveOcene.concat(f.ocene);
    });
    return arrSveOcene;
}
console.log(sveOcene(filmovi));

// Niz koji prosledjujemo je niz svih ocena
let nizOcena = sveOcene(filmovi);

let najcescaOcena = array => {
    let pretpostavkaElementa = array[0];
    let pretpostavkaElemPojavljivanja = 1;  // sigurno se jednom pojavljivao
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        let elementBr = 0;
        for (let j = 0; j < array.length; j++) {
            if (element = array[j]) {
                //naisli smo na isti element
                elementBr++;
            }
        }
        if (pretpostavkaElemPojavljivanja < elementBr) {
            pretpostavkaElemPojavljivanja = elementBr;
            pretpostavkaElementa = element;
        }
    }
    return pretpostavkaElementa;
}

console.log(najcescaOcena(nizOcena));

let iznadOcena = (x, array) => {
    let nizFilmova = [];
    array.forEach(f => {
        if (f.prosek() > x) {
            nizFilmova.push(f);
        }
    });
    return nizFilmova;
}
// ne moze samo stampaj();zato sto dobijamo niz objekata klase Film a stampaj vazi za jedan objekat
console.log(iznadOcena(7.4, filmovi));

let iznadOcenaNoviji = (x, array) => {
    let nizFilmovi = iznadOcena(x, array);
    let p = nizFilmovi[0];
    nizFilmovi.forEach(el => {
        if (el.godIzdanja > p.godIzdanja) {
            p = el;
        }
    });
    console.log(p);
}
iznadOcenaNoviji(7, filmovi);
