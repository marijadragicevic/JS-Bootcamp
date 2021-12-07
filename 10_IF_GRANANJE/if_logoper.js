console.log(`IF LOGICKI OPERATORI`);

// primer sa prezentacije

// 1. negacija 2.and 3.or ;
//  pr. if(!true && true) -> false
//  pr.  if(!true && true || false) -> (false || false) -> false
//  pr.  if((!true && true) || false) -> (false || false) -> false


let pol = "m";
let god = -23;
if (pol == "m" && god >= 18) {
    console.log(`Osoba je muskog pola i punoletna je.`);
}
else if (pol == "m" && god < 18 && god >= 0) {
    console.log(`Osoba je muskog pola i maloletna je.`);
}

else if (pol == "z" && god >= 18) {
    console.log(`Osoba je zenskog pola i punoletna je.`);
}
else if (pol == "z" && god < 18 && god >= 0) {
    console.log(`Osoba je zenskog pola i maloletna je.`);
}
else {
    console.log(`Pogresan unos`);
}

///////////////////////////////////////////////

// = stavljamo kada prvi put inosimo nesto na html; += dodaje na vec postojeci materijal novi,odnosno ne prelepi ga
pol = "Z";
if (pol == "z" || pol == "Z" || pol == "ž" || pol == "Ž") {
    document.body.innerHTML = `<img src="img/z.png">`;
}
else if (pol == "m" || pol == "M") {
    document.body.innerHTML = `<img src="img/m.png">`;
}
else {
    document.body.innerHTML = `<p>Pogresan unos</p>`;
}

///////////////////////////////////////
// 0<=god<=18 ovakva konstrukcija u programiranju ne postoji to prelazi u --> god>=0 && god<18

pol = "M";
god = 15;

if ((pol == "m" || pol == "M") && god >= 18) {
    console.log(`Osoba je muskog pola i punoletna je.`);
}
else if ((pol == "m" || pol == "M") && god < 18 && god >= 0) {
    console.log(`Osoba je muskog pola i maloletna je.`);
}
else if ((pol == "z" || pol == "Z" || pol == "ž" || pol == "Ž") && god >= 18) {
    console.log(`Osoba je zenskog pola i punoletna je.`);
}
else if ((pol == "z" || pol == "Z" || pol == "ž" || pol == "Ž") && god < 18 && god >= 0) {
    console.log(`Osoba je zenskog pola i maloletna je.`);
}
else {
    console.log(`Pogresan unos`);
}