let blog1 = {
    title: "Osnovni HTML tagovi",
    likes: 30,
    dislikes: 9
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
let blog4 = {
    title: "Uvod u JS",
    likes: 150,
    dislikes: 50
};
let blog5 = {
    title: "IF naredba grananja",
    likes: 250,
    dislikes: 160
};

let user1 = {
    username: "Jelena Matejic",
    age: 27,
    blogs: [blog1, blog2, blog3],

    myLikes: function () {
        let suma = 0;
        this.blogs.forEach(b => {
            suma += b.likes;
        });
        return suma;
    },
    myDislikes: function () {
        let suma = 0;
        this.blogs.forEach(b => {
            suma += b.dislikes;
        });
        return suma;
    }
};

let user2 = {
    username: "Stefan Stanimirovic",
    age: 32,
    blogs: [blog4, blog5],

    myLikes: function () {
        let suma = 0;
        this.blogs.forEach(b => {
            suma += b.likes;
        });
        return suma;
    },
    myDislikes: function () {
        let suma = 0;
        this.blogs.forEach(b => {
            suma += b.dislikes;
        });
        return suma;
    }
};

// ispis
console.log(user1.username);

// Podaci o prvom blogu korisnika 1:
console.log(user1.blogs[0]); // ne moze user1.blogs.blog1 -zato sto je to u nizu i u nizu gadjamo po indeksu ,a u objektu po imenu propertija

// Naslov prvog bolga korisnika 1:
console.log(user1.blogs[0].title);

// Niz korisnika

let users = [user1, user2];

// Ko su autori blogova

users.forEach(u => {
    console.log(u.username);
});

// 1. Ispisati sve naslove blogove koje su napisali autori iz niza users

users.forEach(u => {
    // u je jedan user iz niza
    let blogsU = u.blogs; // ovo su svi blogovi tekuceg korisnika
    blogsU.forEach(b => {
        console.log(b.title);
    });
});

console.log(`2. Ispisati imena onih autora koji imaju ispod 30 godina`);
users.forEach(u => {
    if (u.age < 30) {
        console.log(u.username);
    }
});

console.log(`3. Ispisati naslove onih blogova koji imaju više od 50 lajkova`);

users.forEach(u => {
    let blogsU = u.blogs; // niz blogova tekuceg korisnika u
    blogsU.forEach(b => {
        if (b.likes > 50) {
            console.log(b.title);
        }
    });
});

console.log(`4. Ispisati sve naslove blogove autora čiji je username "Stefan Stanimirovic"`);

users.forEach(u => {
    if (u.username === "Stefan Stanimirovic") {
        u.blogs.forEach(b => {
            console.log(b.title);// console.log(b); cele blogove ispisujemo
        });
    }
});

console.log(`5. Ispisati imena onih autora koji imaju ukupno više od 200 lajkova za blogove koje su napisali`);

// 1.nacin
users.forEach(u => {
    let suma = 0;
    u.blogs.forEach(b => {
        suma += b.likes;
    });
    if (suma > 200) {
        console.log(u.username);
    }
});

// 2.nacin
users.forEach(u => {
    if (u.myLikes() > 200) {
        console.log(u.username);
    }
});

console.log(`6. Ispisati naslove onih blogova koji imaju natprosečan broj pozitivnih ocena`);

let globalAvgLikes = arr => {
    let globalSuma = 0;
    let globalBr = 0;
    arr.forEach(u => {
        globalSuma += u.myLikes(); //dodaj koliko je pojedinacni korisnik imao ukupno lajkova
        globalBr += u.blogs.length; // dodaj koliko je pojedinacni korisnik imao ukupno blogova
    });
    return globalSuma / globalBr;

};
console.log(`Globalan prosek lajkova je ${globalAvgLikes(users)}`);

let blogoviSaNatprosLajkova = arr => {
    let globalAvg = globalAvgLikes(arr);
    arr.forEach(u => {
        u.blogs.forEach(b => {
            if (b.likes > globalAvg) {
                console.log(b.title);
            }
        });
    });
};
blogoviSaNatprosLajkova(users);

console.log(`7. Ispisati naslove onih blogova koji imaju natprosečan broj pozitivnih ocena i ispodprosečan broj negativnih ocena`);

let globalAvgDisikes = arr => {
    let globalSuma = 0;
    let globalBr = 0;
    arr.forEach(u => {
        globalSuma += u.myDislikes(); //dodaj koliko je pojedinacni korisnik imao ukupno lajkova
        globalBr += u.blogs.length; // dodaj koliko je pojedinacni korisnik imao ukupno blogova
    });
    return globalSuma / globalBr;

};
console.log(globalAvgDisikes(users));

let ispisNaslovaBlogova = arr => {
    let prPoz = globalAvgLikes(arr);
    let prNeg = globalAvgDisikes(arr);
    arr.forEach(u => {
        u.blogs.forEach(b => {
            if (b.likes > prPoz || b.dislikes < prNeg) {
                console.log(b.title);
            }
        });
    });
};
ispisNaslovaBlogova(users);

////////////////////////////////////////////////////////////////////
//  Zadatak-vremensak prognoza

let dan1 = {
    datum: "2021.12.26",
    kisa: false,
    sunce: false,
    oblacno: true,
    temperatura: [3, 5, 3, 5, 2]
};
let dan2 = {
    datum: "2021.12.20",
    kisa: false,
    sunce: true,
    oblacno: true,
    temperatura: [4, 3, 5, 2, 12]
};
let dan3 = {
    datum: "2021.12.25",
    kisa: true,
    sunce: false,
    oblacno: true,
    temperatura: [-5, -2, -3, -3, 3, 3]
};
let dan4 = {
    datum: "2021.12.23",
    kisa: true,
    sunce: true,
    oblacno: false,
    temperatura: [2, -5, -8]
};

let dani = [dan1, dan2, dan3, dan4];

console.log(`1.Napraviti arrow funkciju koja ispisuje datum u kome je najviše puta izmerena temperatura. Ukoliko ima više takvih datuma: a)Ispisati prvi od njih b)Ispisati poslednji od njih
 `);
let maxMerenje = arr => {
    let max = arr[0].temperatura.length;
    let datum = arr[0].datum;
    arr.forEach(d => {
        if (d.temperatura.length > max) {
            max = d.temperatura.length;
            datum = d.datum;
        }
    });
};
maxMerenje(dani);

console.log(`2. Napraviti arrow funksiju koja prebrojava i ispisuje koliko je bilo kišnih dana, koliko je bilo sunčanih dana i koliko je bilo oblačnih dana`);

let brojDanaVreme = arr => {
    let brk = 0;
    let brs = 0;
    let bro = 0;
    arr.forEach(d => {
        if (d.kisa == true) {
            brk++;
        }
        if (d.sunce == true) {
            brs++;
        }
        if (d.oblacno == true) {
            bro++;
        }
    });
    console.log(`Suncanih dana je bilo ${brs},kisnih ${brk} i oblacnih ${bro}`);
}
brojDanaVreme(dani);

console.log(`3.Napraviti arrow funkciju koja računa i vraća koliko je bilo dana sa natprosečnom temperaturom `);

let prTemp = arr => {
    let br = 0;
    let suma = 0;
    arr.forEach(d => {
        d.temperatura.forEach(t => {
            suma += t;
            br++;
        });
    });
    return (br == 0) ? 0 : suma / br;
};
console.log(prTemp(dani));

let natprosecnaTemp = arr => {
    let brDana = 0;
    let proskTemp = prTemp(arr);
    arr.forEach(d => {
        let br = 0;
        d.temperatura.forEach(t => {
            if (t > proskTemp) {
                br++;
            }
        });
        if (d.temperatura.length == br) {
            brDana++;
        }
    });
    return brDana;
};
console.log(natprosecnaTemp(dani));