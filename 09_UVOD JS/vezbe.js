// "use strict"; //Strict - mora parvilno da se kuca js kod

// 1.zad
let s = 15;
let m = 21;

let odPonoci = s * 60 + m;
console.log("Od ponoci je proslo " + odPonoci + " minuta");

let doPonoci = 24 * 60 - odPonoci;
// let doPonoci = (24 - s) * 60 - m;
console.log("Do ponoci " + doPonoci + " minuta");

//2.zad

//1.nacin
let minOdPonoci = 909;
// minodponoci = _____ *60 + minSada
//minOdPonoci - minSada= ___ * 60
//(minOdPonoci - minSada)/ 60= ____

let minSada = minOdPonoci % 60;
let satSada = (minOdPonoci - minSada) / 60;
console.log("Sada je " + satSada + ":" + minSada);

//2.nacin
// console.log(minOdPonci / 60); deljnje vraca raelan broj
// console.log(Math.floor(minOdPonci / 60));      -manji ili jednak od rezultata,zaokruzuje na manji ceo broj
// console.log(Math.ceil(minOdPonci / 60));       -zaokruzuje na veci  ceo broj ili  jednak od rezultat ceo broj
// console.log(Math.round(minOdPonci / 60));      -zaokruzuje rezultat
let satSada2 = Math.floor(minOdPonoci / 60);
let minSada2 = minOdPonoci % 60;
console.log("Sada je " + satSada2 + ":" + minSada2);

//3.zad

let cenaRobe = 1750;
let novcanica = 2000;

let Kusur = novcanica - cenaRobe;
console.log("Kusur koji treba da se vrati " + Kusur + " dinara.")

//6.zad
let euro = 200;
let kurs = 115;

let razmena = euro * kurs;
console.log("Nakon razmene imamo " + razmena + " dinara.");

let kurs2 = 118;
let razmena2 = razmena / kurs2;
console.log("Nakon razmene imamo " + razmena2 + " evra.")

//7.zad
let euro1 = 200;
let kursED = 120; //1 evro ima 120din
let kursDD = 100; //1 dolar ima 100din

let razmenaEurodolar = euro1 * kursED / kursDD;
console.log("Nakon razmene imamo " + razmenaEurodolar + " dolara");

let razmenaDolareuro = razmenaEurodolar * kursDD / kursED;
console.log("Nakon razmene imamo " + razmenaDolareuro + " evra.");


//trenutno vreme i datum
let datum = new Date(); //datum koji sadrzi inf. o trenutnom datumu i vremenu

let godina = datum.getFullYear();
let mesec = datum.getMonth() + 1;
let datumUMesecu = datum.getDate(); // datum u mesecu
let danUNedelji = datum.getDay();//datum u nedlji

console.log("Danas je " + datumUMesecu + "." + mesec + "." + godina);
console.log(danUNedelji);