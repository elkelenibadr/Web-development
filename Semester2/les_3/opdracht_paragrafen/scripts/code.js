const setup = () => {
    const belangrijkeParagrafen = document.querySelectorAll(".belangrijk");
    belangrijkeParagrafen.forEach((paragraaf) => {
        paragraaf.classList.add("opvallend");
    });
};

document.addEventListener("DOMContentLoaded", setup);
