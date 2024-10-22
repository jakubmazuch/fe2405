'use strict';

class Firma {

    constructor(nazev, ic, sidlo) {
        this.nazev = nazev;
        this.ic = ic;
        this.sidlo = sidlo;
        this.zamestanci = [];
        
    }

    vypisInfoOFirme() {
        document.write(`Firma ${this.nazev} sídlí v ${this.sidlo}.<br>`);
    }

    pridejZamestnance() {
        const jmeno = prompt("Zadej jméno zaměstanace: ");
        const vek = prompt("Zadej věk zaměstanace: ");
        const pozice = prompt("Zadej pozici zaměstanace: ");

        const zamestnanec = new Zamestnanec(jmeno, vek, pozice);
        this.zamestanci.push(zamestnanec);
    }

    vypisZamestnancu() {
        document.write("<h3>Zaměstnanci</h3>");
        const seznam = document.createElement("ul");
        for (const zamestnanec of this.zamestanci) {
            seznam.innerHTML += `<li><strong>Jméno: </strong>${zamestnanec.jmeno}</li>`;
            seznam.innerHTML += `<li><strong>Věk: </strong>${zamestnanec.vek}</li>`;
            seznam.innerHTML += `<li><strong>Pozice: </strong>${zamestnanec.pozice}</li>`;
        }
        document.body.appendChild(seznam);
    }
}