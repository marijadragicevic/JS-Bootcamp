// let btn = document.querySelector("input[type='submit'");
let inputText = document.querySelector("input[type='text'");
let ul = document.querySelector("ul");

// btn.addEventListener
inputText.addEventListener("keyup", (e) => {
    // keydown,keypress
    e.preventDefault();
    console.log(e.key, e.keyCode); // kluc za enter je 13- ovo je keyCode, key je simbol
    //if (e.keyCode == 13) ili
    if (e.key == "Enter") {
        let inputTextValue = inputText.value;
        inputTextValue = inputTextValue.trim();
        if (inputTextValue == "" || inputTextValue == null) {
            alert("Morate uneti tekst zadatka");
        }
        else {
            let li = document.createElement("li");
            li.innerHTML = inputTextValue; // li.textContent=inputTextValue;

            let radio = document.querySelector("input[name='dodaj']:checked");
            // console.log(radio.value, radio.id,radio.checked);
            if (radio.value == "pocetak") {
                ul.prepend(li);     // dodavanje na pocetak ul
            }
            else {
                ul.appendChild(li); //  dodavanje na kraj ul
            }
            // isprazniti input polje ne moze inputTextValue zato sto to pamti gore vrednost 
            // ne pristupa input polju,zato pisemo inputText.value;
            // pomocu reset isto
            inputText.value = ""; // isprazni input polje nakon dodavanja el u ul

        }
    }

});

ul.addEventListener("click", (e) => {
    // console.log("Kliknuto na ul");
    // console.log(e.target); // vraca ceo tag i njegovu decu
    // console.log(e.target.tagName); // vraca samo ime taga na koji je klinkuto; VElikim slovima je napisano ime taga
    if (e.target.tagName == "LI") {
        // console.log('klikuto na li');
        e.target.remove();
    }
});
// trim

let tekst = "     sd   sff fs           fssfsf";
console.log(tekst);
console.log(tekst.trim());  // .trim() funkcija sklanja praznine sa pocetka i kraja stringa
tekst = "                ";
console.log(tekst);
console.log(tekst.trim());



