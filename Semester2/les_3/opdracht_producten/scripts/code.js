const setup = () => {
    const btnHerberekenen = document.getElementById("btnHerberekenen");
    btnHerberekenen.addEventListener('click', berekenen);
}

const berekenen = () => {
    const collectionPrijs = document.getElementsByClassName("prijs");
    const collectionAantal = document.getElementsByClassName("aantal");
    const collectionBtw = document.getElementsByClassName("btw");
    const collectionSubtotaal = document.getElementsByClassName("subtotaal");
    const eindTotaal = document.getElementById("eindtotaal");

    let eindtotaal = 0;

    for (let i = 0; i < collectionPrijs.length; i++) {
        let prijs = parseFloat(collectionPrijs[i].textContent);
        let aantal = parseFloat(collectionAantal[i].value);
        let btwTarief = parseInt(collectionBtw[i].textContent);

        let subtotaal = prijs * aantal * (1 + (btwTarief / 100));
        subtotaal = subtotaal.toFixed(2);

        eindtotaal += parseFloat(subtotaal);

        collectionSubtotaal[i].innerHTML = subtotaal + " EUR";
    }

    eindTotaal.innerHTML = eindtotaal.toFixed(2) + " EUR";
}

window.addEventListener("load", setup);