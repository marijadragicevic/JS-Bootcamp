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
        console.log(error); // ispisuje ako je doslo do greske u todos.json fajlu
    }
    else {
        console.log(data); // ispisuje podatke iz todos.jason fajla,sa kojima moze dalje da raspolaze
        // nakon sto su se ispisali podaci iz todos.json pozivamo sledeci fajl fruits.json
        getTodos("../JSON/fruits.json", (date, error) => {
            if (error) {
                console.log(error); // ispisuje ako je doslo do greske u fruits.json fajlu
            }
            else {
                console.log(date); // ispisuje podatke iz fruits.jason fajla
                // nakon sto su se ispisali podaci iz fruits.json pozivamo sledeci fajl vegetables.json
                getTodos("../JSON/vegetables.json", (date, error) => {
                    if (error) {
                        console.log(error);// ispisuje ako je doslo do greske u vegetables.json fajlu
                    }
                    else {
                        console.log(date); // ispisuje podatke iz vegetables.jason fajla
                    }
                });
            }
        });
    }
});



// SINHRONI JS
console.log("KRAj");


