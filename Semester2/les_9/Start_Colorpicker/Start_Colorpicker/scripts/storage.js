

const storeSliderValues = (red, green, blue) => {
    localStorage.setItem("SliderValues", JSON.stringify(red, green, blue));
};

const restoreSliderValues = (red, green, blue) => {
    let slidervalues = JSON.parse(localStorage.getItem("SliderValues"));
    if(slidervalues){
        document.getElementById("sldRed").value = slidervalues.red;
        document.getElementById("sldGreen").value = slidervalues.green;
        document.getElementById("sldBlue").value = slidervalues.blue;
    }
};

const storeSwatches = () => {
// bouw een array met kleurinfo objecten
    let swatches = document.querySelectorAll(".swatch");
    let swatchData = [];
    for(let i = 0; i < swatches.length; i++){

    }
};

const restoreSwatches = () => {

};

