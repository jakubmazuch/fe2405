'use strict';

class Clovek {
    constructor(jmeno) {
        this.jmeno = jmeno;
    }
    pozdrav() {
        document.write(`Čau. Já jsem ${this.jmeno}.`); 
    }
}