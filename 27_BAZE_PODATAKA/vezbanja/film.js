//Dodaje nekoliko filmova u bazu
for (let i = 3; i < 5; i++) {
    db.collection("movies").doc(`film${i}`)
        .set(
            {
                name: `film${i}`,
                genrs: ["genr2"],
                directors: {
                    name: `name${i}`,
                    surname: `surname${i}`
                },
                releasingDate: 2020,
                ratings: 7
            }
        )
        .then(() => {
            console.log(`Uspesno dodat novi dokument u kolekciju`);
        })
        .catch(error => {
            console.log(`Greska ${error}`);
        })
}

// Menja podatke o nekim filmovima u bazi
db.collection("movies").doc("film4")
    .update({
        ratings: 8.8,
        releasingDate: 2004
    })
    .then(() => {
        console.log(`Uspesno izmenjeni podaci dokumenta u kolekciji`);
    })
    .catch(error => {
        console.log(`Greska ${error}`);
    })
//Dodaje žanr nekom filmu
db.doc("movies/film4").update({
    genres: firebase.firestore.FieldValue.arrayUnion("genr8")
})
    .then(() => {
        console.log(`Uspesno dodat novi zanr`);
    })
    .catch(error => {
        console.log(`Greska ${error}`);
    })

//Briše žanr nekom filmu
db.doc("movies/film1").update({
    genres: firebase.firestore.FieldValue.arrayRemove("genr5")
})
    .then(() => {
        console.log(`Uspesno izbrisan zanr`);
    })
    .catch(error => {
        console.log(`Greska ${error}`);
    })

// Menja ime ili prezime nekom režiseru

db.doc("movies/film2").update({
    "directors.name": "Name2changed"
})
    .then(() => {
        console.log(`Uspesno promenjeno ime rezisera`);
    })
    .catch(error => {
        console.log(`Greska ${error}`);
    })