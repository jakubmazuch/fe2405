let dnyVTydnu = ["po", "út", "st", "čt", "pá", "so", "ne"];

function vytvorKalendar() {
    let tabulka = document.createElement("table");
    tabulka.appendChild(pripravHlavicku());
    let tr = document.createElement("tr");
    let obsahTabulky = document.createElement("tbody");
    tabulka.appendChild(obsahTabulky);

    let dnes = new Date();
    let aktualniRok = dnes.getFullYear();  // 2024
    let aktualniMesic = dnes.getMonth();  // 10
    let prvniDenVMesici = new Date(aktualniRok, aktualniMesic, 1); // 1.10.2024

    // přeskakujeme dny v prvním týdnu měsíce (1.10.24 je úterý - pondělí přeskakujeme)
    let den = prvniDenVMesici.getDay();
    if (den == 0) {
        den = 7;
    }
    let preskocitDniVPredchomMesici = den - 1;
    let pocetDniVMesici = new Date(aktualniRok, aktualniMesic + 1, 0).getDate();
    let pocetGenerovanychBunek = pocetDniVMesici + preskocitDniVPredchomMesici; // počet generovyných buněk

    for (let i = 0; i < pocetGenerovanychBunek; i++) {
        let td = document.createElement("td");

        // prvni zkracený týden
        if (i >= preskocitDniVPredchomMesici) {
            td.textContent = i - preskocitDniVPredchomMesici + 1;
        }
        tr.appendChild(td);

        // generovat nový týden
        if ((i + 1) % 7 == 0) {
            obsahTabulky.appendChild(tr);
            tr = document.createElement("tr");
        }
    }
    // zbytek měsíce doplníme buňky
    for (i = 0; i < 7 - (pocetGenerovanychBunek % 7); i++) {
        tr.appendChild(document.createElement("td"));
    }
    obsahTabulky.appendChild(tr);
    document.body.appendChild(tabulka);

}
function pripravHlavicku () {
    let hlavicka = document.createElement("thead");
    let tr = document.createElement("tr");
    for (let i = 0; i < dnyVTydnu.length; i++) {
        let td = document.createElement("td");
        td.innerHTML = dnyVTydnu[i];
        tr.appendChild(td);
    }
    hlavicka.appendChild(tr);
    return hlavicka;
}

window.onload = vytvorKalendar;