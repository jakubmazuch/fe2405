'use strict';
class Uzivatel {
    constructor(jmeno, vek) {
        this.jmeno = jmeno;
        this.vek = vek;
    }

    vratUzivatele() {
        return `Uživatel ${this.jmeno} je ve věku ${this.vek} let.`;
    }
}