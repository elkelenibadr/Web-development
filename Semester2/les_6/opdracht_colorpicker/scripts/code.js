const setup = () => {
    let sliders = document.getElementsByClassName("slider");
    let colorSwatch=document.getElementsByClassName("swatch");
    let saveButton = document.getElementById("saveButton");
    saveButton.addEventListener("click", saveSwatch);

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

const saveSwatch = () => {
    let colorSwatchContainer = document.getElementById("savedSwatches");
    let colorSwatch = document.createElement("div");
    colorSwatch.classList.add("swatch");

    let red = document.getElementsByClassName("slider")[0].value;
    let green = document.getElementsByClassName("slider")[1].value;
    let blue = document.getElementsByClassName("slider")[2].value;
    colorSwatch.style.backgroundColor = `rgb(${red},${green},${blue})`;

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.classList.add("delete-button");
    deleteButton.addEventListener("click", () => {
        event.stopPropagation();
        colorSwatchContainer.removeChild(colorSwatch);
    });

    colorSwatch.appendChild(deleteButton);
    colorSwatchContainer.appendChild(colorSwatch);

    colorSwatch.addEventListener("click", () => {
        let rgb = colorSwatch.style.backgroundColor.match(/\d+/g);
        let sliders = document.getElementsByClassName("slider");
        sliders[0].value = rgb[0];
        sliders[1].value = rgb[1];
        sliders[2].value = rgb[2];
        update();
    });
};

// dit is de eerste regel code die uitgevoerd wordt,
// de bovenstaande functie declaraties introduceren
// enkel de functies en voeren ze niet uit natuurlijk.
//
// Onderstaande zorgt ervoor dat de setup functie wordt
// uitgevoerd zodra de DOM-tree klaar is.
window.addEventListener("load", setup);