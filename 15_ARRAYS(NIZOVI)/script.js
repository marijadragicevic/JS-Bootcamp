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
let veciOdArSr = niz => {

    let br = 0;
    let ArSr = niz => (niz.length != 0) ? sumaElemenata(niz) / niz.length : 0;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i] > ArSr) {
            br++;
        }
    }
    return br;
}
console.log(veciOdArSr(niz));

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