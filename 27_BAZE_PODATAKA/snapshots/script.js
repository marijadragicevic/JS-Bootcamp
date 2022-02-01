let ul = document.querySelector("ul");
let form = document.querySelector("form");

// snapshot trenutno stanje u bazi
/*
db.collection("tasks")
    .orderBy("startDate", "desc")
    .get()
    .then((snapshot) => {
        if (!snapshot.empty) {
            snapshot.docs.forEach(doc => {
                let obj = doc.data();
                let li = document.createElement("li");
                li.innerHTML = `${obj.title} (${obj.startDate.toDate()}) [${obj.description}]`;
                ul.appendChild(li);
                if (obj.priority === true) {
                    li.style.color = "red";
                }
            });
        }
    }).catch((err) => {
        console.log(`Greska: ${err}`);
    });
*/

form.addEventListener("submit", function (event) {
    event.preventDefault();
    let title = this.title.value; // unutar forme pristupamo el sa id title
    let startDate = this.startDate.value;
    let dueDate = this.dueDate.value;
    let priority = this.priority.checked
    let description = this.description.value;
    // console.log(title, startDate, dueDate, priority, description);

    // konvertovanje u Date objekat
    let startDateObj = new Date(startDate);
    let dueDateObj = new Date(dueDate);
    // konvertovanje u timstamp 
    let startDateTS = firebase.firestore.Timestamp.fromDate(startDateObj);
    let dueDateTS = firebase.firestore.Timestamp.fromDate(dueDateObj);

    let obj = {
        title: title,
        startDate: startDateTS,
        dueDate: dueDateTS,
        priority: priority,
        description: description
    };

    db.collection("tasks")
        .add(obj)
        .then(() => {
            console.log(`Uspesno dodat novi zadatak!`);
        }).catch((err) => {
            console.log(`Greska prilikom dodavanja zadataka ${err}`);
        });
});

// baza automatski updajtuje promene ; npr brisanje i dodavanje taskova

db.collection("tasks")
    .onSnapshot(snapshot => {
        let changes = snapshot.docChanges();
        // console.log(changes);
        changes.forEach(change => {
            let type = change.type;
            let doc = change.doc;
            let id = doc.id;
            if (type === "added") {
                let obj = doc.data();
                let li = document.createElement("li");
                li.id = id;
                li.innerHTML = `${obj.title} (${obj.startDate.toDate()}) [${obj.description}]`;
                ul.appendChild(li);
                if (obj.priority === true) {
                    li.style.color = "red";
                }

                let btn = document.createElement("button");
                btn.innerHTML = "Delete task!";
                li.appendChild(btn);
            }
            else if (type === "removed") {
                let li = document.getElementById(id);
                li.remove();
            }
        });
    }); // zove se svaki put kada dodje do promene u bazi 

ul.addEventListener("click", function (event) {
    event.preventDefault();
    console.log(event.target.tagName);
    if (event.target.tagName === "BUTTON") {
        let li = event.target.parentElement;
        console.log(li);
        let id = li.id;
        db.collection("tasks")
            .doc(id)
            .delete()
            .then(() => {
                alert(`Uspesno obrisan zadatak`);
            }).catch((err) => {
                alert(`Greska prilikom brisanja: ${err}`);
            });
    }
});