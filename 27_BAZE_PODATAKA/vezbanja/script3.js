// 2.zad
// a)
/*
db.collection("costumers")
    .where("addresses", "array-contains", "Nis")
    .get()
    .then(snapshot => {
        if (!snapshot.empty) {
            // let allDocs = snapshot.docs;
            snapshot.docs.forEach(doc => {
                console.log(doc.data());
            });
        }
        else {
            console.log(`Nema korisnika sa zadatim uslovom`);
        }
    })
    .catch((err) => {
        console.log(`Greska u upitu ${err}`);
    });
    */
// b)
/*
db.collection("costumers")
    .where("salary", ">=", 500)
    .get()
    .then(snapshot => {
        if (!snapshot.empty) {
            // let allDocs = snapshot.docs;
            snapshot.docs.forEach(doc => {
                console.log(doc.data());
            });
        }
        else {
            console.log(`Nema korisnika sa zadatim uslovom`);
        }
    })
    .catch((err) => {
        console.log(`Greska u upitu ${err}`);
    });
*/
// c)
/*
db.collection("costumers")
    .where("salary", ">=", 500)
    .where("salary", "<=", 800)
    .get()
    .then(snapshot => {
        if (!snapshot.empty) {
            // let allDocs = snapshot.docs;
            snapshot.docs.forEach(doc => {
                console.log(doc.data());
            });
        }
        else {
            console.log(`Nema korisnika sa zadatim uslovom`);
        }
    })
    .catch((err) => {
        console.log(`Greska u upitu ${err}`);
    });
*/
// d)
/*
// treba index da kreiramo
db.collection("costumers")
    .where("salary", "<=", 900)
    .where("age", "==", 30)
    .get()
    .then(snapshot => {
        if (!snapshot.empty) {
            // let allDocs = snapshot.docs;
            snapshot.docs.forEach(doc => {
                console.log(doc.data());
            });
        }
        else {
            console.log(`Nema korisnika sa zadatim uslovom`);
        }
    })
    .catch((err) => {
        console.log(`Greska u upitu ${err}`);
    });
*/
// e)
/*
db.collection("costumers")
    .where("addresses", "array-contains-any", ["Nis", "Beograd"])
    // ne mozemo da koristimo dva array - contains; mozemo u foreach - u da pitamo
    // .where("addresses", "array-contains", "Nis")
    // .where("addresses", "array-contains", "Beograd")
    .get()
    .then(snapshot => {
        if (!snapshot.empty) {
            // let allDocs = snapshot.docs;
            snapshot.docs.forEach(doc => {
                console.log(doc.data());
            });
        }
        else {
            console.log(`Nema korisnika sa zadatim uslovom`);
        }
    })
    .catch((err) => {
        console.log(`Greska u upitu ${err}`);
    });
*/
// f)
/*
db.collection("costumers")
    .where("age", "in", [22, 25, 28])
    .get()
    .then(snapshot => {
        if (!snapshot.empty) {
            // let allDocs = snapshot.docs;
            snapshot.docs.forEach(doc => {
                console.log(doc.data());
            });
        }
        else {
            console.log(`Nema korisnika sa zadatim uslovom`);
        }
    })
    .catch((err) => {
        console.log(`Greska u upitu ${err}`);
    });
    */
////////////////////////////////////////////////////////////////////////////////////

// 3.zad
/*
db.collection("tasks")
    .orderBy("title")
    .get()
    .then(snapshot => {
        if (!snapshot.empty) {
            // let allDocs = snapshot.docs;
            snapshot.docs.forEach(doc => {
                console.log(doc.data());
            });
        }
        else {
            console.log(`Nema korisnika sa zadatim uslovom`);
        }
    })
    .catch((err) => {
        console.log(`Greska u upitu ${err}`);
    });
*/
// 4.zad
// a)
/*
db.collection("tasks")
    .where("priority", "==", true)
    .get()
    .then(snapshot => {
        if (!snapshot.empty) {
            // let allDocs = snapshot.docs;
            snapshot.docs.forEach(doc => {
                console.log(doc.data());
            });
        }
        else {
            console.log(`Nema korisnika sa zadatim uslovom`);
        }
    })
    .catch((err) => {
        console.log(`Greska u upitu ${err}`);
    });
    */


// b)
/*
let now = new Date();
let year = now.getFullYear();
let data1 = new Date(year, 0, 1); // 1.januar tekuce godine
let data2 = new Date(year + 1, 0, 1); // 1.januar naredne godine
let data1Timestamp = firebase.firestore.Timestamp.fromDate(new Date(data1));
let data2Timestamp = firebase.firestore.Timestamp.fromDate(new Date(data2));

db.collection("tasks")
    .where("dueDate", ">=", data1Timestamp)
    .where("dueDate", "<", data2Timestamp)
    // ovo dole nije potpuno
    // .where("dueDate", ">=", firebase.firestore.Timestamp.fromDate(new Date("2022-01-01 00:00:00")))
    // .where("dueDate", "<", firebase.firestore.Timestamp.fromDate(new Date("2023-01-01 00:00:00")))
    .get()
    .then(snapshot => {
        if (!snapshot.empty) {
            // let allDocs = snapshot.docs;
            snapshot.docs.forEach(doc => {
                console.log(doc.data());
            });
        }
        else {
            console.log(`Nema korisnika sa zadatim uslovom`);
        }
    })
    .catch((err) => {
        console.log(`Greska u upitu ${err}`);
    });
*/
// c)
// moze oba
// let d = firebase.firestore.Timestamp.fromDate(new Date());
// let f = d.toDate();
/*
db.collection("tasks")
    .where("dueDate", "<=", d)
    .get()
    .then(snapshot => {
        if (!snapshot.empty) {
            // let allDocs = snapshot.docs;
            snapshot.docs.forEach(doc => {
                console.log(doc.data());
            });
        }
        else {
            console.log(`Nema korisnika sa zadatim uslovom`);
        }
    })
    .catch((err) => {
        console.log(`Greska u upitu ${err}`);
    });
*/

// d)
/*
db.collection("tasks")
    .where("startDate", ">", d)
    .get()
    .then(snapshot => {
        if (!snapshot.empty) {
            snapshot.docs.forEach(doc => {
                console.log(doc.data());
            });
        }
        else {
            console.log(`Nema korisnika sa zadatim uslovom`);
        }
    }).catch((err) => {
        console.log(`Greska u upitu ${err}`);
    });
*/

//////////////////////////////////////////////////////////////////////////////////////

// 5.zad
// a)
db.collection("movies")
    .where("directors.name", "==", "name1")
    .where("directors.surname", "==", "surname1")
    .get()
    .then(snapshot => {
        if (!snapshot.empty) {
            snapshot.docs.forEach(doc => {
                console.log(doc.data().directors);
            });
        }
        else {
            console.log(`Nema filmova sa zadatim uslovom`);
        }
    }).catch((err) => {
        console.log(`Greska u upitu ${err}`);
    });



// b)
db.collection("movies")
    .where("ratings", ">=", 5)
    .where("ratings", "<=", 10)
    .get()
    .then(snapshot => {
        if (!snapshot.empty) {
            snapshot.docs.forEach(doc => {
                console.log(doc.data().ratings);
            });
        }
        else {
            console.log(`Nema filmova sa zadatim uslovom`);
        }
    }).catch((err) => {
        console.log(`Greska u upitu ${err}`);
    });

// c)
db.collection("movies")
    .where("genres", "array-contains-any", ["genr1", "comedy", "drama"])
    .get()
    .then(snapshot => {
        if (!snapshot.empty) {
            snapshot.docs.forEach(doc => {
                console.log(doc.data().genres);
            });
        }
        else {
            console.log(`Nema filmova sa zadatim uslovom`);
        }
    }).catch((err) => {
        console.log(`Greska u upitu ${err}`);
    });

// d)
db.collection("movies")
    .where("releaseDate", ">=", 2001)
    .where("releaseDate", "<=", 2100)
    .get()
    .then(snapshot => {
        if (!snapshot.empty) {
            snapshot.docs.forEach(doc => {
                console.log(doc.data().releaseDate);
            });
        }
        else {
            console.log(`Nema filmova sa zadatim uslovom`);
        }
    }).catch((err) => {
        console.log(`Greska u upitu ${err}`);
    });


// 6.zad
db.collection("movies")
    .orderBy("ratings", "desc")
    .limit(1)
    .get()
    .then(snapshot => {
        if (!snapshot.empty) {
            snapshot.docs.forEach(doc => {
                console.log(doc.data());
            });
        }
        else {
            console.log(`Nema filmova sa zadatim uslovom`);
        }
    }).catch((err) => {
        console.log(`Greska u upitu ${err}`);
    });

// 7.zad
db.collection("movies")
    // mora index da se kreira
    .where("genres", "array-contains", "drama")
    .orderBy("ratings")
    .limit(1)
    .get()
    .then(snapshot => {
        if (!snapshot.empty) {
            snapshot.docs.forEach(doc => {
                console.log(doc.data());
            });
        }
        else {
            console.log(`Nema filmova sa zadatim uslovom`);
        }
    }).catch((err) => {
        console.log(`Greska u upitu ${err}`);
    });
