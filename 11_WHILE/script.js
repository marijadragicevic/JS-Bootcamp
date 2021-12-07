//WHILE PETLJA

/*
let i = 1;
console.log(i); //1
i++;
console.log(i); //2
i++;
console.log(i); //
i++;
console.log(i); //4
i++;
console.log(i); //5
i++;
*/

let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}
console.log(`Vrednost promenljive i nakon while petlje je ${i}`);


// 1.zad 

//a)svaki broj u istom redu
let rez = "";
i = 1;
while (i <= 20) {
    rez = rez + i + " ";
    i++;
}
console.log(rez);

//b)svaki broj u novom redu
i = 1;
while (i <= 20) {
    console.log(i);
    i++;
}
console.log(`Vrednost promenljive i nakon while petlje je ${i}`);


//2.zad
i = 20;
while (i >= 1) {
    console.log(i);
    i--;
}
console.log(`Vrednost promenljive i nakon while petlje je ${i}`);

//3.zad
i = 1;
while (i <= 20) {
    if (i % 2 == 0) {
        console.log(i);
    }
    i++;
}

//DRUGI NACIN
i = 2;
while (i <= 20) {
    console.log(i);
    i += 2;
}

//4.zad

/*
document.body.innerHTML += `<p style="color: red;">1.paragraf</p>`;
document.body.innerHTML += `<p style="color: purple;">2.paragraf</p>`;
document.body.innerHTML += `<p style="color: green;">3.paragraf</p>`;
document.body.innerHTML += `<p style="color: red;">4.paragraf</p>`;
document.body.innerHTML += `<p style="color: purple;">5.paragraf</p>`;
document.body.innerHTML += `<p style="color: green;">6.paragraf</p>`;*/



let n = 6;
i = 1;
while (i <= n) {
    //doda se paragraf

    if (i % 3 == 1) {
        document.body.innerHTML += `<p style="color: red;">${i}. paragraf</p>`;
    }
    else if (i % 3 == 2) {
        document.body.innerHTML += `<p style="color: purple;">${i}.paragraf</p>`;
    }
    else {
        document.body.innerHTML += `<p style="color: green;">${i}.paragraf</p>`;
    }

    i++;
}

//6.zad odrediti sumu brojeva od 1 do 100
i = 1;
let suma = 0;
while (i <= 100) {
    //Iskoristi i tako da se odredi suma
    suma = suma + i;
    i++;
}
console.log(`Suma brojeva od 1 do 100 je: ${suma}`);

/*

-------------------------------------------------
      #iteracije | i  | suma
-------------------------------------------------
        0        | 1  | 0
        1        | 2  | 1
        2        | 3  | 3
        3        | 4  | 6
        4        | 5  | 10
        ..................
        ..................
        100      |101| 5050

*/

// 7.zad Odrediti sumu brojeva od 1 do n
n = 18;
i = 1;
suma = 0;  //  pre same petlje
while (i <= n) {
    suma += i; // suma = suma + i;
    i++;
}
console.log(`Suma brojeva od 1 do ${n} jednaka je ${suma}`);

// 9.zad Odrediti proizvod brojeva od n do m
n = 3;
let m = 6;

i = n;
let proizvod = 1;
while (i <= m) {
    proizvod = proizvod * i;
    i++;
}
console.log(`Proizvod brojeva od ${n} do ${m} je ${proizvod}`);

// 10.zad
n = 1;
m = 4;

i = n;
suma = 0;
while (i <= m) {
    if (i % 2 == 0) {
        suma = suma + i * i;
    }
    i++;
}
console.log(`Suma kvadrata parnih brojeva od ${n} do ${m} iznosi ${suma}`);


i = n;
suma = 0;
while (i <= m) {
    if (i % 2 == 1) {
        suma = suma + i * i * i;
    }
    i++;
}
console.log(`Suma kubova neparnih brojeva od ${n} do ${m} iznosi ${suma}`);



