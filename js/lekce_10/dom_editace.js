document.addEventListener("DOMContentLoaded", function() {
    let odstavec = document.getElementsByClassName("zvyraznovac");
    
    for (let i=0; i < odstavec.length; i++) {
        odstavec[i].innerHTML = "<strong>Jiný<br>text!</strong>";
        console.log(odstavec[1].innerText);
        console.log(odstavec[2].textContent);
    }

    let element = document.querySelector("#heslo");
    element.setAttribute("required", "")
    console.log(element.hasAttribute("required"));
});