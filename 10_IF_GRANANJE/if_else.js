console.log("if else grananje");

if (true) {
    console.log("uslov je ispunjen");
}
else {
    console.log("uslov nije ispunjen")
}

if (false) {
    console.log("uslov je ispunjen");
}
else {
    console.log("uslov nije ispunjen");
}

/////////////////////////////////////////////////////

a = 10;
b = 7;
if (a < b) {
    console.log("Broj a je strogo manji od broja b");
}
else {
    console.log(`Broj ${a} je veci ili jednak od broja ${b}.`);
}

//////////////////////////////////////////////////////

let god = 27;
if (god >= 18) {
    console.log("Osoba je punoletna.");
}
else {
    console.log("Osoba je maloletna.")
}


//1.zad

a = 13;
b = 12;
if (a < b) {
    console.log(`Broj ${b} je veci od broja ${a}`);
}
else {
    console.log(`Broj ${a} je veci od broja ${b}`);
}

//2.zad
let temp = 10;
/*let temp = 10;
if (temp >= 0) {
    console.log(`Temperatura je u plusu i iznosi ${temp}.`);
}
else {
    console.log(`Temperatura je u minusu.`);
}*/
if (temp >= 0) {
    document.body.innerHTML = `<p style="color:red;">Temperatura od ${temp} stepeni je u plusu.`;
}
else {
    document.body.innerHTML = `<p style="color:blue;">Temperatura od ${temp} stepeni je u minusu.`;
}

// 3.zad

let pol = "m";
if (pol == "m") {
    //prikazi avatar muskarca
    document.body.innerHTML += `<img src="img/m.png">`;
}

else {
    //prikazi avatr zena
    document.body.innerHTML += `<img src="img/z.png">`;
}


//4.zad
let vreme = new Date;
let time = vreme.getTime();
if (time > 12) {
    console.log(`Trenutno je popodne`);
}
else {
    console.log(`Trenutno je jutro`);
}

//5.zad
god = vreme.getFullYear();
let rodj = 2000;
if (god - rodj >= 18) {
    console.log(`Osoba je punoletna i ima ${god - rodj}`);
}
else {
    console.log(`Osoba je maloletna i ima ${god - rodj}`);
}

//6.zad
let b1 = 15;
let b2 = 9;
let b3 = 27;

let maks = b1; // pretpostavka

// ako je moja pretpostavka losa,uradim njen update
if (maks < b2) {
    maks = b2;
}

if (maks < b3) {
    maks = b3;
}
document.body.innerHTML += `<p> ${maks}</p>`;
