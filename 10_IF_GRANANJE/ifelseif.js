console.log("if else if");

let ocena = 4;
if (ocena == 5) {
    console.log(`Odlican 5`);
}
else if (ocena == 4) {
    console.log(`vrlo dobar 4`);
}
else if (ocena == 3) {
    console.log(`Dobar 3`);
}
else if (ocena == 2) {
    console.log(`Dovoljan 2`);
}
else if (ocena == 1) {
    console.log(`Nedovoljan 1`);
}
else {
    console.log(`Pogresan unos`);
}

console.log(`Kod nakon if - else if`);

////////////////////////////////////////

// 7.zad
let bodovi = 61;
if (bodovi <= 50) {
    console.log(`pali ste ispit`);
}

else if (bodovi < 60) {
    console.log(`ocena 6`);
}
else if (bodovi < 70) {
    console.log(`ocena 7`);
}

else if (bodovi < 80) {
    console.log(`ocena 8`);
}
else if (bodovi < 90) {
    console.log(`ocena 9`);
}
else if (bodovi <= 100) {
    console.log(`ocena 10`);
}
else if (bodovi > 100) {
    console.log(`Bodovi ne mogu uzeti vrednost vecu od 100`);
}
else {
    console.log(`pogresan unos`);
}

//8.zad
let data = new Date();
let dan1 = data.getDay();
if (dan1 == 0) {
    console.log(`Dan je neradni`);
}
else if (dan1 == 6) {
    console.log(`Dan je neradni`);
}

else {
    console.log(`Dan je radni`);
}

// 9.zad
let vreme = data.getHours();
if (vreme < 12) {
    console.log(`Dobro jutro`);
}

else if (vreme < 18) {
    console.log(`Dobar dan`);
}
else {
    console.log(`Dobro vece`);
}

//10.zad
let dat1 = "2020-06-10"
let dat2 = "2020-10-10"
if (dat1 < dat2) {
    console.log(`${dat1} je ranije u odnosu na ${dat2}`);
}
else if (dat1 > dat2) {
    console.log(`${dat2} je ranije u odnosu na ${dat1}`);
}
else {
    console.log(`${dat1} i ${dat2} su isti datumi`);
}


// 11.zad
let time = data.getTime();
if (time < 9) {
    console.log(`Firma ne radi`);
}
else if (time >= 17) {
    console.log(`Firma ne radi`);
}
else {
    console.log(`Firma radi`);
}

//12.zad
let p1 = 9;
let k1 = 15;
let p2 = 10;
let k2 = 16;

if (k1 < p2) {
    console.log(`Smene se ne preklapaju`);
}
else if (k2 < p1) {
    console.log(`Smene se ne preklapaju`);
}
else {
    console.log(`Smene se preklapaju`);
}

//13.zad
let x = 5;
if (x % 2 == 0) {
    console.log(`Broj ${x} je paran`);
}
else {
    console.log(`Broj ${x} je neparan`);
}

//14.zad
if (x % 3 == 0) {
    console.log(`Broj ${x} je deljiv sa 3`);
}
else {
    console.log(`Broj ${x} nije deljiv sa 3`);
}

//15.zad
let b1 = 2;
let b2 = 12;
if (b1 > b2) {
    console.log(`Broj ${b1} je veci`);
    console.log(`Razlika brojeva je ${b1 - b2}`);
}
else if (b1 < b2) {
    console.log(`Broj ${b2} je veci`);
    console.log(`Razlika brojeva je ${b2 - b1}`);
}
else {
    console.log(`Brojevi su jednaki`);
}


//16.zad
let n = 2;
if (n <= 0) {
    console.log(`${n - 1}`); //n-- ili n- = 1
}
else {
    console.log(`${n + 1}`); //n++ ili n+ = 1
}

//17.zad
x = 16;
y = 11;
let z = 5;


//Najveci broj
max = x;
if (max < y) {
    max = y;
}
if (max < z) {
    max = z;
}
console.log(`Najveci broj je ${max}`);

//Najmanji broj
let min = x;
if (min > y) {
    min = y;
}
if (min > z) {
    min = z;
}
console.log(`Najmanji broj je ${min}`);

// Srednji broj

let srednji = x + y + z - min - max;
console.log(`Srednji broj je ${srednji}`);

//18.zad
// 1.nacin
let s = 15.3;
console.log(s % 1);
if (s % 1 == 0) {
    console.log(`Broj ${s} je ceo broj`);
}
else {
    console.log(`Broj ${s} nije ceo broj`);
}

//2.nacin
console.log(Math.floor(s));
if (Math.floor(s) == s) {
    console.log(`Broj ${s} je ceo broj`);
}
else {
    console.log(`Broj ${s} nije ceo broj`);
}



