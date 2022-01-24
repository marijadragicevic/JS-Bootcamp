// primeri callback funkcija

// callback bez parametara

let myFunc = callback => {
    callback();
}

// REALIZACIJA CALLBACK FUNKCIJE VRSI SE PRILIKOM POZIVA RODITELJSKE FUNKCIJE
myFunc(() => {
    console.log("Callback okinuta!");
});

///////////////////////////////////////////
// callback sa parametrima

let sum = callback => {
    callback(5, 7);
    let br1 = 6;
    let br2 = 4;
    callback(br1, br2);
}
// 1.
// REALIZACIJA FUNKCIJE SE PROSLEDJUJE KAO PARAMETAR
sum((x, y) => {
    console.log(x + y);
});

// 2.
// KREIRAMO POSEBNU FUNKCIJU ZA REALIZACIJU I ONDA JE PROSLEDIMO KAO PARAMETAR
// moze i anonimna i imenovana funkcija
function printSum(a, b) {
    console.log(a + b);
}

sum(printSum); // POZIV FUNKCIJE KOJA REALIZUJE IDE BEZ ZAGRADA

////////////////////////////////////////////////////////////////////

let my = f => {
    f("Maja");
}
my(x => {
    console.log(`Hello ${x}`);
});

///////////////////////////////////////////////////////////////////

let racunaj = (str, cb) => {
    console.log(str);
    cb(7, 3);
}

racunaj("Oduzimanje", (x, y) => {
    console.log(x - y);
});
racunaj("Mnozenje", (x, y) => {
    console.log(x * y);
});

/////////////////////////////////////////////////////////////////

let racunaj2 = (str, cb) => {
    let a = 11;
    let b = 15;
    console.log(str, cb(a, b));
}

racunaj2("Deljenje", (a, b) => {
    return a / b;
});

////////////////////////////////////////////////////////////////

let racunaj3 = (str, a, b, cb) => {
    console.log(str, cb(a, b));
}

racunaj2("Deljenje", a, b, (a, b) => {
    return a / b;
});