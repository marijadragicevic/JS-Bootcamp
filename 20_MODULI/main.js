/* 
 Prvi nacin za preimenovanje stavki sa istim imenom u importu;
 koristimo AS
 za preimenovanje stavki iz importa ili exporta;vise se koristi kod importa ;koristi se kada imamo iste nazive funkcija ili drugih stavki i hocemo da preimenujemo;
 ovo se koristi kada imamo jednu stavku za preimenovanje */

/*import { generateList, generateItem as generateListItem } from "./img gallery/lista.js";
import { generateTable, generateTableRow, generateItem as generateTableItem } from "./img gallery/table.js";
let lista = generateList(document.body);
generateListItem(lista, "../06_RESPONSIVE/img/slika1.jpg");
generateListItem(lista, "../06_RESPONSIVE/img/slika2.jpg");
generateListItem(lista, "../06_RESPONSIVE/img/slika3.jpg");

let tabela = generateTable(document.body);
let tr = generateTableRow(tabela);
generateTableItem(tr, "../06_RESPONSIVE/img/slika1.jpg");
generateTableItem(tr, "../06_RESPONSIVE/img/slika2.jpg");
generateTableItem(tr, "../06_RESPONSIVE/img/slika3.jpg");
*/

///////////////////////////////////////////////////////////////////////

// Drugi nacin za preimenovanje stavki sa istim imenom;
// MODUL OBJEKTA
// ima siru primenu; kreiranjem modula objekta i exportujemo sve iz modula
//  * za importovanje svih stavki 

import * as List from "./modules/lista.js"
import * as Table from "./modules/table.js";

console.log(List); // mozemo da vidimo sta nas objekat modul sadrzi

let list = List.generateList(document.body);
List.generateItem(list, "../06_RESPONSIVE/img/slika1.jpg");
List.generateItem(list, "../06_RESPONSIVE/img/slika2.jpg");
List.generateItem(list, "../06_RESPONSIVE/img/slika3.jpg");

let table = Table.generateTable(document.body);
let tr = Table.generateTableRow(table);
Table.generateItem(tr, "../06_RESPONSIVE/img/slika1.jpg");
Table.generateItem(tr, "../06_RESPONSIVE/img/slika2.jpg");
Table.generateItem(tr, "../06_RESPONSIVE/img/slika3.jpg");
