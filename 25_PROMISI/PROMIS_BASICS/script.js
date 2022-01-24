let getSomething = () => {
    let obj = new Promise((resolve, reject) => {
        // resolve i reject su ugradjene funkcije koje vrse ispis u zavisnosti da li je sve ok ili ne
        // resolve("Nesto resolve");  // sve je ok proslo
        reject("Nesto reject");       // nesto nije ok proslo
    });
    // console.log(obj);
    return obj; // vraca promis
}

// Ako je promis vratio resolve .than()grana se realizuje
//Ako je promis vratio reject  realizuje se  .catch() grana
getSomething().then(data => {
    console.log(`Aktivirana je than grana ${data}`); // data dobija vrednost one poruke koja se prosledjuje u resolve-u
}).catch(error => {
    console.log(`Aktivirana je catch grana ${error}`); // error dobija vrednost one poruke koja se prosledjuje u reject-u
});