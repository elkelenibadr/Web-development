const setup = () => {
    const input = prompt("Gemeente:");
    if (input.toLowerCase() === "stop") {
        displayGemeenten();
    } else {
        addGemeente(input);
        setup();
    }
}

const gemeenten = [];

const addGemeente = (gemeente) => {
    gemeenten.push(gemeente);
}

const displayGemeenten = () => {
    const sortedGemeenten = gemeenten.sort();
    const dropdown = document.getElementById("gemeenten");
    for (let i = 0; i < sortedGemeenten.length; i++) {
        const option = document.createElement("option");
        option.text = sortedGemeenten[i];
        dropdown.add(option);
    }
}

window.addEventListener("load", setup);