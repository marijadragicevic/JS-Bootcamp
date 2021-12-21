// primer
/*function ispisKonzola1(niz) {
    let red = " ";
    for (let i = 0; i < niz.length; i++) {
        red += niz[i] + " ";
    }
    console.log(red);
}
function ispisHTML1(niz) {
    let red = " ";
    for (let i = 0; i < niz.length; i++) {
        red += niz[i] + " ";
    }
    document.body.innerHTML += `<div>${red}</div>`;
}

let brojevi = [1, 6, -4, 9];
ispisKonzola1(brojevi);
ispisHTML1(brojevi);*/

function ispisKonzola(poruka) {
    console.log(poruka);
}

function ispisStranica(poruka) {
    document.body.innerHTML += `<div>${poruka}</div>`;
}

function ispisNiza(niz, cb) {
    let red = " ";
    for (let i = 0; i < niz.length; i++) {
        red += niz[i] + " ";

    }
    cb(red); // moze vise callback funkcija da se pozove u () i ovde
}

let brojevi = [1, 6, -4, 9];

ispisNiza(brojevi, ispisKonzola);
ispisNiza(brojevi, ispisStranica);


// Isti zadatak samo se pozivaju anonimne funkcije
// poziv funkcije
ispisNiza(brojevi, function (poruka) {
    console.log(poruka);
});

// poziv funkcije
ispisNiza(brojevi, function (poruka) {
    document.body.innerHTML += `<div>${poruka}</div>`
});

// Isti zadatak samo se pozivaju arrow funkcije

ispisNiza(brojevi, poruka => {
    console.log(poruka);
});

ispisNiza(brojevi, poruka => {
    document.body.innerHTML += `<div>${poruka}</div>`
});

/*
a) odredi broj maksimalnih elemenata u celobrojnom nizu
b) odredi broj minimalnih elemenata u celobrojnom nizu //pomocu callback funkcija
 */


/*
function maxEl(niz) {
    let max = niz[0];
    for (let i = 1; i < niz.length; i++) {
        if (niz[i] > max) {
            max = niz[i];
        }
    }
    return max;
}

function minEl(niz) {
    let min = niz[0];
    for (let i = 1; i < niz.length; i++) {
        if (niz[i] < min) {
            min = niz[i];
        }
    }
    return min;
}


function brojSvojstvoNiz(niz, svojstvo) {
    let s = svojstvo(niz);
    let broj = 0;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i] == s) {
            broj++;
        }
    }
    return broj;
}

let temperatura = [0, 0, 1, 2, 2, 1, 2, 1, 0, 0]
console.log(brojSvojstvoNiz(temperatura, maxEl));
console.log(brojSvojstvoNiz(temperatura, minEl));

*/

function maxMinEl(niz) {
    let max = niz[0];
    let min = niz[0];
    for (let i = 1; i < niz.length; i++) {
        if (niz[i] > max) {
            max = niz[i];
        }
        if (niz[i] < min) {
            min = niz[i];
        }
    }
    return [min, max];
}

function brojSvojstvoNiz2(niz, svojstvo, index) {
    let temp = svojstvo(niz);
    let s = temp[index];
    let broj = 0;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i] == s) {
            broj++;
        }
    }
    return broj;
}

const MAX_INDEX = 1; // ili pisanjem broja indeksa u nizu[min,max] ili uvodjenjem 
const MIN_INDEX = 0;// konstanti


let temperatura = [0, 0, 1, 2, 2, 1, 2, 1, 0, 0]
console.log(brojSvojstvoNiz2(temperatura, maxMinEl, 1/*MAX_INDEX*/));
console.log(brojSvojstvoNiz2(temperatura, maxMinEl, 0/*MIN_INDEX*/));

