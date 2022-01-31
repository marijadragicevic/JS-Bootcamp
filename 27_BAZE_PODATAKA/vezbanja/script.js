// db je objekat "baze" (njega vucemo iz html fajla)
console.log(db);

// pristupanje kolekciji
let costumers = db.collection("costumers");
console.log(costumers);

// pristupanje dokumentu
let doc1 = costumers.doc("costumer1");
console.log(doc1);

//pristupanje doku mentu bez medju promenljive
let doc2 = db.collection("tasks").doc("task1");
console.log(doc2);
/*
Za pristup dokumentu:
let doc = db.collection("...").doc(".....")
Kod dokumenata imamo sledece operacije:
    1) CRUD(Create,Read,Update,Delete) - ove metode vracaju promise
    Create: doc.set("")
    Read: doc.get()
    Update: doc.update()
    Delete: doc.delete
* Sve ove 4 operacije ako rezultat vracaju promise
  Sto znaci: Nakon njih lancamo .then() i .catch()
*/

let obj = {
    name: "Vesna",
    age: 22,
    addresses: ["Nis", "Leskovac"],
    salary: 470.00
};
db.collection("costumers")
    .doc("costumer4")
    .set(obj) // ako ne stavimo id za doc koji kreiramo ,svaki put kada refre stranicu dodavace nam taj dokument
    .then(() => {
        console.log("Dodat novi dokument u kolekciju 'customers'");
        return db.collection("costumers").doc("costumer4").set(
            { height: 180 }, { merge: true }
        );
    })
    .then(() => {
        console.log("Spojen dokument costumer4 u kolekciju 'customers'");
    })
    .catch(error => {
        console.log(`Greska priliom dodavaja novog dokumenta ${error}`);
    });
let datum1 = new Date("2022-01-26 12:00:00");
let datum2 = new Date("2022-01-26 13:00:00")

let obj2 = {
    title: "Fudbal",
    startDate: firebase.firestore.Timestamp.fromDate(datum1),
    dueDate: firebase.firestore.Timestamp.fromDate(datum2),
    priority: false,
    description: "Fudbal sa drugraima iz ITBootcamp-a"
}

db.collection("tasks")
    .doc("task4")
    .set(obj2)
    .then(msg => {
        console.log(`Uspesno dodat task`);
    })
    .catch(error => {
        console.log(`NE uspesno dodat task`);
    });

db.collection("tasks").doc("task4").update({
    priority: true
})
    .then(() => {
        console.log(`Uspesno promenjeno polje u dokumentu`);
    })
    .catch(error => {
        console.log(`Greska prilokom menjanja dokumenta ${error}`);
    });

db.collection("costumers").doc("costumer1").delete()
    .then(() => { console.log(`Uspesno izbrisan dokument`); })
    .catch(error => {
        console.log(`Greska prilikom brisanja dokumenta ${error}`);
    });

console.log("Tekst poruka");

// Drugi nacin za dodavanje dokumenta

db.collection("tasks")
    // nemamo mogucnost dodavanje id dokumentu i nastaje gore navedena situacija kada ne dodajemo id dokumentu
    .add({
        title: "Vezba za projekat",
        description: "Vezbanje JS",
        startDate: firebase.firestore.Timestamp.fromDate(new Date("2022-01-29 ")),
        dueDate: null, // kada se ne zavrsava
        priority: true
    })
    .then(() => {
        console.log(`Uspeno dodat zadatak u kolekciju tasks`);
    })
    .catch((error) => {
        console.log(`Desila se greska ${error}`);
    })

/*
db.collection("....").add()     <=>     db.collection("....").doc().set()
    -dodaje novi dokument sa randomm generisanim ID-em

db.collection("....").doc(ID).set()
    - dodaje novi dokument sa zadatim ID-em
*/