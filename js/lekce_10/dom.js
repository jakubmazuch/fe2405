document.addEventListener("DOMContentLoaded", function() {
    // Výběr elementů
    let zvyraznene = document.getElementsByClassName("zvyraznovac");
    for (let i = 0; i < zvyraznene.length; i++) {
        console.log(zvyraznene[i]);
    }

    let odstavce = document.getElementsByTagName("p");
    for (let i = 0; i < odstavce.length; i++) {
        console.log(odstavce[i]);
    }

})