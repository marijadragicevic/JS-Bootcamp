console.log("1");
console.log("2");

// BLOKIRAJUCI KOD
// for (let i = 0; i <= 10000; i++) {
//     console.log(i); // blokirajuci kod ;dok se ne zavrsi ne prelazi na ostatak koda; kao i sve ostalo sto smo ranije radili
// }

//  ASINHRONI KOD; KOD SE PARALELNO IZVRSAVA; ASINHRONO NEZAVISNO OD OSTATKA KODA
setTimeout(() => {    // ovo nije blokirajuci kod, nastavlja sa ocitavanjem koda ispod njega 
    console.log("3");
}, 1000 * 4);

///////////////////////////////////////////////////////////////
// razlika izmedju anonimnih i arrow f je da arr uvek vrca za this window , a anonimne vracju objekat koji ju je pozvao metodu

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");

let div = document.getElementById("result");
let ispis = document.getElementById("ispis");
let ispis2 = document.querySelector("input[type='number']");
let br = 0;
ispis2.disabled = true;
let timer = null; // da sprecimo stvaranje vise paralelno asinhronih dogadjaja
let clock = null;
let sat = null;

btn1.addEventListener("click", function () {
    let datum = new Date();
    let sati = datum.getHours();
    let minuti = datum.getMinutes();
    let sekunde = datum.getSeconds();
    if (timer === null) {
        timer = setTimeout(() => {
            div.innerHTML = `${sati}:${minuti}:${sekunde}`;
            timer = null;
        }, 2000);
    }
});

btn2.addEventListener("click", function () {
    clearTimeout(timer);
    timer = null;
});

// primer 1

btn3.addEventListener("click", function () {
    if (clock === null) {
        clock = setInterval(() => {
            // unutar setIntervala dohvatamo vreme
            let datum = new Date();
            let sati = datum.getHours();
            let minuti = datum.getMinutes();
            let sekunde = datum.getSeconds();
            ispis.innerHTML = `${sati}:${minuti}:${sekunde}`;

        }, 1000 / 10);
    }

});
btn4.addEventListener("click", function () {
    clearInterval(clock);
    clock = null;
});

// primer 2
btn5.addEventListener("click", function () {
    if (sat === null) {
        sat = setInterval(() => {
            let datum = new Date();
            let sekunde = datum.getSeconds();
            ispis2.value = sekunde;
            if (ispis2.value.length == 1) {
                ispis2.value = "0" + sekunde;
            }

        }, 1000 / 10);
    }
});
btn6.addEventListener("click", function () {
    clearInterval(sat);
    sat = null;
});


// moze i bez window objekta; moze i izraz da se nadje za ms

/*
setTimeout(() => {
    console.log(this); // this = window;
}, 1000 / 2);
*/
/* PREKO ANONIMNIH FUNKCIJA
setTimeout(function () {
    console.log(this); // this = objekat koji poziva metodu;
}, 1000 * 2);
*/
/* PREKO IMENOVANIH FUNKCIJA
function ispis() {
    console.log("3");
}
setTimeout(ispis, 1000 * 2); // kada funciju koristimo kao callback f ne idu zagrade zato sto je to parametar ,a ne poziv funkcije
*/
