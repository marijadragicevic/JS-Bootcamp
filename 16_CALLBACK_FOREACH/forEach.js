let a = [15, 20, 3, 4, 9];
/*
function ispis(element) {
    console.log(`Element niza je ${element}`);
}

a.forEach(ispis);*/

a.forEach(element => {
    console.log(`Element niza je ${element}`);
});

// Odrediti zbir celobrojnog niza

let zbir = niz => {
    let s = 0;
    niz.forEach(el => {
        s += el;
    });
    return s;
};

let zbirParnih = niz => {
    let s = 0;
    niz.forEach(el => {
        if (el % 2 == 0) {
            s += el;
        }
    });
    return s;
};


let zbirParniIndex = niz => {
    let s = 0;
    niz.forEach((el, index) => {
        if (index % 2 == 0) {
            s += el;
        }
    });
    return s;
};


console.log(zbir(a));
console.log(zbirParnih(a));
console.log(zbirParniIndex(a));


// 3. Odrediti proizvod elemenata celobrojnog niza.

let proizvodEl = niz => {
    let p = 1;
    niz.forEach(el => {
        p *= el;
    });
    return p;
};

console.log(proizvodEl(a));

// 4. Odrediti srednju vrednost elemenata celobrojnog niza

let srvrNiza = niz => {
    let suma = 0;
    let br = 0;
    niz.forEach(el => {
        suma += el;
        br++;
    });
    return (br == 0) ? 0 : suma / br; /*(niz.lenght == 0) ? 0 : suma / niz.lenght;*/

};

console.log(srvrNiza(a));

// 5. Odrediti maksimalnu vrednost u celobrojnom nizu.

let maxVrednost = niz => {
    let max = niz[0];
    niz.forEach(el => {
        if (max < el) {
            max = el;
        }
    });
    return max;
};
console.log(maxVrednost(a));

// 6. Odrediti minimalnu vrednost u celobrojnom nizu.

let minVrednost = niz => {
    let min = niz[0];
    niz.forEach(el => {
        if (min > el) {
            min = el;
        }
    });
    return min;
};
console.log(minVrednost(a));

// 7. Odrediti indeks maksimalnog elementa celobrojnog niza

// prvi nacin; 7. i 8. zad univerzalno je za min i max index el
let elIndex = (niz, funkcija) => {
    let m = funkcija(niz);
    let i = 0;
    niz.forEach((el, index) => {
        if (m == el) {
            i = index;
        }
    });
    return i;
};

// drugi nacin
let IndexMax = niz => {
    let max = niz[0];
    let imax = 0;
    niz.forEach((el, index) => {
        if (el > max) {
            max = el;
            imax = index;
        }
    });
    return imax;
};

console.log(maxElIndex(a, maxVrednost));
console.log(maxElIndex(a, minVrednost));
console.log(IndexMax(a));

// 8. Odrediti indeks minimalnog elementa celobrojnog niza.
/* duzi zapis
let minElIndex = (niz, funkcija) => {
    let min = funkcija(niz);
    let i = 0;
    niz.forEach((el, index) => {
        if (min == el) {
            i = index;
        }
    });
    return i;
};
console.log(minElIndex(a, minVrednost));*/
