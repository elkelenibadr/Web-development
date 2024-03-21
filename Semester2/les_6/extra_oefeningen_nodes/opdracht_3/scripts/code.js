const setup = () => {
    const button = document.getElementById("button");
    button.addEventListener("click", newParagraph);
};

const newParagraph = () => {
    const paragraph = document.createElement("p");
    paragraph.textContent = "This is a new paragraph.";

    const div = document.getElementById("myDIV");
    div.appendChild(paragraph);
}

window.addEventListener("load", setup);