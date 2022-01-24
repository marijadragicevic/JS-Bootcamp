let getTodos = (resource, callback) => {
    // 1. Kreiranjenn XML objekta - ASINHRONI JS
    let request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
        if (request.readyState === 4 && request.status === 200) {
            // sve ok
            // console.log(request.responseText);
            callback(request.responseText, undefined); /* false,null */
        }
        else if (request.readyState === 4) {
            // nesto  nije ok
            // console.log(`Ne mogu da dohvatim podatke!`);
            callback(undefined, `Ne mogu da dohvatim podatke!`);
        }
    });

    // 2. Otvaranje kreiranog zahteva
    request.open("GET", resource);

    // 3. Saljemo zahtev
    request.send();
}

// ASINHRONI POZIV
getTodos("../JSON/todos.json", (data, error) => {
    console.log("callback okinuta");
    // ako je error == true, ispisati tu gresku
    if (error) {
        console.log(error); // ispisuje gresku
    }
    else {
        console.log(data); // ispisuje podatke sa kojima moze dalje da raspolaze
    }
});

// SINHRONI JS
console.log("KRAj");


