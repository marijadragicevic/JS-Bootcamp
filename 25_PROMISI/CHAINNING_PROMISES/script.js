let getTodos = resource => {
    // 1. Kreiranjenn XML objekta - ASINHRONI JS
    let request = new XMLHttpRequest();

    // 2. Otvaranje kreiranog zahteva
    request.open("GET", resource);

    // 3. Saljemo zahtev
    request.send();


    // Vracam objekat Promise
    /*let p = */ return new Promise((resolve, reject) => {
        request.addEventListener("readystatechange", () => {
            if (request.readyState === 4 && request.status === 200) {
                // sve ok
                // console.log(request.responseText);
                // callback(request.responseText, undefined); /* false,null */
                resolve(request.responseText);
            }
            else if (request.readyState === 4) {
                // nesto  nije ok
                // console.log(`Ne mogu da dohvatim podatke!`);
                // callback(undefined, `Ne mogu da dohvatim podatke!`);
                reject(`Ne mogu da dohvatim podatke!`);
            }
        });
    });
    // return p; // Vracam objekat Promise

}

// 1. da se ocita todos.json
// 2. da se ocita fruits.json
// 3. da se ocita vegetables.json

getTodos("../JSON/todos.json").then(data => {
    console.log(`Promise todos resolved, ${data}`);
    return getTodos("../JSON/fruits.json"); // vracam Promise na koji se odnosi naredni then
}).then(data => {
    console.log(`Promise fruits resolved, ${data}`);
    return getTodos("../JSON/vegetables.json"); // vracam Promise na koji se odnosi naredni then
}).then(data => {
    console.log(`Promise vegetables resolved, ${data}`);
}).catch(error => {
    console.log(`Promise reject, ${error}`);
});

// SINHRONI JS
console.log("KRAj");


