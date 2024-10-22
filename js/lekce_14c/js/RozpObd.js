'use strict';

class RozpObd {
    constructor() {
        this.jaro = "Astronomické jaro začíná ...";
        this.leto = "Astronomické léto začíná ...";
        this.podzim = "Astronomický podzim začíná ...";
        this.zima = "Astronomická zima začíná ...";
    }

    zjisti() {
        const datum = new Date();
        const den = datum.getDate();
        const mesic = datum.getMonth() + 1;
        switch (mesic) {
            case 1:
            case 2:
                document.write(this.zima);
                break;
            case 3:
                if (den < 21) document.write(this.zima);
                else document.write(this.jaro);
                break;
            case 4:
            case 5:
                document.write(this.jaro);
                break;
            case 6:
                if (den < 21) document.write(this.jaro);
                else document.write(this.leto);
                break;
            case 7:
            case 8:
                document.write(this.leto);
                break;
            case 9:
                if (den < 21) document.write(this.leto);
                else document.write(this.podzim);
                break;
            case 10:
            case 11:
                document.write(this.podzim);
                break;
            case 12:
                if (den < 21) document.write(this.podzim);
                else document.write(this.zima);
                break;
        }
    }
}