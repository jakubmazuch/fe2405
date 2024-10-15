'use strict';

class Kruh {
    constructor(prumer) {
        this.prumer = prumer;
    }
    obsah() {
        return Math.PI * Math.pow((this.prumer / 2), 2);
    }

}