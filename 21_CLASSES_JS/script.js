import Auto from "./auto.js";

/* ugradjene klase npr,
new Date(), new String("..."), new Array(1,2,3)....*/

//  a1 je instanca klase Auto ili objekat klase Auto;
//  moramo da navodimo parametre koje smo definisali u klasi Auto;
let a1 = new Auto("Citroen C4", "crna", false);
// Nakon ovoga ,a1 je objekat koji ima sledeca polja:
/*
a1._marka(vrednost ovog polja je "Citroen C4");
a1._boja(vrednost ovog polja je "crna");
a1._imaKrov(vrednost ovog polja je false);
*/
console.log(a1);
console.log(typeof a1);

let a2 = new Auto("Skoda Octavia", "plava", true, 4);
console.log(a2);
console.log(a2._marka);
console.log(a2._boja);
console.log(a2._imaKrov);

let a3 = new Auto("Fiat Punto", "bela", false);
console.log(a3);
console.log(a3._marka);
console.log(a3._boja);
console.log(a3._imaKrov);
// mozemo da dodajemo jos polja i metoda unutra nekog objekta neke klase; vazi sve sto i vazi za objekte
// objekti su i dalje objekti ,bilo da smo ih kreirali za costume(rucno) ili preko klasa
a3._brojVrata = 5;
console.log(a3);

let a4 = new Auto("FP", undefined, true);
a4._imakrov = true;
// a4.marka = "Peugeot";
// dodajemo nove _marka i marka nije isto;ne menjamo postojece nego uvodimo novo
console.log(a4);

a1.sviraj();
a2.sviraj();
a3.sviraj();
a4.sviraj();

a1.vozi(50);
a3.vozi(200);

////////////////////////////////////////////////////////////////////////////////

//  U KLASI PISEMO POLJA I METODE
// SVA POLJA SE DEFINISU U CONSTRUCOR METODI
// MOZEMO DODAVATI PROIZVOLJNE METODE
// SVI OBJEKTI KLASE IMACE POLJA U METODE NAVEDENE U KLASI

a1._brojVrata = 4; // poljima se pristupa bez zagrada
a1.sviraj() // metode imaju zagrade , a izmedju zagrada se pisu parametri ako ih metoda ima 
// a1._marka = "    Audi A4"; ovako polje nece biti trimovan
// a1.postaviMarku("    Audi A4");// ovako trimuje; preko obicne metode
a1.marka = "      Audi A4"// preko setera
console.log(a1);
// console.log(a1.dohvatiMarku());
// console.log(a1.marka); je undefined i zato nam trebaju getri da bi smo dohvatili vrednost
console.log(a1.marka);


let a5 = new Auto("   Audi A4", "plava", true, 3);
console.log(a5);

// GETTERI I SETTERI SU POSEBNE METODE;TO SU METODE KOJE SE POZIVAJU KAO POLA
// PRAKSA JE DA:
// jednino geteri i seteri pristupaju poljima ,a ostale metode kao i objekti van klase zovu getere i setere
