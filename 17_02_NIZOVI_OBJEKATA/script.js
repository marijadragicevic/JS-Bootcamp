console.log(`NIZOVI OBJEKATA`);

let blog1 = {
    title: "Osnovni HTML tagovi",
    likes: 30,
    dislikes: 15
};
let blog2 = {
    title: "Osnovni CSS selektori",
    likes: 70,
    dislikes: 5
};
let blog3 = {
    title: "Napredni CSS selektori!",
    likes: 50,
    dislikes: 60
};


// ispis objekata iz niz pomocu forEach petlje
let arrBlogs = [blog1, blog2, blog3];
arrBlogs.forEach(objekatBlog => {
    console.log(objekatBlog);
});
arrBlogs.forEach(objekatBlog => {
    document.body.innerHTML += `<h3>${objekatBlog.title}</h3>`;
    document.body.innerHTML += `<p>Likes: ${objekatBlog.likes}</p>`;
    document.body.innerHTML += `<p>Dislikes: ${objekatBlog.dislikes}</p>`;
});

//ispis objekata iz niza pomocu for petlje
for (let i = 0; i < arrBlogs.length; i++) {
    console.log(arrBlogs[i].title);
}

// promena vrednosti elementa
// blog3.title = "Napredni HTML tagovi";
// console.log(arrBlogs);
// arrBlogs[2].title = "HTML5 tagovi!";
// console.log(arrBlogs);

// VEZBANJE

// napraviti funk van objekta,a metod je u objektu

// 1. Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona vraća ukupan broj lajkova

let sumaLikes = arr => {
    let suma = 0;

    // 1.nacin
    /*
    arr.forEach(blog => {
        suma += blog.likes;
    });
    return suma;*/

    // 2.nacin
    for (let i = 0; i < arr.length; i++) {
        // arr[i] je objekat
        // arr[i].likes je broj lajkova objekta arr[i]
        suma += arr[i].likes;
    }
    return suma
};
console.log(`Ukupan broj lajkova je: ${sumaLikes(arrBlogs)}`);

// Lajkovi iz 1. i 3. bloga
let suma1 = arrBlogs[0].likes + arrBlogs[2]["likes"];
console.log(suma1);

// 2. Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona vraća prosečan broj lajkova

let prosekLikes = (arr, funkcija) => {
    let suma = funkcija(arr);
    return (arr.length == 0) ? 0 : suma / arr.length;
};
console.log(`Prosecan broj lajkova:`);
console.log(prosekLikes(arrBlogs, sumaLikes));

// 3. Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju više pozitivnih nego negativnih ocena.

let moreLikes = arr => {
    arr.forEach(blog => {
        if (blog.likes > blog.dislikes) {
            console.log(blog.title);
        }
    });
};
console.log(`Vise lajkova od dislajkova:`);
moreLikes(arrBlogs);

// 4.Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju najmanje duplo više pozitivnih nego negativnih ocena

let moreLikesx2 = arr => {
    arr.forEach(el => {
        if (el.likes / el.dislikes >= 2) {
            console.log(el.title);
        }
    });
};
console.log(`Najmanje duplo vise lajkova od dislajkova:`);
moreLikesx2(arrBlogs);

// 5. Napisati arrow funkciju kojoj se prosleđuje niz objekata a ona ispisuje sve naslove koji se završavaju uzvičnikom

let naslovUzvicnik = arr => {
    arr.forEach(el => {
        if (el.title.endsWith("!")) {
            console.log(el.title);
        }
    });
};
console.log(`Naslovi blogova koji se zavrsavaju "!":`);
naslovUzvicnik(arrBlogs);

// moze i el.title.slice(-1) == "!"
// ili el.title[el.title.lenght -1] == "!"