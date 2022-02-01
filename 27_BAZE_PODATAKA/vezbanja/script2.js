// 1. Pristupanje konkretno dokumentu u kolekciji
// 2.  Pristupanje svim ili odredjenim dokumentima iz kolekcije

// 1. 

db.collection("costumers")
    .doc("costumer2")
    .get()
    .then(doc => {
        if (doc.exists) {
            console.log(`Postoji dokument ${doc.id}`);
            let obj = doc.data(); // .data konvertuje dokument u js objekat
            console.log(obj);
        }
        else {
            console.log(`Ne postoji dokument ciji je ID: ${doc.id}`);
        }

        // Polja: doc.id(string) , doc.exists(boolean)
        // Metoda: doc.data()
    })
    .catch(error => {
        console.log(`Nemoguce dohvatiti dokument ${error}`);
    });


// 2.

db.collection("costumers")
    .get()
    .then(snapshot => {
        if (!snapshot.empty) {
            let allDocs = snapshot.docs;
            allDocs.forEach(doc => {
                console.log(doc.id, doc.data());
            });
        }
        else {
            console.log(`Nema dokumenata u kolekciji`);
        }
    })
    .catch(error => {
        console.log(`Nemoguce dohvatiti dokumente iz kolekcije: ${error}`);
    });

/////////////////////////////////////////////////////////////

// 1. Dohvatanje dokumenata u odredjenom redosledu
// 2. Dohvatanje odredjenog broja dokm iz kolkcije
// 3. Dohvatanje dokumenata koji zadovoljavaju odredjne kriterijumr(filtriranje)

// 1.
db.collection("costumers")
    .orderBy("age", "desc") // na osnovu kog polja zelimo da sortiramo dokm; dokumenti koji nemaju to polje nece biti razmatrani
    // po dif ima rastuci poredak ( "asc" ),ako zelimo da bude opadajuci redosled prosledjujemo ( "desc" )
    .orderBy("name") // kreiranje indexa i oni ostaju u bazi i kasnije kada nam je potrebno ne moramo ponovo da kreiramo isti index
    .get()
    .then(snapshot => {
        if (!snapshot.empty) {
            let allDocs = snapshot.docs;
            allDocs.forEach(doc => {
                let obj = doc.data();
                console.log(obj.name + " " + obj.age + ' ' + obj.salary);
            });
        }
        else {
            console.log(`Nema dokumenata u kolekciji`);
        }
    })
    .catch(error => {
        console.log(`Nemoguce dohvatiti dokumente iz kolekcije: ${error}`);
    });


// 2.
db.collection("costumers")
    .orderBy("name")
    .orderBy("age", "desc")
    .orderBy("salary", "desc")
    .limit(2) // broj dokumenta koji zelimo da se prikazu; moze i iznad orderBy da stavimo
    .get()
    .then(snapshot => {
        if (!snapshot.empty) {
            let allDocs = snapshot.docs;
            allDocs.forEach(doc => {
                let obj = doc.data();
                console.log(obj.name + " " + obj.age + ' ' + obj.salary);
            });
        }
        else {
            console.log(`Nema dokumenata u kolekciji`);
        }
    })
    .catch(error => {
        console.log(`Nemoguce dohvatiti dokumente iz kolekcije: ${error}`);
    });


// 3.
db.collection("costumers")
    .where("age", ">=", 25)
    // polje koje stavimo u .where() mora da bude prvo polje i u .orderBy()
    // .where("salary", "==", 650) - isto kao i kod orderBy moramo da kreiramo indexe za vise where
    .orderBy("age", "desc")
    .orderBy("name")
    // .orderBy("age", "desc")
    // .orderBy("salary", "desc")
    .limit(1) // broj dokumenta koji zelimo da se prikazu; moze i iznad orderBy da stavimo
    .get()
    .then(snapshot => {
        if (!snapshot.empty) {
            let allDocs = snapshot.docs;
            allDocs.forEach(doc => {
                let obj = doc.data();
                console.log(obj.name + " " + obj.age + ' ' + obj.salary);
            });
        }
        else {
            console.log(`Nema dokumenata u kolekciji`);
        }
    })
    .catch(error => {
        console.log(`Nemoguce dohvatiti dokumente iz kolekcije: ${error}`);
    });

//////////////////////////////////////////////////////////////////////////////////
