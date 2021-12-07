console.log("Pozadrav iz JS datoteke!");

let a = 3, b = 6; // u jednoj liniji koda moze vise promenjlj da se deklairisu
console.log(a * b);
console.log("Pera" + "stefan");
console.log("Pera" * "stefan");

b = b / a;
console.log(a, b);//a = 3, b = 2
a = b * a + a;// 2 * 3 + 3
console.log(a, b); //a = 9,b = 2
b = (a - 2 * b) / b; //(9 - 2 * 2) /  2 = 5 / 2 = 2.5

//menjanje vredn promnjlj

//a = a + 10; // 9+10=19
a += 10; //a se uveca za 10;moze i kao sto je gore ili ovako isto je
console.log(a);
b /= a;
console.log(b);

// a = a + 1;
// a += 1;
a++;//uvecavanje vrednosti za 1,a -- smanjuje za 1
console.log(a);

++a;
console.log(a);

let c = 5;
console.log(c++); //prvo sr iskoristi stara vredn promlji u izrazu pa se onda vred promlji poveca; 5
console.log(c); // 6

let d = 3;
console.log(++d); //prvo se vredn promljive poveca a onda senova vred koristi u u izrazu; 4

c = 4;
d = 3;
x = (c++) * (--d); //  4 * 2 = 8
console.log(c, d, x); // c = 5, d = 2, x = 8

console.log(7 % 2); // 7 = 3 * 2 + 1
console.log(9 % 2); // 9 = 4 * 2 + 1
console.log(6 % 2); // 6= 3 * 2 + 0

console.log(180 % 60); // 180=  3 * 60 + 0  moguci reluztati su 0, 1, 2,...., 59

//prof. (42 % 13 ) +1 = 1     -> (0, 1, 2,...,13)
console.log(365 % 7); // 1

console.log(4 ** 3); // 64

c = 3;
d = 1 + c ** 3; // 1+27=28
console.log(d);

//vezbanje

//3.zad
let f = 800;
let e = 1000;
console.log(e - f);

//1.zad
f = 2;
e = 30;
f = f * 60;
console.log(e + f);

//2.zad
// let r = (e + f) / 60;
console.log((e + f) / 60);

//4.zad
f = 14;
e = 53;
console.log(f * 60 + e);

//5.zad
let m = "26.11.2021";
let p = "2021.11.26";
console.log(m, p);

//6.zad
f = 200;
e = 115;
console.log(f * e);
f = f * e;
e = 118;
console.log(f / e);


