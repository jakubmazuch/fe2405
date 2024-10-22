'use strict';
function vypisProm() {
    console.table({
        "a": a,
        "b": b,
        "u": u,
        "v": v
    });
}
function zkouska(y) {
    console.log(y);
}

let a = 35;
let b = 45;
let u = new Uzivatel('Petr Procházka', 28);
let v = new Uzivatel('Jana Nováková', 32);

vypisProm();

// Změna
a = b;
u = v;

vypisProm();

v.jmeno = 'Pavel Krupička';
u = null

vypisProm();

let w
console.log(w);
zkouska();