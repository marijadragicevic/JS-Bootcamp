console.log(`If ugnjezdeno grananje`);

// 19.zad

let b1 = 5;
let b2 = 2;
let b3 = 4;

if (b1 > b2) {
    if (b1 > b3) {
        console.log(`Najveci broj je ${b1}`);
        if (b2 > b3) {
            console.log(`Srednji broj je ${b2}`);
            console.log(`Najmanji broj je ${b3}`);
        }
        else {
            console.log(`Srednji broj je ${b3}`);
            console.log(`Najmanji broj je ${b1}`);
        }
    }
    else {
        console.log(`Srednji broj je ${b1}`);
        if (b2 > b3) {
            console.log(`Najveci broj je ${b2}`);
            console.log(`Najmanji broj je ${b3}`);
        }
        else {
            console.log(`Najmanji broj je ${b2}`);
            console.log(`Najveci broj je ${b3}`);
        }
    }

}

// 20.zad
let br1 = 2;
let br2 = 5;
if (br1 % 1 == 0 && br2 % 1 == 0) {
    if (br1 > br2) {
        if (br1 % 2 == 0) {
            console.log(`Broj ${br1} je veci od broja ${br2} i paran je broj`);
        }
        else {
            console.log(`Broj ${br1} je veci od broja ${br2} i neparan je broj`);
        }
    }
    else if (br1 < br2) {
        if (br2 % 2 == 0) {
            console.log(`Broj ${b21} je veci od broja ${br1} i paran je broj`);
        }
        else {
            console.log(`Broj ${br2} je veci od broja ${br1} i neparan je broj`);
        }
    }
}
else {
    console.log(`Brojevi ne pripadaju skupu celih brojeva`);
}

// 21.zad

b1 = 12;
b2 = 12;
b3 = 12;
if (b1 > b2 && b1 > b3) {
    console.log(`Najveci broj je broj ${b1}`);
}
else if (b2 > b1 && b2 > b3) {
    console.log(`Najveci broj je broj ${b2}`);
}
else if (b3 > b1 && b3 > b2) {
    console.log(`Najveci broj je broj ${b3}`);
}
else if (b1 == b2 && b2 == b3) {
    console.log(`Brojevi su jednaki`);
}
else {
    console.log(``);
}

// 22.zad
let temp = -22;
if (temp < -15 || temp > 40) {
    console.log(`EKSTREMNE TEMPERATURE`);
}
else {
    console.log(`Normalna temperatura`);
}

// 23.zad

let date = new Date();
let g = date.getFullYear();
if (g % 4 == 0 && g % 100 != 0 || g % 400 == 0) {
    console.log(`Godina ${g} je prestupna`);
}
else {
    console.log(`Godina ${g} nije prestupna`);
}

// 24.zad
let day = date.getDay();
let time = date.getHours();
if (day == 0 || day == 6) {
    if (time > 10 && time < 18) {
        console.log(`Vikend je i butik radi`);
    }
    else {
        console.log(`Vikend je i butik ne radi`);
    }
}

else if (day > 0 && day < 6) {
    if (time > 9 && time < 20) {
        console.log(`Radni dan je i butik radi`);
    }
    else {
        console.log(`Radni dan je i butik ne radi`);
    }
}

