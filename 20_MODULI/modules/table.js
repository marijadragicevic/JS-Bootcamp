import generateImgScr from "./general.js";

function generateTable(parent) {
    let table = document.createElement("table");
    table.style.border = "0";
    parent.appendChild(table);
    return table;
}

function generateTableRow(parent) {
    let tr = document.createElement("tr");
    parent.appendChild(tr);
    return tr;
}

function generateItem(parent, src) {
    let td = document.createElement("td");
    let img = generateImgScr(src);
    td.appendChild(img);
    parent.appendChild(td);
}

export { generateTable, generateTableRow, generateItem };