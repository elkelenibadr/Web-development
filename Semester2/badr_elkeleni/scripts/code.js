const setup = () => {
    document.getElementById('geefLetter').addEventListener('input', letter);
    document.getElementById('staatKip').addEventListener('input', metEnZonderEi);
    document.getElementById('img').addEventListener('input', metEnZonderEi);
    document.getElementById('note').addEventListener('input', countLetter);
}

const letter = (event) => {
    let inputValue = event.target.value;
    let echteValue = inputValue.replace(/[^a-zA-Z]/g, '');
    event.target.value = echteValue;
};

const metEnZonderEi = () => {
    const selectElement = document.getElementById("staatKip");
    const imgElement = document.getElementById("img");
    const noteElement = document.getElementById("note");
    const selectedValue = selectElement.value;

    if (selectedValue === "metEi") {
        imgElement.setAttribute("src", "with-egg.png");
        imgElement.setAttribute("alt", "Kip met ei");
        noteElement.textContent = "Hierboven, een kip met een ei";
    } else if (selectedValue === "zonderEi") {
        imgElement.setAttribute("src", "without-egg.png");
        imgElement.setAttribute("alt", "Kip zonder ei");
        noteElement.textContent = "Hierboven, een kip zonder een ei";
    }

    imgElement.parentElement.classList.remove("hidden");
}

const countLetter = () => {
    const letterInput = document.getElementById("geefLetter");
    const letter = letterInput.value.toLowerCase();
    const noteElement = document.getElementById("note");
    const text = noteElement.textContent.toLowerCase();
    const count = (text.match(new RegExp(letter, "g")) || []).length;

    if (letter.length === 1 && letter.match(/[a-z]/i)) {
        noteElement.textContent += `\n Letter '${letter}' komt ${count} keer voor in bovenstaande zin.`;
    }
}

window.addEventListener("load", setup);