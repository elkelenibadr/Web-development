const wijzig = () => {
    let pElement = document.getElementById("txtOutput");
    pElement.innerHTML = "Welkom!";
}

const setup = () => {
    let buttonWijzig = document.getElementById('btnWijzig');
    buttonWijzig.addEventListener('click', wijzig);
}
window.addEventListener("load", setup);