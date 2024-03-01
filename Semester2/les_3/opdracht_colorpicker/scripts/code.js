const setup = () => {
    let sliders = document.getElementsByClassName("slider");
    let colorSwatch=document.getElementsByClassName("swatch");

    let red = sliders[0].value;
    let green = sliders[1].value;
    let blue = sliders[2].value;

    let valRed = document.getElementById("valRed");
    let valGreen = document.getElementById("valGreen");
    let valBlue = document.getElementById("valBlue");

    valRed.innerHTML = red;
    valGreen.innerHTML = green;
    valBlue.innerHTML = blue;

    colorSwatch[0].style.backgroundColor = `rgb(${red},${green},${blue})`;

    // we moeten zowel op het input als het change event reageren,
    // zie http://stackoverflow.com/questions/18544890
    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input", update);
    }
}

const update = () => {
    let sliders = document.getElementsByClassName("slider");
    let colorSwatch=document.getElementsByClassName("swatch");
    let valRed = document.getElementById("valRed");
    let valGreen = document.getElementById("valGreen");
    let valBlue = document.getElementById("valBlue");

    let red = sliders[0].value;
    let green = sliders[1].value;
    let blue = sliders[2].value;

    valRed.innerHTML = red;
    valGreen.innerHTML = green;
    valBlue.innerHTML = blue;

    colorSwatch[0].style.backgroundColor = `rgb(${red},${green},${blue})`;
}

// dit is de eerste regel code die uitgevoerd wordt,
// de bovenstaande functie declaraties introduceren
// enkel de functies en voeren ze niet uit natuurlijk.
//
// Onderstaande zorgt ervoor dat de setup functie wordt
// uitgevoerd zodra de DOM-tree klaar is.
window.addEventListener("load", setup);