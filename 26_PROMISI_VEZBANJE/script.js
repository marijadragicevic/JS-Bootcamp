let divOrder = document.querySelector("#order");
let formOrder = document.querySelector("#order form");
let inputOrder = document.querySelector("#capacity");

// callback hell
function getItem(resource, resolve, reject) {
    let request = new XMLHttpRequest();
    request.addEventListener("readystatechange", function () {
        if (this.readyState === 4 && this.status === 200) {
            //sve ok
            let data = JSON.parse(this.responseText);
            resolve(data);
        }
        else if (this.readyState === 4) {
            // desila se neka greska
            reject("Could not fetch data");
        }
    });
    request.open("GET", resource);
    request.send();
}

function submitForm1(event) {
    event.preventDefault();
    let ids = []; // id artikla koji nisu na stanju
    getItem("JSON/stock.json", (data) => {
        let capacity = inputOrder.value;
        data.forEach(item => {
            if (item.stock <= 0) {
                ids.push(item.id);
            }
        });
        getItem("JSON/weight.json", (data) => {
            let totalWeight = 0;
            data.forEach(item => {
                if (ids.includes(item.id)) {
                    totalWeight += item.weight;
                }
            });
            console.log(`Ukupna tezina proizvoda koji treba da se naruce je ${totalWeight}`);
            if (totalWeight > capacity) {
                let par = document.createElement("p");
                par.innerHTML = `Ukupna tezina proizvoda je veca od kapaciteta kamiona`;
                par.style.color = "red";
                par.style.fontSize = "24px";
                par.style.fontWeight = "bold";
                divOrder.appendChild(par);
            }
            else {
                getItem("JSON/price.json", (data) => {
                    let totalPrice = 0;
                    data.forEach(item => {
                        if (ids.includes(item.id)) {
                            totalPrice += item.price;
                        }
                    });
                    let par = document.createElement("p");
                    par.innerHTML = `Ukupna cena porudzbine je ${totalPrice} RSD`;
                    par.style.color = "green";
                    par.style.fontSize = "24px";
                    par.style.fontWeight = "bold";
                    divOrder.appendChild(par);
                }, (msg) => { console.log(msg); });
            }
        }, (msg) => { console.log(msg); });
    },
        (msg) => { console.log(msg); });
}

/*
1. ideja : getItem() da se pozove jedan za drugim
            getItem("JSON/stock.json");
            getItem("JSON/weight.json");
            getItem("JSON/price.json");
NETACNA IDEJA, jer je svaki getItem() asinhroni poziv,
sto znaci da ne mora weight.json da se dohvati pre stock.json(slicno i za price.json)

2. ideja: Redosled asinhronih poziva odvija preko callback funkcija 
TACNA IDEJA, ali neprakticna (callback hell)

3. ideja: Redosled asihronih poziva preko Promis-a
*/


// chaining promises
function getItemreturnPromise(resource) {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.addEventListener("readystatechange", function () {
            if (request.readyState === 4 && request.status === 200) {
                //sve ok
                let data = JSON.parse(this.responseText);
                resolve(data);
            }
            else if (request.readyState === 4) {
                // desila se neka greska
                reject("Could not fetch data");
            }
        });
        request.open("GET", resource);
        request.send();
    });
}
function submitForm2(event) {
    event.preventDefault();
    let ids = [];
    getItemreturnPromise("JSON/stock.json")
        .then(data => {
            data.forEach(item => {
                if (item.stock <= 0) {
                    ids.push(item.id);
                }
            });
            return getItemreturnPromise("JSON/weight.json");
        }).then(data => {
            let totalWeight = 0;
            let capacity = inputOrder.value;
            data.forEach(item => {
                if (ids.includes(item.id)) {
                    totalWeight += item.weight;
                }
            });
            if (totalWeight > capacity) {
                let par = document.createElement("P");
                par.innerHTML = `Ukupna tezina proizvoda je veca od kapaciteta kamiona`;
                par.style.color = "red";
                par.style.fontSize = "24px";
                par.style.fontWeight = "bold";
                divOrder.appendChild(par);
            }
            else {
                return getItemreturnPromise("JSON/price.json");
            }
        }).then(data => {
            if (data !== undefined) { // svakako se ocitava ovaj then i bez ulaska u else granu zato moramo da proverimo da li je data undefined 
                let totalPrice = 0;
                // BONUS ZAD SA PREZ
                let tabela = `<table>`;
                tabela += `<tr><th>Naziv artikla</th><th>Cena artikla</th></tr>`;
                data.forEach(item => {
                    if (ids.includes(item.id)) {
                        totalPrice += item.price;
                        tabela += `<tr><td>${item.item}</td><td>${item.price}</td></tr>`;
                    }
                });
                tabela += `<tr><td>Ukupno: </td><td>${totalPrice}</td></tr></table>`;
                divOrder.innerHTML += tabela;

                // POSLEDNJI PRVI ZAD
                let par = document.createElement("p");
                par.innerHTML = `Ukupna cena porudzbine je ${totalPrice} RSD`;
                par.style.color = "green";
                par.style.fontSize = "24px";
                par.style.fontWeight = "bold";
                divOrder.appendChild(par);
            }
        })
        .catch(msg => {
            console.log(msg);
        });
}
// formOrder.addEventListener("submit", submitForm1);
formOrder.addEventListener("submit", submitForm2);

/////////////////////////////////////////////////////////////////////////
///////////////////ZAD2/////////////////////////////////////////////////

let divOrder2 = document.querySelector("#order2");
let form2 = document.querySelector("#order2 form");
let inputText = document.querySelector("input[type='text']");
let inputNumb1 = document.querySelector("#price1");
let inputNumb2 = document.querySelector("#price2");

// Stefanov kod
// f je asinhrona kada ispred naziva function stavimo async
// asinh f uvek automatski vraca promis

async function clickGetItems() {
    let textValue = inputText.value;
    let numbValue1 = parseFloat(inputNumb1.value);
    let numbValue2 = parseFloat(inputNumb2.value);
    // pozovi promis i onda cekaj da se uputui asinh poziv i da se vrati rezultat
    // da bi await radio mora da ima async;odnosno mora da bude asinhrona funkciaj
    let data1 = await getItemreturnPromise("JSON/stock.json"); // ovde vraca podatke
    let artikliNaStanju = [];
    data1.forEach(item => {
        if (item.stock > 0) {
            artikliNaStanju.push(item.id);
        }
    });


    let data2 = await getItemreturnPromise("JSON/price.json");
    let tabela = document.createElement("table");
    data2.forEach(item => {
        if (artikliNaStanju.includes(item.id) && item.item.includes(textValue)
            && item.price >= numbValue1 && item.price <= numbValue2) {
            let tr = document.createElement("tr");
            let td1 = document.createElement("td");
            let td2 = document.createElement("td");
            td1.innerHTML = item.item;
            td2.innerHTML = item.price;
            tr.appendChild(td1);
            tr.appendChild(td2);
            tabela.appendChild(tr);
        }
    });

    return tabela; // ovo sto return kao data dole u pozivu f
}


function akcija(event) {
    event.preventDefault();

    clickGetItems()
        .then(data => {
            divOrder2.appendChild(data)
        })
        .catch(error => {
            console.log(error);
        });
}

form2.addEventListener("submit", akcija);


/* MOJ NACIN
function submitForma3(event) {
    event.preventDefault();
    let naStanju = [];
    let tabela = document.createElement("table");
    let tr = "";
    getItemreturnPromise("JSON/stock.json")
        .then(data => {
            data.forEach(el => {
                if (el.stock > 0 && el.item.includes(inputText.value)) {
                    naStanju.push(el.id);
                    tr = document.createElement("tr");
                    let td1 = document.createElement("td");
                    let td2 = document.createElement("td");
                    td1.innerHTML = el.item;
                    td2.innerHTML = el.stock;
                    tr.appendChild(td1);
                    tr.appendChild(td2);
                    tabela.appendChild(tr);
                }
            });
            if (naStanju.length === 0) {
                divOrder2.innerHTML += `<p style="color:red; font-size:24px">Nema takvih artikala</p>`;
            }
            return getItemreturnPromise("JSON/price.json");
        })
        .then(data => {
            let numbValue1 = parseFloat(inputNumb1.value);
            let numbValue2 = parseFloat(inputNumb2.value);
            let lista = `<ul>`;
            data.forEach(el => {
                if (naStanju.includes(el.id) && numbValue1 <= el.price && el.price <= numbValue2) {
                    lista += `<li>${el.item}</li>`;
                    let td3 = document.createElement("td");
                    td3.innerHTML = el.price;
                    tr.appendChild(td3); // ne radi
                    tabela.appendChild(tr);
                    tr = document.createElement("tr");
                }
            });
            lista += `</ul>`;
            divOrder2.innerHTML += lista;
            divOrder2.appendChild(tabela);
        })
        .catch(msg => {
            console.log(msg);
        });
}
form2.addEventListener("submit", submitForma3);
*/

