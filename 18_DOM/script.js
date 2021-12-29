console.log(document);
console.log(typeof document);

console.log(document.body);
console.log(typeof document.body);

let p1 = document.getElementById("p1");
console.log(p1);
console.log(typeof p1);

let cont = document.getElementsByClassName("container");
console.log(cont);
console.log(typeof cont);

for (let i = 0; i < cont.length; i++) {
    console.log(cont[i]);
}

// ne mozemo da pristupimo forEach petljom HTML kolekciji
// cont.forEach(elem => {
//     console.log(elem);
// });
// ali mozemo preko Array.from() da koristimo
let contNiz = Array.from(cont);
contNiz.forEach(elem => {
    console.log(elem);
});

let paragrafi = document.getElementsByTagName("p");
console.log(paragrafi);
for (let i = 0; i < paragrafi.length; i++) {
    console.log(paragrafi[i]);
}

let linkovi = document.getElementsByName("link");
for (let i = 0; i < linkovi.length; i++) {
    console.log(linkovi[i]);
}

p1 = document.querySelector("#p1"); // pisemo selektor kao u cssu ;vracaju Node Listu i tu mozemo forEach i for petljom
console.log(p1);

cont = document.querySelector(".container") // pisemo selektor kao u cssu
console.log(cont);

cont = document.querySelectorAll(".container") // pisemo selektor kao u cssu
console.log(cont);

for (let i = 0; i < cont.length; i++) {
    console.log(cont[i]);
}

cont.forEach(el => {
    console.log(el);
});

paragrafi = document.querySelectorAll("p");
console.log(paragrafi);

linkovi = document.querySelectorAll("[name='link']");
console.log(linkovi);

// 2.
let div = document.querySelector(".error");
console.log(div);
// ili console.log(div[0]) ukoliko koristimo get.elementsbyclassname("error")
// ili poslednjem div[div.length -1]

// 3.
let poslRed = document.getElementsByClassName("poslRed");
console.log(poslRed);
// ili tr:last child kada koristimo querySelectors
// 4.
linkovi = document.querySelectorAll("a");
linkovi.forEach(el => {
    console.log(el);
});

// 5.
let slike = document.querySelectorAll("img");
slike.forEach(el => {
    console.log(el);
});

//////// menjanje elementa///////////////////

p1.innerHTML += ` Promenjen <span>tekst</span> paragrafa.`

let sviLinkovi = document.querySelectorAll("a");
sviLinkovi.forEach(link => {
    //HTML ATRIBUTI
    link.href = "https://www.google.com";
    // link.target = "_blank";

    // CSS STILOVI
    // link.style.color = "green";
    link.style.textDecoration = "none";

    // link.style = "color:green; text-decoration:none;"; moze i ovako; += ne radi za style

    // Preko metode
    link.setAttribute("name", "link2"); // isto kao i link.name="link2";
    // link.setAttribute("style", "color:green; text-decoration:none"); moze i ovako
});

// 9 slajd
// 1.

let sviP = document.querySelectorAll("p");
sviP.forEach(p => {
    p.innerHTML += " VAZNO!!!";
});

// 2.

let allDiv = document.querySelectorAll("div.error");
allDiv.forEach(d => {
    d.innerHTML += "<h1>GRESKA</h1>";
}); // nisu gore

// 3.

sviP.forEach((p, i) => {
    p.innerHTML += (++i) ** 2;
});


// 4. 

let allImg = document.querySelectorAll("img");
allImg.forEach((img, i) => {
    img.alt = `slika_prirode${++i}`;
});

// 5. 
sviP.forEach(p => {
    p.setAttribute("style", "color:purple");
});

//6.
sviP.forEach((p, i) => {
    if (++i % 2 == 0) {
        p.style.backgroundColor = "green";
    }
    else {
        p.style.backgroundColor = "red";
    }
});

// 10S

// 7. 
// ne moze link.style tada pisemo ceo novi css za te elemente i sve se prethodno brisi

sviLinkovi.forEach((link, i) => {
    link.style.padding = "5px";
    link.style.fontSize = "18px";
    link.style.textDecoration = "none";
    if (++i % 2 == 0) {
        link.style.backgroundColor = "green";
        link.style.color = "purple";
    }
    else {
        link.style.backgroundColor = "blue";
        link.color = "white";
    }
});

// 8. 
allImg.forEach(img => {
    if (img.src.includes(".jpg")) {
        img.style.border = "2px solid red";
    }
});

// 9.

sviLinkovi.forEach(link => {
    if (link.target === "_blank") {
        link.target = "_top";
    }
    else {
        link.target = "_blank";
    }
});

// 10.
// 1)

let imena = ["Mika", "Pera", "Sima"];

imena.forEach(ime => {
    // if (ime[0] == "S") ima jos puno nacina
    if (ime.startsWith("S")) {
        document.body.innerHTML += `<a href="https://www.youtube.com" target="_blank">${ime}</a>`;
    }
    else {
        document.body.innerHTML += `<a href="https://www.youtube.com">${ime}</a>`;
    }
});

// 2)
let lista = `<ul>`;

imena.forEach((ime, i) => {
    if (i % 2 == 0) {
        lista += `<li style="color:orange">${ime}</li>`;
    }
    else {
        lista += `<li style="color:yellow">${ime}</li>`;
    }
});

lista += `</ul>`;
document.body.innerHTML += lista;

// 3)



// 16S

// 1.zad
let allP = document.querySelectorAll("p");
allP.forEach((p, i) => {
    if (++i % 2 == 0) {
        p.classList.add("error");
    }
    else {
        p.classList.add("success");
    }
});

// 2.zad

allP.forEach((p, i) => {
    if (++i % 3 == 1) {
        p.style.fontSize = "15px";
    }
    else if (++i % 3 == 2) {
        p.style.fontSize = "20px";// ne radi kako treba
    }
    else {
        p.style.fontSize = "25px";
    }
})

// 3.

allP.forEach(p => {
    if (p.textContent.includes("error")) {
        p.classList.add("error");
    }
    else if (p.textContent.includes("success")) {
        p.classList.add("succes");
    }
});

// 4.
allP.forEach(p => {
    p.classList.toggle("error");
});