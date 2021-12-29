let cars = ["Toyota", "BMW", "Volvo"];
console.log(cars);

let numbers = [6, -7, 0, -3.4];
console.log(numbers);

let random = [6, "Stefan", -8.8, true, [1, 2, 3]];
console.log(random);

console.log(cars[0]); // indeks se racuna od 0;
console.log(cars[1]);
console.log(cars[2]);
// console.log(cars[3]); // undefined 

console.log(random[4][1]);

cars[0] = "Peugeot";
console.log(cars);

// cars[0] = undefined;  nacin da se ukloni element iz niza

// 1.
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

// 2.
let numb = [1, 2, 3, 4, 5];
let numb2 = [5, 6, 7, 8];
let numb3 = [1, -2, 3];

let sumaElemenata = niz => {
    let suma = 0;
    for (let i = 0; i < niz.length; i++) {
        suma += niz[i];
    }
    return suma;
}

console.log(`Suma elemenata prvog niza je ${sumaElemenata(numb)}`);
console.log(`Suma elemenata drugog niza je ${sumaElemenata(numb2)}`);
console.log(`Suma elemenata treceg niza je ${sumaElemenata(numb3)}`);

// 3.
let proizvodElemenata = niz => {
    let proizvod = 1;
    for (let i = 0; i < niz.length; i++) {
        proizvod *= niz[i];
    }
    return proizvod;
}

console.log(proizvodElemenata(numb2));
console.log(proizvodElemenata(numb3));

// 4.
// 1 nacin
let arsr = niz => {
    let suma = 0;
    let broj = 0;
    for (let i = 0; i < niz.length; i++) {
        suma += niz[i];
        broj++;
    }
    return (broj != 0) ? suma / broj : 0;
}

console.log(arsr(numb));
console.log(arsr(numb2));
console.log(arsr(numb3));
console.log(arsr([]));

// 2.nacin
let arSr2 = niz => {
    let suma = sumaElemenata(niz);
    let broj = niz.length;
    return (broj != 0) ? suma / broj : 0;
}

console.log(arSr2(numb));
console.log(arSr2(numb2));
console.log(arSr2(numb3));
console.log(arSr2([]));


//3.nacin
let arSr3 = niz => (niz.length != 0) ? sumaElemenata(niz) / niz.length : 0;

console.log(arSr3(numb));
console.log(arSr3(numb2));
console.log(arSr3(numb3));
console.log(arSr3([]));


// 4'. odrediti srednju vrednost parnih elemenata niza

let arsrParnih = niz => {
    let suma = 0;
    let broj = 0;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i] % 2 == 0) {
            suma += niz[i];
            broj++;
        }

    }
    return (broj == 0) ? 0 : suma / broj;
}

console.log(arsrParnih(numb));
// console.log(arsr(1, 2, "Pera")); primer NaN (ako imamo string ili drugi niz)



// 5.

let niz = [6, 8, 5, 6]; // 0,1,2,4
/*

let max2 = (a, b) => (a > b) ? a : b;
let maxVrednost = niz => max2(max2(max2(niz[0], niz[1]), niz[2]), niz[3]);
console.log(maxVrednost(niz));*/

// 6. 
/*
let min2 = (a, b) => (a < b) ? a : b;
let minVrednost = niz => min2(min2(min2(niz[0], niz[1]), niz[2]), niz[3]);
console.log(minVrednost(niz));*/

// 5.
let maxVrednost = niz => {

    let max = niz[0];
    for (let i = 1; i < niz.length; i++) {
        if (niz[i] > max) {
            max = niz[i];
        }
    }

    return max;
}
console.log(maxVrednost(niz));

/*

Ulaz: niz = [ 1, 11, 6, 11]

max = 1

i  | nix[i]     |   max
-----------------------------------
1 |     11       |   11
2 |      6       |   11
3 |     11       |   11



*/

/*
Ulaz: niz = [ 1, 8, 11, 5, 2]

max = 1

i  | nix[i]     |   max
-----------------------------------
1 |     8       |   8
2 |     11      |   11
3 |     5       |   11
4 |     2       |   11

*/

// 6. 

let minVrednost = niz => {

    let min = niz[0];
    for (let i = 1; i < niz.length; i++) {
        if (niz[i] < min) {
            min = niz[i];
        }
    }

    return min;
}
console.log(maxVrednost(niz));

// 7.
// let niz = [36, 28, 15, 16];

let maxIndex = niz => {

    let max = niz[0];
    let index = 0;
    for (let i = 1; i < niz.length; i++) {
        if (max < niz[i]) {
            max = niz[i];
            index = i;
        }
    }
    return index;
}
console.log(maxIndex(niz));

// 7.b)Odredi broj maksimalnih el celobrojnog niza
let niz2 = [1, 2, 3, 4, 5]
let maxBoj = niz => {
    let max = niz[0];
    let broj = 0;
    for (let i = 1; i < niz.length; i++) {
        if (max < niz[i]) {
            max = niz[i];
        }
    }
    for (i = 0; i < niz.length; i++) {
        if (max == niz[i]) {
            broj++;
        }
    }
    return broj;
}
console.log(maxBoj(niz2));

// 8.

let minIndex = niz => {

    let index = 0;
    let min = niz[0];
    for (let i = 1; i < niz.length; i++) {
        if (min > niz[i]) {
            min = niz[i];
            index = i;
        }
    }
    return index;
}
console.log(minIndex(niz));



// 9.
/*
let veciOdArSr = niz => {

     //pozivanje funkcije koju smo napravili vec gore

    let br = 0;
    let ArSr = arsr(niz);
    for (let i = 0; i < niz.length; i++) {
        if (niz[i] > ArSr) {
            br++;
        }
    }
    return br;
}
console.log(veciOdArSr(niz));*/

// bez pozivanja vec postojecih funkcija

let veciOdSV = niz => {
    let zbir = 0;
    let br = 0;
    for (let i = 0; i < niz.length; i++) {
        zbir += niz[i];
        br++;
    }
    let arsr = zbir / br;
    let broj = 0;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i] > arsr) {
            broj++;
        }
    }
    return broj;
}
console.log(veciOdSV(niz));

// 10.
let zbirPoz = niz => {

    let zbir = 0;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i] > 0) {
            zbir += niz[i];
        }
    }
    return zbir;
}
console.log(zbirPoz(niz));


// 11.
let parniBrojevi = niz => {

    let br = 0;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i] % 2 == 0) {
            br++;
        }
    }
    return br;
}
console.log(parniBrojevi(niz));

// 16. Dat je niz stavki za kupovinu (članovi niza su stringovi). Prolaskom kroz niz napraviti neuređenu listu i ispisati je u html dokument.

let kupovina = ["hleb", "mleko", "jaja", "cokolada"];

let neuredjenLista = niz => {
    let lista = `<ul>`;
    for (let i = 0; i < niz.length; i++) {
        lista += `<li>${niz[i]}</li>`;
    }
    lista += `</ul>`;
    return lista;
}
// slican nacin; na casu radjen;
let ispisListe = niz => {
    let rezultat = "";
    rezultat += `<ul>`;
    for (let i = 0; i < niz.length; i++) {
        rezultat += `<li>${niz[i]}</li>`
    }
    rezultat += `</ul>`;
    return rezultat;
}
// document.body.innerHTML += ispisListe(kupovina);
// neuredjenLista(kupovina);

document.getElementById(`d1`).innerHTML += ispisListe(kupovina);

// 17. Dat je niz imena košarkaškog tima. Prolaskom kroz niz formirati tabelu u čijim su redovima imena tima, i tabelu ispisati u html dokument.

let tim = ["Partizan", "Zvezda", "Napredak", "Mladost"];

let KosarkaskiTim = niz => {
    let tabela = `<table border="1" style="border-collapse:collapse;">`
    for (let i = 0; i < niz.length; i++) {
        tabela +=
            `
        <tr>
        <td>${niz[i]}</td>
        </tr>
        `;
    }
    tabela += `</table>`
    return tabela;
}
document.getElementById(`tabela`).innerHTML += KosarkaskiTim(tim);

// 18. Dat je niz stringova čiji su članovi putanje do slika. Prikazati sve sliku u html dokumentu sa putanjama navedenim u nizu.

let putanja = ["../06_RESPONSIVE/img/slika1.jpg", "../06_RESPONSIVE/img/slika2.jpg", "../06_RESPONSIVE/img/slika3.jpg"];

let slika = niz => {
    let img = "";
    for (let i = 0; i < niz.length; i++) {
        img += `<img src="${niz[i]}">`;
    }
    return img;
}
document.getElementById(`slika`).innerHTML += slika(putanja);

// 19. Ispisati dužinu svakog elementa u nizu stringova.
niz = ["sunce", "zemlja", "voda", "vazduha"];

let duzinaEl = niz => {
    for (let i = 0; i < niz.length; i++) {
        console.log(niz[i].length);
    }
}
duzinaEl(niz);
// 20. Odrediti element u nizu stringova sa najvećom dužinom.

let stringMaxDuzina = niz => {
    let maxDuzina = niz[0].length;
    let maxString = niz[0];
    for (let i = 1; i < niz.length; i++) {
        if (maxDuzina < niz[i].length) {
            maxDuzina = niz[i].length;
            maxString = niz[i];
        }
    }
    return maxString;
}
console.log(stringMaxDuzina(niz));

// 21. Odrediti broj elemenata u nizu stringova čija je dužina veća od prosečne dužine svih stringova u nizu.

let vecaDuzina = niz => {
    let suma = 0;
    let br = 0;
    for (let i = 0; i < niz.length; i++) {
        suma += niz[i].length;
        br++;
    }
    let Lsr = suma / br;
    let broj = 0
    for (let i = 0; i < niz.length; i++) {
        if (niz[i].length > Lsr) {
            broj++;
        }
    }
    return broj;
}
console.log(vecaDuzina(niz));

// moze i da se koriste 2 funkcije
// prva funkcija
let prosDuzina = niz => {
    let suma = 0;
    let broj = 0;
    for (let i = 0; i < niz.length; i++) {
        suma += niz[i].length;
        broj++;
    }
    return (broj == 0) ? 0 : suma / broj;
}
console.log(prosDuzina(niz));
//druga funkcija
let brojVeciOdProsDuz = niz => {
    let broj = 0;
    let pd = prosDuzina(niz);
    for (let i = 0; i < niz.length; i++) {
        if (niz[i].length > pd) {
            broj++;
        }
    }
    return broj;
}
console.log(brojVeciOdProsDuz(niz));


// 22. Odrediti broj elemenata u nizu stringova koji sadrže slovo 'a’. 

let aSlovo = niz => {
    let br = 0;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i].includes("a")) {
            br++;
        }
    }
    return br;
}
console.log(aSlovo(niz));


// 22.b) Odrediti broj ponavljanja slova 'a' u nizu stringova


let brojKarakteraA = niz => {
    let br = 0;
    for (let i = 0; i < niz.length; i++) {
        //niz[i] je string
        let element = niz[i];
        // sada prolazimo kroz sve karaktere stringa elementa
        for (let j = 0; j < element.length; j++) {
            if (element[j] == "a") {
                br++;
            }
        }
    }
    return br;
}
console.log(brojKarakteraA(niz));


// 23. Odrediti broj elemenata u nizu stringova koji počinju na slovo 'a' ili 'A’.

//24.

let a = [1, 3, 5, 7, 9];
let b = [2, 4, 6, 8, 10];

let noviNiz = (a, b) => {
    let c = [];
    for (let i = 0; i < a.length; i++) {

        c[2 * i] = a[i];
        c[2 * i + 1] = b[i];

    }
    return c;
};
let rez = noviNiz(a, b);
console.log(rez);

// ukoliko su nizovu a i b razlicite duzine
let noviNiz2 = (a, b) => {
    let c = [];
    let m = Math.min(a.length, b.length); // odredjujemo koji niz je manji
    for (let i = 0; i < m; i++) {
        c.push(a[i]);
        c.push(b[i]);
    }
    for (let i = m; i < a.length; i++) {
        c.push(a[i]);
    }
    for (let i = m; i < b.length; i++) {
        c.push(b[i]);
    }
    return c;
};
console.log(noviNiz2(a, b));

// 25. 