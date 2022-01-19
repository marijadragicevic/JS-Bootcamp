let li = document.querySelectorAll("li");

li.forEach(element => {
    element.addEventListener("click", () => {
        if (element.style.textDecoration == "line-through") {
            element.style.textDecoration = "none";
            element.style.backgroundColor = "rgb(3, 137, 247)";
        }
        else {
            element.style.textDecoration = "line-through";
            element.style.backgroundColor = "rgb(7, 115, 204)";
        }

        // 2.nacin
        // element.classList.toggle("lineThrough");
        // moramo da dodamo lineThrough klasu i css i preko toggle postavljmao klasu ukoliko je ima i sklanjamo ukoliko je nema
        // .lineTrough {
        //     text-decoration:line-trough;
        //     // u style.css
        // }

    });
});