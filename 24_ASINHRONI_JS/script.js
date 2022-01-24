// HTTP ZAHTEVI
let request = new XMLHttpRequest(); // moze i const zato sto nece da se menja
// inace se ne pisu if i else if nego pisemo samo  4. korak;odnosno odgovor sa servera
// request.addEventListener("readystatechange", () => {
//     if (request.readyState == 1) {
//         console.log(`Uspostavljena konekcija`);
//     }
//     else if (request.readyState == 2) {
//         console.log(`Poslat je zahtev serveru`);
//     }
//     else if (request.readyState == 3) {
//         console.log(`Prihvata se odgovor u - statusu preuzimanja`);
//     }
//     else if (request.readyState == 4) {
//         console.log(`Odgovor je preuzet - ${request.responseText}`);
//     }
// });
request.addEventListener("readystatechange", function () {
    // provera da li su podaci dobri; moze i anonimna funkcija samo umesto request stavimo this
    if (this.readyState === 4 && this.status === 200) {
        // console.log(this.responseText);
        let data = JSON.parse(this.responseText); // niz objekata
        console.log(data);
        // console.log(data[3]); pristupamo svakom el niza 
    }
    else if (this.readyState === 4) {
        console.log("Could not fetch data");
        console.log(this.responseText);
    }
});
request.open("GET", "https://jsonplaceholder.typicode.com/users");
request.send();
// kao odgovor dobijamo string odnosno resposeText je string
// mozemo da konvertujemo u JS niz objekta pomocu JSON.parse();


console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
/////////////////////////////////////////////////////////////////////////

// dodati za svaki zadatak poseban zahtev

// 1.Uspostaviti konekciju ka endpointu za users resurs: https://jsonplaceholder.typicode.com/users

let zahtev = new XMLHttpRequest();
zahtev.addEventListener("readystatechange", function () {
    if (this.readyState === 4 && this.status === 200) {
        let data = JSON.parse(this.responseText); // niz objekata
        console.log(data);
    }
    else if (this.readyState === 4) {
        console.log("Could not fetch data");
    }
});
zahtev.open("GET", "https://jsonplaceholder.typicode.com/users");
zahtev.send();
//2.
let zahtev1 = new XMLHttpRequest();
zahtev1.addEventListener("readystatechange", function () {
    if (this.readyState === 4 && this.status === 200) {
        let data = JSON.parse(this.responseText); // niz objekata
        data.forEach(el => {
            if (el.website.includes(".com")) {
                console.log(el.name);
            }
        });
    }
    else if (this.readyState === 4) {
        console.log("Could not fetch data");
    }
});
zahtev1.open("GET", "https://jsonplaceholder.typicode.com/users");
zahtev1.send();
//3.
let zahtev2 = new XMLHttpRequest();
zahtev2.addEventListener("readystatechange", function () {
    if (this.readyState === 4 && this.status === 200) {
        let data = JSON.parse(this.responseText); // niz objekata
        data.forEach(element => {
            if (element.name.includes("Clementin")) {
                console.log(element.name);
            }
        });

    }
    else if (this.readyState === 4) {
        console.log("Could not fetch data");
    }
});
zahtev2.open("GET", "https://jsonplaceholder.typicode.com/users");
zahtev2.send();
//4.
let zahtev3 = new XMLHttpRequest();
zahtev3.addEventListener("readystatechange", function () {
    if (this.readyState === 4 && this.status === 200) {
        let data = JSON.parse(this.responseText); // niz objekata
        data.forEach(el => {
            if (el.company.name.includes("Group") || el.company.name.includes("LLC")) {
                console.log(el.name);
            }
        });
    }
    else if (this.readyState === 4) {
        console.log("Could not fetch data");
    }
});
zahtev3.open("GET", "https://jsonplaceholder.typicode.com/users");
zahtev3.send();
//5.
let zahtev4 = new XMLHttpRequest();
zahtev4.addEventListener("readystatechange", function () {
    if (this.readyState === 4 && this.status === 200) {
        let data = JSON.parse(this.responseText); // niz objekata
        let grad = [];
        data.forEach(el => {
            if (!grad.includes(el.address.city)) {
                grad.push(el.address.city);
            }
        });
        console.log(grad);
    }
    else if (this.readyState === 4) {
        console.log("Could not fetch data");
    }
});
zahtev4.open("GET", "https://jsonplaceholder.typicode.com/users");
zahtev4.send();
//6.
let zahtev5 = new XMLHttpRequest();
zahtev5.addEventListener("readystatechange", function () {
    if (this.readyState === 4 && this.status === 200) {
        let data = JSON.parse(this.responseText); // niz objekata
        let br = 0;
        data.forEach(el => {
            // parseInt vrca ceo broj
            // parseFloat vraca realan broj
            if (parseFloat(el.address.geo.lat) < 0 && parseFloat(el.address.geo.lng) < 0) {
                br++;
            }
        });
        console.log(br);
    }
    else if (this.readyState === 4) {
        console.log("Could not fetch data");
    }
});

zahtev5.open("GET", "https://jsonplaceholder.typicode.com/users");
zahtev5.send();

//////////////////////////////////////////////////////////////////////
//////////////////// PREKO CALLBACK FUNKCIJA ////////////////////////
// funkcija kada se proseledjuju  kao parametar druge funkcije pise se bez zagrda 


let getUsers = (resolve, reject) => {
    let request = new XMLHttpRequest();
    request.addEventListener("readystatechange", function () {
        if (this.readyState === 4 && this.status === 200) {
            // radi nesto kada je sve u redu
            let data = JSON.parse(this.responseText);
            resolve(data);
        }
        else if (this.readyState === 4) {
            // radi nesti kada je doslo do greske
            reject("Doslo je do greske!")
        }
    });
    request.open("GET", "https://jsonplaceholder.typicode.com/users");
    request.send();
}

// prvi nacin pisanja callback funkcija

let zad2 = (array) => {
    array.forEach(el => {
        if (el.website.slice(".com", -4)) {
            console.log(el.name);
        }
    });
}
let zad3 = array => {
    array.forEach(element => {
        if (element.name.includes("Clementin")) {
            console.log(element.name);
        }
    });
}
let zad4 = array => {
    array.forEach(el => {
        if (el.company.name.includes("Group") || el.company.name.includes("LLC")) {
            console.log(el.name);
        }
    });
}
let zad5 = array => {
    let grad = [];
    array.forEach(el => {
        if (!grad.includes(el.address.city)) {
            grad.push(el.address.city);
        }
    });
    console.log(grad);
}
let zad6 = array => {
    let br = 0;
    array.forEach(el => {
        if (parseFloat(el.address.geo.lat) < 0 && parseFloat(el.address.geo.lng) < 0) {
            br++;
        }
    });
    console.log(br);
}

let ispisPorukaStranica = poruka => {
    document.body.innerHTML += `<p class="error">${poruka}</p>`;
}
let ispisPorukaKonzola = poruka => {
    console.log(poruka);
}

// ASINHRONI POZIVI
getUsers(zad2, ispisPorukaStranica);
getUsers(zad3, ispisPorukaKonzola);
getUsers(zad5, ispisPorukaStranica);

// drugi nacin pisanja callback funkciaj, ovo su jedni od nacina
getUsers(
    // resolve funkcija
    (array) => {
        array.forEach(el => {
            if (el.company.name.includes("Group") || el.company.name.includes("LLC")) {
                console.log(el.name);
            }
        });
    },
    // reject funkcija
    (poruka) => {
        document.body.innerHTML += `<p class="error">${poruka}</p>`;
    }
);

////////////////////////////////////////////////////////////////////////////////////

let sportisti = (resolve, reject) => {
    let request = new XMLHttpRequest();
    request.addEventListener("readystatechange", function () {
        if (this.readyState === 4 && this.status === 200) {
            let data = JSON.parse(this.responseText);
            resolve(data);
        }
        else if (this.readyState === 4) {
            reject("Doslo je do greske!")
        }
    });
    request.open("GET", "sportisti.json");
    request.send();
}
let zadS3 = array => {
    let suma = 0;
    array.forEach(el => {
        suma += el.visina;
    });
    console.log(suma / array.length);
}
let zadS4 = array => {
    let min = array[0];
    array.forEach(el => {
        if (min.timovi.length > el.timovi.length) {
            min = el;
        }
    });
    console.log(min.imePrezime);
}
let zad5S = array => {
    array.forEach(el => {
        if (el.timovi.includes("Lakers")) {
            console.log(el.imePrezime);
        }
    });
}

let ispisGreske = poruka => {
    console.log(poruka);
}

sportisti(zadS3, ispisGreske);
sportisti(zadS4, ispisGreske);
sportisti(zad5S, ispisGreske);




