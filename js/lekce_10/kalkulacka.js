document.addEventListener("DOMContentLoaded", function() {
    let tlacitko = document.getElementById("tlacitko");
    let cislo1 = document.getElementById("cislo1");
    let cislo2 = document.getElementById("cislo2");

    tlacitko.addEventListener("click", function() {
        alert(parseFloat(cislo1.value) + parseFloat(cislo2.value));
    });
});