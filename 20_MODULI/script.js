// let prezime = "blblblb";

// function zdravo() {
//     return 0;
// }

import { zdravo, ime } from "./moduli/zdravo.js";

// ime="Zdravo"; -nije moguce menjati vrednosti promenljivih iz modula isto kao i redeklarisanje promenljivih;
// let ime = "Glisa"; //-nije moguce imati lokalnu promlj sa istim imenom;
zdravo("Pera");
console.log(ime);