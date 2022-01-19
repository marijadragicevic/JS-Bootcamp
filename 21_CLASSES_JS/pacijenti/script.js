import Pacijent from "./pacijent.js";

let p1 = new Pacijent("Jelena", 173, 66);
let p2 = new Pacijent("Ana", 180, 72);
let p3 = new Pacijent("Pera", 190, 140);
let p4 = new Pacijent("Mika", 167, 57);
let p5 = new Pacijent("Mila", 150, 70);


let pacijenti = [p1, p2, p3, p4, p5];

//Ispisati podatke o pacijentu sa najmanjom težinom.
let btnMinTez = document.getElementById("minTez");
let spanMinTezRex = document.getElementById("minTezRez");
btnMinTez.addEventListener("click", () => {

    // let min = pacijenti[0].tezina; // pozovamo geter tezina
    let min = pacijenti[0];// ceo objekat i onda mozemo da pristupamo svim podacima
    pacijenti.forEach(p => {
        if (min.tezina > p.tezina) {
            min = p;
        }
    });
    spanMinTezRex.innerHTML = min.stampajListu();
    // console.log(min);
    // min.stampaj();

});

// Ispisati podatke o pacijentu sa najvećom bmi vrednošću.
let btnmaxBMI = document.querySelector("#maxBMI");
let pMaxBMIRez = document.querySelector("#maxBMIRez");

btnmaxBMI.addEventListener("click", () => {
    let maxBMI = pacijenti[0]; // pretpostvaka je da prvi pacijent ima max BMI
    for (let i = 1; i < pacijenti.length; i++) {
        if (maxBMI.Bmi() < pacijenti[i].Bmi()) {
            maxBMI = pacijenti[i];
        }
    }
    pMaxBMIRez.innerHTML = maxBMI.stampajListu();
});


/////////////////////////////////////////////////////////////////////////

//18 i 19 slajd
// let p1 = new Pacijent("Pera", 185, 90);
// let p2 = new Pacijent("Mika", 210, 100);
// let p3 = new Pacijent("Sima", 170, 50);

// console.log(p1.Bmi());
// console.log(p2.Bmi());
// console.log(p3.Bmi());

// p1.stampaj();
// p2.stampaj();
// p3.stampaj();

// console.log(p1.Kriticni());
// console.log(p2.Kriticni());
// console.log(p3.Kriticni());

// p1.tezina = -25;
// p1.visina = 252;
// console.log(p1.tezina);
// console.log(p1.visina);

// p2.tezina = 190;
// p2.visina = 150;
// console.log(p2.Bmi());
// console.log(p2.Kriticni());
