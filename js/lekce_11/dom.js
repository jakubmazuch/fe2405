document.addEventListener("DOMContentLoaded", function() {
    let form = document.querySelector("form");
    console.log(form.parentElement);

    // vložení elementu za jiný element
    let odstavec = document.createElement("p");
    odstavec.textContent = "Odstavec 2";
    document.body.appendChild(odstavec);

    // vložení elementu před jiný element
    let nadpis = document.createElement("h1");
    nadpis.textContent = "Ahoj Plzeň!"

    let elementPred = document.getElementById("prvni");
    document.body.insertBefore(nadpis, elementPred);

    // nahrazení
    let novyOdstavec = document.createElement("p");
    let tucny = document.createElement("strong");
    tucny.textContent = "Tady formulář již není. Utekl nám :(((";
    tucny.style.color = "red";

    novyOdstavec.appendChild(tucny);

    document.body.replaceChild(novyOdstavec, form);

    // mazání
    let mazuOdstavec = document.getElementById("treti");
    mazuOdstavec.remove();
})