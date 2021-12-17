console.log(`FUNKCIJE`);

function zdravo() {
    // telo funkcije 
    console.log(`Zdravo svete !!!`);
}

// izvrsive se onilko puta koliko je pozovemo i izvrsi se telo fukcije
zdravo();
zdravo();
console.log(`Hello`);
zdravo();

///////////////////////////////////////////////////

function stampaj($tekst) { //moze i bez $ tekst; parametar 
    console.log($tekst);
}

stampaj("Jelena"); //argument kada pozivamo fukciju
stampaj("Stefan")
ime = "Sofija"
stampaj(ime);

///////////////////////////////////////////////////


// parametre odvajamo zapetom
function korisnik(ime, prezime) {
    console.log(`Ulogovani korisnik je ${ime} ${prezime}`);
}
korisnik(`Stefan`, `Stanimirovic`);
korisnik(`Jelena`, `Matejic`);

//////////////////////////////////////////////////////

function korisnikGodine(ime, prezime, godine) {
    console.log(`Ulogovani korisnik je ${ime} ${prezime} i ima ${godine} godina`);
}

korisnikGodine(`Jelena`, `Matejic`, 27);
korisnikGodine(`Pera`, `Peric`, 17)

//////////////////////////////////////////////////////

let x = 2;
let y = 8;
let z = x + y;
console.log(z);

x = 12;
y = 23;
z = x + y;
console.log(z);

function zbirDvaBroja(x, y) {
    let zbir = x + y;
    console.log(zbir); //ISPISUJE VREDNOST
}

zbirDvaBroja(2, 5);
zbirDvaBroja(3, 9);

////////////////////////////////////////////////////

function vratiZbirDvaBroja(a, b) {
    let zbir = a + b;
    return zbir;
    // kada zelimo da vratimo neki rezultat iz funkcije; moze samo da se vrati jedna promenljiva
    //funkcija se prekida kada ispisemo return;sve sto je ispod njega se ne izvrsava
    // to sto se vraca da se smesti u neku promenljivu
    // FUNKCIJA VRACA VREDNOST
}

let rez = vratiZbirDvaBroja(50, 70);
console.log(rez);
rez = vratiZbirDvaBroja(16, 15);
console.log(rez);

let rez1 = vratiZbirDvaBroja(4, 6); // rez1 = 10
let rez2 = vratiZbirDvaBroja(5, 7); // rez2 = 12
let rez3 = vratiZbirDvaBroja(rez1, rez2); //rez3 = 22
console.log(rez3);

let rez4 = vratiZbirDvaBroja(4 + 5, 1 + 3);
console.log(rez4);

let rez5 = vratiZbirDvaBroja(vratiZbirDvaBroja(7, 9), 3);
console.log(rez5);

let rez6 = vratiZbirDvaBroja(vratiZbirDvaBroja(1, 2), vratiZbirDvaBroja(5, 3));
console.log(rez6);

/////////////////////////////////////////////////////

function voda(temperatura) {
    console.log(`Uneli ste temperturu od ${temperatura} stepeni C`);
    if (temperatura <= 0) {
        console.log(`Voda je u cvrstom agregatnom stanju`);
    }
    else if (temperatura >= 100) {
        console.log(`Voda je u gasovitom agregatnom stanju`);
    }
    else {
        console.log(`Voda je u tecnom agregatnom stanju`);
    }
}
voda(25);
voda(100);


// 3.
function neparan(n) {
    if (n % 2 == 1) {
        return "Tacno";
    }
    else {
        return "Netacno";
    }
}
let rezultat = neparan(5);
console.log(rezultat);

neparan(2);

// 2.
function operacija(x, y, op) {
    if (op == "/") {
        let kolicnik = x / y;
        console.log(kolicnik);
    }
    else if (op == "*") {
        let proizvod = x * y;
        console.log(proizvod);
    }
    else if (op == "-") {
        let razlika = x - y;
        console.log(razlika);
    }
}

operacija(2, 3, "-");


// 2.

function racunaj(br1, br2, operacija) {
    let rezultat = ""; // stavljamo 0 ili " " da bi nam bilo ok imace je undefined

    if (operacija == "+") {
        rezultat = br1 + br2;
    }
    else if (operacija == "-") {
        rezultat = br1 - br2;
    }
    else if (operacija == "*") {
        rezultat = br1 * br2;
    }
    else if (operacija == "/") {
        if (br2 == 0) {
            rezultat = `Deljenje nulom nije dozvoljeno`;
        }
        else {
            rezultat = br1 / br2;
        }
    }
    else {
        rezultat = `Pogresan unos`;
    }
    console.log(rezultat);
}

racunaj(5, 6, "*");

/////////////////////////////////////////////////

// primer 1 za scope i let 
if (true) {
    let test = "Zdravo";
    if (true) {
        console.log(test);//ovde vidi test
    }
}
// console.log(test); // ovde ne vidi jer je definisan sa let koji je vidljiv samo u if scopu

// Primer 2 za scope i let

if (true) {
    let test = "Zdravo"; // linija*
    console.log(test); // ispisuje test iz linija *
    if (true) {
        let test = "Hello"  // linja **
        console.log(test);//ovde vidi test iz linija ** jer je u tom scopu
    }
    console.log(test); // ovede vdi iz linija *
}
// console.log(test); // ovde ne vidi uopste test

// Primer 3 za scope i let

if (true) {
    let test = "Zdravo"; // linija*
    console.log(test); // ispisuje test iz linija *
    if (true) {
        test = "zzz"; // bez linije ** ispisuje test; nastaje problem kada zelimo ponovo da definisemo test
        console.log(test);
        // let test = "Hello"  // linja **
        console.log(test);//ovde vidi test iz linija ** jer je u tom scopu
    }
    console.log(test); // ovede vdi iz linija *
}
// console.log(test); // ovde ne vidi uopste test

// proba="Proba"; // ovo je var  i ako nije stavljen ni let ni var racuna se kao var

// let ima lokalno vazenje , samo u tom scopu ; var ima vazenje kroz blok,odnosno iznad svog scopa , izvan scopa 

if (true) {
    var proba = "proba";
}
console.log(proba);

if (true) {
    var promenljiva = "promenljiva";
    if (true) {
        var promenljiva = "hmmm"; // var promenljiva se posmatra na globalnom nivou
        console.log(promenljiva);
    }
    console.log(promenljiva);
}

// 3. 
//prvinacin
function neparan(n) {
    if (n % 2 == 1) {
        return "Tacno"; // neparan broj
    }
    else {
        return "Netacno"; // paran broj
    }
}

let nep = neparan(3);
console.log(nep);


// drugi nacin
function neparan1(n) {
    let rez = true;
    if (n % 2 == 0) {
        rez = false;
    }
    return rez;
}
let nep1 = neparan1(6);
console.log(nep1);

//treci nacin
function neparan2(n) {
    return n % 2 == 1;
}
let nep2 = neparan2(23);
console.log(nep2);


// 4.

// pretpostavka max=x moze i tako samo sto return stavimo na kraju i koristimo if 

function maks2(x, y) {
    if (x > y) {
        return x;
    }
    else if (x == y) {
        return `Brojevi su jednaki`;
    }
    else {
        return y;
    }
}
let max2 = console.log(maks2(5, 9));

function maks4(a, b, c, d) {
    if (a > b && a > c && a > d) {
        return a;
    }
    else if (b > a && b > c && b > d) {
        return b;
    }
    else if (c > a && c > b && c > d) {
        return c;
    }
    else if (d > a && d > b && d > c) {
        return d;
    }
    else {
        return `Brojevi su jednaki ili pogresan unos`;
    }
}

let max4 = maks4(21, 21, 21, 4);
console.log(max4);

// 2.nacin
function maks42(a, b, c, d) {
    let max = a;
    if (max < b) {
        max = b;
    }
    if (max < c) {
        max = c;
    }
    if (max < d) {
        max = d;
    }
    return max;
}
let max42 = maks42(1, 15, 28, 2);
console.log(max42);

// 3.nacin
function maks43(a, b, c, d) {
    let max1 = maks2(a, b); //vrati mi koji je veci broj izmedju a i b
    let max2 = maks2(c, d); //vrtai mi koji je veci izmedju c i d
    let max = maks2(max1, max2);
    return max;
}
let max43 = maks43(5, 7, 2, 9);
console.log(max43);

// 4.nacin

function maks44(a, b, c, d) {
    // let max = maks2(maks2(a, b), maks2(c, d)); 
    // return max;  ili
    return maks2(maks2(a, b), maks2(c, d));
}

let max44 = maks44(1, 1, 3, 4);
console.log(max44);

//////////////////////////////////////////////////////////////////////

// 5. 

function slika(adresa) {
    document.body.innerHTML += `<img src="${adresa}">`;
}

slika("data:image/jpeg;base64,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CB1bTPItC0O2XTmerpzxgD6wtncTfkHsncTfkHsu4G/Y+EFR419T8rWzDZdAz6n+F6JG/wDt7LPuJvyD2TuJvyBSaGjT2+FW4udr7/K0VJO6fZam4TiAP/JTDsFvyD2Xn/T7P9seynj4Krwycyo5wTDrB5arWNms3M9o/spo2C35B7L3uJvyBcxAqWAxEquqYGNM49Gx9Vo7G6f3erW/wVcdxN+QLzuBn+2PZSDgMgq/A4qmrbNkXa0jmz/KgjZQbUpuDWiKjdMw46AldN3Az/bHstlLYTQQQwAjRC+VIUiDMq22Iunp6Kj2XhS1XjNFWrlkiIiIiIiLFzZWp2GBW9ERRuyBOyBSURFG7IE7IFJREUbsgTsgUlERRuyBOyBSURFG7IE7IFJREUbsgTsgUlERRuyBOyBSURFG7IE7IFJREUbsgTsgUlERRuyBOyBSURFG7IE7IFJREUbsgTsgUlERRuyBOyhSURFqZSAW1ERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERF/9k=");

// 6.

function paragraf(color) {
    document.body.innerHTML += `<p style="color:${color};">Tekst paragrafa</p>`
}
paragraf("orange");

// 7.

function sedmiDan(n) {
    if (n % 7 == 0) {
        console.log(`Nedelja`);
    }
    else if (n % 7 == 1) {
        console.log(`Ponedeljak`);
    }
    else if (n % 7 == 2) {
        console.log(`Utorak`);
    }
    else if (n % 7 == 3) {
        console.log(`Sreda`);
    }
    else if (n % 7 == 4) {
        console.log(`Cetvrtak`);
    }
    else if (n % 7 == 5) {
        console.log(`Petak`);
    }
    else if (n % 7 == 6) {
        console.log(`Subota`);
    }
    else {
        console.log(`Pogresan unos`);
    }

}

sedmiDan(1);

function mesec(n) {
    n = n % 12;
    switch (n) {
        case 0:
            console.log(`Januar`);
            break;
        case 1:
            console.log(`Februar`);
            break;
        case 2:
            console.log(`Mart`);
            break;
        case 3:
            console.log(`April`);
            break;
        case 4:
            console.log(`Maj`);
            break;
        case 5:
            console.log(`Jun`);
            break;
        case 6:
            console.log(`Jul`);
            break;
        case 7:
            console.log(`Avgust`);
            break;
        case 8:
            console.log(`Septembar`);
            break;
        case 9:
            console.log(`Oktobar`);
            break;
        case 10:
            console.log(`Novembar`);
            break;
        case 11:
            console.log(`Decembar`);
            break;
        default:
            console.log(`Pogresan unos`);

    }

}
mesec(9);


// 8. 

function deljivSaTri(n, m) {
    let red = " ";
    let br = 0;
    for (let i = n; i <= m; i++) {
        if (i % 3 == 0) {
            red += i + " , ";
            br++;
        }
    }
    console.log(`U intervalu od ${n} do ${m} ima ${br} broja koji su deljivi sa 3 i to su ${red} `);
}
deljivSaTri(1, 9);

// 9. 

function sumiraj(n, m) {
    let suma = 0;
    for (let i = n; i <= m; i++) {
        suma += i;
    }
    console.log(`Suma brojeva od ${n} do ${m} je ${suma}`);
}
sumiraj(-5, 6);

// 10. 

function mnozi(n, m) {
    let p = 1;
    for (let i = n; i <= m; i++) {
        p *= i;
    }
    console.log(`Proizvod brojeva od ${n} do ${m} je ${p}`);
}
mnozi(1, 4);

// 11. 

function aritmetickaSredina(n, m) {
    let br = 0;
    let suma = 0;
    for (let i = n; i <= m; i++) {
        br++;
        suma += i;
    }
    let arsr = suma / br;
    return arsr;

}

let r1 = aritmetickaSredina(1, 2);
console.log(r1);

// 12.

function aritmetickaSredina2(n, m) {
    let br = 0;
    let suma = 0;
    for (let i = n; i <= m; i++) {
        if (i % 10 == 3) {
            br++;
            suma += i;
        }
    }
    let arsr = suma / br;
    return arsr;

}

let r2 = aritmetickaSredina2(1, 3);
console.log(r2);

// 13.
// ne mora provera uslova da je ceo broj

function font(n) {
    document.body.innerHTML += `<p style="font-size:${n}px"></p>`
}

// 14.

function fontSize(recenica) {
    for (let i = 1; i <= 5; i++) {
        document.body.innerHTML += `<p style="font-size:${10 * i}px"> ${recenica} </p>`
    }
}
fontSize("Neki tekst");

// 15.

function praksa(n, a, d) {
    let suma = a;
    for (let i = 2; i <= n; i++) {
        if (i >= 2) {
            suma += a + d;
        }
    }
    return suma;

}
let prs = praksa(3, 300, 50);
console.log(prs);


// koliko ukupno novca primamo

// n*a+d*(n-1)
// n*(a+d) -d
// a+(n-1)*(a+d)


// 16. 

