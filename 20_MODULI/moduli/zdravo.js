function ispis(poruka) {
    console.log(poruka);
}
// 2.nacin
/*export*/ function zdravo(ime) {
    ispis(`Zdravo,${ime}`);
}
/*export*/ let ime = "Marija";
// moduli koriste strict mode

export { zdravo, ime };// 1.nacin
// nema () za funkciju,samo ime funkcije navodimo; modul moze da ima proizvoljno funkcija,promenljivih i klasa; mozemo da exportujemo sve proizvoljan broj ,ali moraju da postoje unutra modula