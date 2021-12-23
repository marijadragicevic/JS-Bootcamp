console.log(`OBJEKTI`);

let blog1 = {
    title: "HTML",
    content: "Ovo je blog o osnovnim HTML tagovima",
    author: "Jelena Matejic"
};
console.log(blog1);
console.log(typeof (blog1));

// ispis propertija na dva nacina
console.log(blog1.title);
console.log(blog1["title"]);

// izmene propertija na dva nacina
blog1.title = "Osnove HTML-a";
console.log(blog1);
blog1["author"] = "Jelena M.";
console.log(blog1);

//////////////////////////////////////////////////

// callback ne radi sa return!!!!!!!!!

let user = {
    username: "JM",
    age: "27",
    blogs: ["If naredba grananja", "While petlja", "For petlja"],
    login: function () { //ne moze arrow funkcija ovde
        console.log(`Ulogovani ste`);
    },
    logout: function () {
        console.log(`Izlogovani ste`);
    },
    logblogs: function () {
        console.log(this);
        console.log(this.blogs); // koristimo this kada pristupamo propertiju unutar samog sebe
        this.blogs.forEach(blog => { console.log(blog); });
    }
};

// kada je funkcija u objektu to je metod; kreireti metod je ovo gore

console.log(user);
console.log(user.blogs);
let nasloviBlogova = user.blogs;
for (let i = 0; i < nasloviBlogova.length; i++) {
    document.body.innerHTML += `<h3>${nasloviBlogova[i]}</h3>`;
}

for (let i = 0; i < user.blogs.length; i++) {
    document.body.innerHTML += `<h4>${user.blogs[i]}</h4>`;
}

// poziv metoda

user.login();
user.login();
user.logout();

// poziv metoda koji u sebi sadrzi poziv nekog propertija
//this
user.logblogs();
console.log(this);

// 1.zad

let dan = {
    datum: "2021/12/23",
    kisa: true,
    sunce: false,
    oblacno: true,
    temperatura: [0, 2, -3, 2, 0, -5],
    prosecnaTemp: function () {
        let suma = 0;
        let br = 0;
        dan.temperatura.forEach(temp => {
            suma += temp;
            br++;
        });
        return (br == 0) ? 0 : suma / br;
    },
    natprosecnaTemp: function () {
        let s = this.prosecnaTemp();
        let br = 0;
        this.temperatura.forEach(temp => {
            if (temp > s) {
                br++;
            }
        });
        return br;
    },
    maxTempBroj: function () {
        let max = dan.temperatura[0];
        this.temperatura.forEach(temp => {
            if (max < temp) {
                max = temp;
            }
        });
        let br = 0;
        this.temperatura.forEach(temp => {
            if (max == temp) {
                br++;
            }
        });
        return br;

    },
    brojMerenja: function (n, m) {
        let br = 0;
        this.temperatura.forEach(temp => {
            if (temp > n && temp < m) {
                br++;
            }
        });
        return br;
    },
    vecaTempVeciniDana: function () {
        return this.natprosecnaTemp() > this.temperatura.length / 2;
    },
    ledenDan: function () {
        let br = 0;
        this.temperatura.forEach(temp => {
            if (temp > 0) {
                br++;
            }
        });
        return br == 0;
    },
    leden: function () {
        for (let i = 0; i < this.temperatura.length; i++) {
            if (this.temperatura[i] > 0) {
                return false;
            }
        }
        return true;
    },
    tropskiDan: function () {
        let br = 0;
        this.temperatura.forEach(temp => {
            if (temp < 24) {
                br++;
            }
        });
        return br == 0;
    },
    nepovoljanDan: function () {
        let r = this.temperatura[0];
        let br = 0;
        this.temperatura.forEach(temp => {
            if (r - temp > 8) {
                br++;
                r = temp;
            }
        });
        return br != 0;
    }

};

console.log(dan.prosecnaTemp());
console.log(dan.natprosecnaTemp());
console.log(dan.maxTempBroj());
console.log(dan.brojMerenja(-2, 2));
console.log(dan.vecaTempVeciniDana());
console.log(dan.ledenDan());
console.log(dan.leden());
console.log(dan.tropskiDan());
console.log(dan.nepovoljanDan());
