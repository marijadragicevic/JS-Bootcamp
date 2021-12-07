console.log(`FOR LOOP`);

let a = 1;
while (a <= 5) {
    console.log(`Na redu je broj ${a}`);
    a++;
}

// 1.nacin
for (let i = 1; i <= 5; i++) {
    console.log(`For petlja iteracija ${i}`);
}
/*
// 2.nacin
i = 1;
for (i; i <= 5; i++) {
    console.log(`For petlja iteracija ${i}`);
}

// 3.nacin ;i je iterator
i = 1;
for (; i <= 5; i++) {
    console.log(`For petlja iteracija ${i}`);
}*/

/*
for(let i=2,k=5;i<=5;i++)
*/
////////////////////////////////////////////////
console.log(` 2.zad`);

for (i = 20; i >= 1; i--) {
    console.log(`${i}`);
}
///////////////////////////////////////
console.log(`3.zad`);

// 1.nacin
for (i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

// 2.nacin; i += 2 ili i = i + 2
for (i = 2; i <= 20; i += 2) {
    console.log(i);
}

//////////////////////////////////////
console.log(`5.zad`);

let n = 100;
let suma = 0;
for (i = 1, n = 100, suma = 0; i <= n; i++) {
    suma += i; // suma = suma + i;
}
console.log(`Suma brojeva od 1 do ${n} iznosi ${suma}`);

////////////////////////////////////
console.log(`7.zad`);

n = 2;
let m = 6;
let p = 1;
for (i = n; i <= m; i++) {
    p *= i; // p = p  * i;
}
console.log(`Proizvod brojeva od ${n} do ${m} je ${p}`);

/////////////////////////////////////////////
console.log(`9.zad`);

for (i = 1; i <= 3; i++) {
    document.body.innerHTML += `<img src="img/${i}.jpg">`;
}

/////////////////////////////////////////////
console.log(`11.zad`);

n = 150;
let br = 0;
for (i = 5; i <= n; i++) {
    if (i % 13 == 0) {
        br++;
    }
}
console.log(`U intervalu od 5 do 150 ima ${br} brojeva deljivih sa 13`);

////////////////////////////////////////// 12. 15. 16.
console.log(`12.zad`);

n = 5;
m = 10;
br = 0;
suma = 0;
for (i = n; i <= m; i++) {
    suma += i // suma = suma +i
    br++; // br = br +1 ili br += 1
}
// console.log(br); //broj brojeva od n do m
// console.log(suma);
let arsr = suma / br;
console.log(`Aritmeticka sredina brojeva od ${n} do ${m} iznosi ${arsr}`);

//////////////////////////////////////////////
console.log(`17.zad`);

n = 1;
m = 3;
a = 2;
p = 1;
for (i = n; i <= m; i++) {
    if (i % a == 0) {
        p *= i;
    }
}
console.log(`Proizvod brojeva od ${n} do ${m} koji su deljivi sa ${a} je ${p}`);

////////////////////////////////////////////////////
console.log(`16.zad`);

n = 5;
m = 10;
a = 3;
suma = 0;
for (i = n; i <= m; i++) {
    if (i % a != 0) {
        suma += i;
    }
}
console.log(`Suma brojeva od ${n} do ${m} koji nisu deljivi brojem ${a} je ${suma}`);

////////////////////////////////////////////////////////
console.log(`15.zad`);

n = 1;
m = 48;
br = 0;
suma = 0;
for (i = n; i <= m; i++) {
    if (i % 10 == 4) {
        br++;
        suma += i;
    }
}
console.log(`Broj brojeva izmedju ${n} i ${m} i kojima je poslednja cifra 4 iznosi ${br} i njihova suma iznosi ${suma}`);

////////////////////////////////////////////////////////
console.log(`18.zad`);

// FOR LOOP
let k = 5;
br = 0;
for (i = 1; i <= k; i++) {
    if (k % i == 0) {
        br++;
    }
}
console.log(`Broj ${k} je deljiv sa ${br} broja`);

// WHILE LOOP

br = 0;
i = 1;
while (i <= k) {
    if (k % i == 0) {
        br++;
    }
    i++;
}

console.log(`Broj ${k} je deljiv sa ${br} broja`);

///////////////////////////////////////////////////////
console.log(`19.zad`); //nadovezujemo se na prethodni zad

if (br == 1) {
    console.log(`Broj nije ni prost ni slozen`);
}
else if (br == 2) {
    console.log(`Broj je prost`);
}
else {
    console.log(`Broj je slozen`);
}

////////////////////////////////////////////////
console.log(`20.zad`);

let tabela = ` <table border="1">`
for (let red = 1; red <= 6; red++) {
    if (red % 2 == 0) {
        tabela +=
            `<tr class="roze">
            <td>Tekst</td>
            <td>Tekst</td>
            </tr>`;
    }
    else {
        tabela +=
            ` <tr>
        <td>Tekst</td>
        <td>Tekst</td>
        </tr>`;
    }
}
tabela += ` </table>`;
document.body.innerHTML += tabela;