document.addEventListener("DOMContentLoaded", function () {
    let tlacitko = document.getElementById("tlacitko");
    let zaklad = document.getElementById("zaklad");
    let exp = document.getElementById("exp");
    let vysledek = document.getElementById("vysledek");

    tlacitko.addEventListener("click", function () {
        let zakladFloat = parseFloat(zaklad.value);
        let expFloat = parseFloat(exp.value);

        if (isNaN(zakladFloat) || isNaN(expFloat) || expFloat < -100 || expFloat > 100) {
            vysledek.textContent = "Jsi blázen. To neumím."
        }
        else {
            let mocnina = Math.pow(zakladFloat, expFloat);
            vysledek.textContent = "Výsledek: " + mocnina;
        }
    })
})