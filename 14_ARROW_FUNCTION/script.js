function suma(a, b) //definicija funkcije
{
    return a + b;
}

console.log(suma(4, 5)); // poziv funkcije
console.log(suma(1, 0)); // poziv funkcije

// ANONIMNE FUNKCIJE - funkcije koje nemaju ime; dodeljujemo joj promenljivu da bi mogli da je pozovemo 

let suma2 = function (a, b) {
    return a + b;
}

console.log(suma2(6, 6));

//ARROW FUNKCIJA - je skracen zapis anonimnih funkcija; => zbog ovog simbila se zovu arrow funk; ili fat arrow (=>)fukcije drugi naziv

let suma3 = (a, b) => {
    return a + b;
}
console.log(suma3(5, 3));

// Arrow f-ja za ispis poruke
// bez parametara
let hello = () => {
    console.log("Hello World!");
}
hello();

let pozdrav = (ime, prezime) => {
    console.log("Zdravo " + ime + " " + prezime);
}
pozdrav("Pera", "Peric");

//Arrow f-ja kojoj se prosledjuje ime i godine korisnika , a ona ispisuje ime i da li je kosrisnik punoletan ili nije

let ispis = (ime, god) => {
    if (god < 18) {
        let poruka = `Korisnik ${ime} je maloletna osoba`
        document.body.innerHTML += `<p style="color:blue;">${poruka}</p>`
    }
    else {
        let poruka = `Korisnik ${ime} je punoletna osoba`
        document.body.innerHTML += `<p style="color:green;">${poruka}</p>`
    }
}

ispis("Pera", 29);
ispis("Mika", 16);

//////////////////////////////////////////////////////////////

// 3,4,5,6

// 3.
let neparan = (n) => {
    if (n % 2 == 1) {
        return "Tacno";
    }
    return "Netacno";
}

console.log(neparan(6));

// skraceno

let paran = n => (n % 2 == 0) ? true : false;

// let paran = n =>  return (n % 2==0);
// let paran = n =>  (n % 2==0);

// 4.
let maks2 = (a, b) => {
    if (a > b) {
        return a;
    }
    else {
        return b;
    }
}
console.log(maks2(2, 12));

let maks4 = (a, b, c, d) => maks2(maks2(a, b), maks2(c, d));
// {   let max = maks2(maks2(a, b), maks2(c, d));
//     return max;     }

let maks42 = (a, b, c, d) => maks2(maks2(maks2(a, b), c), d);

console.log(maks4(-11, -23, -5, -10));
console.log(maks42(-11, -23, -5, -10));

// skracena verzija
// ___ ?  ___ : ___ 
// ternarni operator ; prima 3 parametra; if(uslov) then a(true) else b(false)
let max2 = (a, b) => (a > b) ? a : b;
console.log(max2(16, 9));



// 5.
let img = (adresa) => {
    document.body.innerHTML += `<img src="${adresa}">`
}
img("")

//5.
let slika = (putanja) => {
    return `<img src="${putanja}">`
}

document.body.innerHTML += slika("");

//skracena verzija

let slika2 = (putanja) => `<img src=${putanja}>`
document.body.innerHTML += slika("");


// moze i bez zagrada kada imamo samo 1 parametar U SVIM OSTALIM SU OBAVEZNE ZAGRADE
let slika3 = putanja => `<img src=${putanja}>`
document.body.innerHTML += slika("");


// 6. 

let color = (boja) => {
    document.body.innerHTML += `<p style="color:${boja};">Tekst paragrafa</p>`
}
color("orange");

// 7. 

let SedmiDan = n => (n % 7 == 0) ? "Nedelja" : (n % 7 == 1) ? "ponedeljak" : (n % 7 == 2) ? "utorak" : (n % 7 == 3) ? "sreda" : (n % 7 == 4) ? "cetvrtak" : (n % 7 == 5) ? "petak" : "subota";
/* if (dan == 0) {
  return "Nedelja";
}
else if (dan == 1) {
  return "Pomedeljak"
}
else if (dan == 2) {
  return "Utorak"
}
else if (dan == 3) {
  return "Sreda"
}
else if (dan == 4) {
  return "Cetvrtak"
} else if (dan == 5) {
  return "Petak"
}
else if (dan == 6) {
  return "Subota"
}
*/

// 8.
let deljivSaTri = (n, m) => {

    br = 0;
    for (let i = n; i <= m; i++) {

    }
}
console.log(deljivSaTri(1, 3));
