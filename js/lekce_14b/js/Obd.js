'use strict';

class Obd {
    constructor(sirka, vyska) {
        this.sirka = sirka;
        this.vyska = vyska;
    }
    obsah() {
        return this.vyska * this.sirka;
    }
}