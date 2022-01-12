function generateImgScr(src) {
    let img = document.createElement("img");
    img.src = src;
    img.style.width = "200px"
    return img;
}

// export { generateImgScr };
export default generateImgScr;
// export default - modul moze da ima i difoltni kanal odnsono da exportuje vise stvari i da ima dodatni export default za jednu stavku(samo 1 stvar);odnsono da ima 2 exporta
// mogli smo i na pocetku da stavimo export default function(){...} ili promenljiva ili klasa