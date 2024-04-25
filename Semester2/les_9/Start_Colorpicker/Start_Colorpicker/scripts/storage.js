let allSwatches = [];
let sliderValues = [];

const storeSliderValues = () => {
    let colors = {
        red: document.getElementById("lblRed").textContent,
        green: document.getElementById("lblGreen").textContent,
        blue: document.getElementById("lblBlue").textContent
    };

    sliderValues.push(colors);
    localStorage.setItem("sliderValues", JSON.stringify(sliderValues));
};

const restoreSliderValues = () => {
    let slidervalues = JSON.parse(localStorage.getItem("sliderValues"));
    if (slidervalues && slidervalues.length > 0) {
        let slider = slidervalues[0];
        document.getElementById("sldRed").value = slider.red;
        document.getElementById("sldGreen").value = slider.green;
        document.getElementById("sldBlue").value = slider.blue;
    }
};

const storeSwatches = () => {
// bouw een array met kleurinfo objecten
    let colors = {
        red: document.getElementById("sldRed").value,
        green: document.getElementById("sldGreen").value,
        blue: document.getElementById("sldBlue").value
    };

    allSwatches.push(colors);
    localStorage.setItem("swatches", JSON.stringify(allSwatches));
};

const restoreSwatches = () => {
    let swatches = JSON.parse(localStorage.getItem("swatches"));
    if (swatches) {
        for (let i = 0; i < swatches.length; i++) {
            let color = swatches[i];
            addSwatchComponent(color.red, color.green, color.blue);
        }
    }
};
