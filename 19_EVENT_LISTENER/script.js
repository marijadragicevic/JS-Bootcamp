console.log(`Events`);

// 1. Dohvati HTML element na koji zelis da postavis osluskivac
let pKlikni = document.getElementById("klikni");

// 2. Na element postavljamo osluskivac
pKlikni.addEventListener("click", () => {
    console.log(`Jednom kliknuto na paragraf`);
});

/////////////////////////////////////////////////

// 1.
let pKlikni2 = document.getElementById("dvaKlika");
//2.
pKlikni2.addEventListener("dblclick", () => {
    console.log("Dva puta kliknuto na paragraf");
});

/////////////////////////////////////////////////

// 1.
let btnPlus = document.getElementById("plus");
let btnMinus = document.getElementById("minus");

// 2.
let rez = 0;
let spanRez = document.getElementById("rez");
btnPlus.addEventListener("click", () => {
    rez++;
    spanRez.innerHTML = rez;
    if (rez < 0) {
        spanRez.style.color = "blue";
    }
    else {
        spanRez.style.color = "orange";
    }
});
btnMinus.addEventListener("click", () => {
    rez--;
    spanRez.innerHTML = rez;
    if (rez < 0) {
        spanRez.style.color = "blue";
    }
    else {
        spanRez.style.color = "orange";
    }
});

/////////////////////////////////////////////////////////

let btnHello = document.getElementById("hello");
let inputIme = document.getElementById("ime");
let phelloispis = document.getElementById("helloispis");

btnHello.addEventListener("click", () => {
    let inputImeValue = inputIme.value; // preuzimamo vrednost 
    phelloispis.innerHTML = `Hello ${inputImeValue}`;
});

////////////////////////////////////////////////////////

// DOM
let inputGodRodjenja = document.getElementById("godRodj");
let inputPol = document.querySelectorAll("input[name='pol']");
let btnPosalji = document.getElementById("posalji");
let pIspis = document.getElementById("ispis");

btnPosalji.addEventListener("click", (e) => {
    e.preventDefault();
    // prevent default; e je event i nosi ovu osobinu prevent default;sprecava reload stranice

    let date = new Date();
    let tekucaGod = date.getFullYear();

    let inputGodRodjenjaValue = inputGodRodjenja.value;
    inputGodRodjenjaValue = parseInt(inputGodRodjenjaValue);
    // console.log(inputGodRodjenjaValue);
    // console.log(typeof inputGodRodjenjaValue);

    let god = tekucaGod - inputGodRodjenjaValue;
    pIspis.innerHTML = `Korisnik ima ${god} godina`;
    // += nadovezuje na prethodno

    let checkedPol = document.querySelector(`input[name="pol"]:checked`);
    // vraca html tag onog input polja na koje je klinuto
    // :checked koje cekirano;
    // console.log(checkedPol.value);
    let checkedPolValue = checkedPol.value;
    //  vrca vrednost iz selektovanog html taga

    if (checkedPolValue == "Z") {
        pIspis.innerHTML += ` i zenskog je pola.`
    }
    else if (checkedPolValue == "M") {
        pIspis.innerHTML += ` i muskog je pola.`
    }
    else {
        pIspis.innerHTML += ` i nije se opredelio za pol.`
    }


});