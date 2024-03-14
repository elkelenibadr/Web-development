const setup = () => {
    const toonResultaatButton = document.getElementById("toonResultaatButton");
    toonResultaatButton.addEventListener("click", toonResultaat);
};

const toonResultaat = () => {
    const isRokerCheckbox = document.getElementById("isRoker");
    let isRoker;
    if (isRokerCheckbox.checked) {
        isRoker = 'is roker';
    } else {
        isRoker = 'is geen roker';
    }

    const moedertaalInputs = document.getElementsByName("moedertaal");
    let moedertaal;
    for (const input of moedertaalInputs) {
        if (input.checked) {
            moedertaal = 'moedertaal is ' + input.value;
            break;
        }
    }

    const favorieteBuurland = 'favoriete buurland is ' + document.getElementById("favBuurland").value;
    const bestellingOptions = document.getElementById("bestelling").selectedOptions;
    const bestellingItems = [];

    for (const option of bestellingOptions) {
        bestellingItems.push(option.value);
    }
    const bestelling = 'bestelling bestaat uit ' + bestellingItems.join(' ');

    console.log(isRoker);
    console.log(moedertaal);
    console.log(favorieteBuurland);
    console.log(bestelling);
};

window.addEventListener("load", setup);
