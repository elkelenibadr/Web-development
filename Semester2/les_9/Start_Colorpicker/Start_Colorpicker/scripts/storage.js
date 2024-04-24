let allSwatches = [];
let sliderValues = [];
const storeSliderValues = () => {
    sliderValues[sliderValues.length] = {
        red: document.getElementById("lblRed").textContent,
        green: document.getElementById("lblGreen").textContent,
        blue: document.getElementById("lblBlue").textContent
    };
    localStorage.setItem("sliderValues", JSON.stringify(sliderValues));
};

const restoreSliderValues = (red, green, blue) => {
    let slidervalues = JSON.parse(localStorage.getItem("SliderValues"));
    if(slidervalues){
        document.getElementById("sldRed").value = slidervalues.red;
        document.getElementById("sldBlue").value = slidervalues.blue;
    }
};

const storeSwatches = () => {
// bouw een array met kleurinfo objecten
    let swatches = document.querySelectorAll(".swatch");
    for(let i = 0; i < swatches.length; i++){
        configureSwatch();
    }
    localStorage.setItem("swatchData", JSON.stringify(allSwatches));
};

const restoreSwatches = () => {
    let swatchData = JSON.parse(localStorage.getItem("allSwatches"));
    if(swatchData){
        for(let i = 0; i < swatchData.length; i++){
            addSwatchComponent(swatchData[i].red, swatchData[i].green, swatchData[i].blue)
        }
    }
};

