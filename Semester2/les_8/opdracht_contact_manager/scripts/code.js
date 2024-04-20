// Definieer een lege lijst om personen op te slaan
let personen = [];

// Event listener voor de "Bewaar" knop
// Sla de wijzigingen in de gebruikersinterface op
const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");
    const isValid = valideer(); // Valideer alle invoergegevens

    // Als de invoer geldig is, sla de gegevens op
    if (isValid) {
        const number = parseInt(document.getElementById("Number").value);

        if (document.getElementById("Next").value === "true") {
            // Nieuwe persoon toevoegen aan de lijst
            const nieuwePersoon = {
                Voornaam: document.getElementById("txtVoornaam").value,
                Achternaam: document.getElementById("txtFamilienaam").value,
                Geboortedatum: document.getElementById("txtGeboorteDatum").value,
                Email: document.getElementById("txtEmail").value,
                AantalKinderen: document.getElementById("txtAantalKinderen").value,
                Number: personen.length,
                Next: "true"
            };
            personen.push(nieuwePersoon);
        } else {
            // Bestaande persoon in de lijst bewerken
            personen[number] = {
                Voornaam: document.getElementById("txtVoornaam").value,
                Achternaam: document.getElementById("txtFamilienaam").value,
                Geboortedatum: document.getElementById("txtGeboorteDatum").value,
                Email: document.getElementById("txtEmail").value,
                AantalKinderen: document.getElementById("txtAantalKinderen").value,
                Number: number,
                Next: "false"
            };
        }

        updateLijst();
    }
};

// Event listener voor de "Nieuw" knop
// Maakt het invoerformulier leeg
const bewerkNieuwePersoon = (index) => {
    console.log("Klik op de knop nieuw");

    // Maak het formulier leeg en vul het met de gegevens van de geselecteerde persoon
    clearAllErrors();
    let persoon = JSON.parse(index);
    document.getElementById("txtVoornaam").value = persoon.Voornaam;
    document.getElementById("txtFamilienaam").value = persoon.Achternaam;
    document.getElementById("txtGeboorteDatum").value = persoon.Geboortedatum;
    document.getElementById("txtEmail").value = persoon.Email;
    document.getElementById("txtAantalKinderen").value = persoon.AantalKinderen;
    document.getElementById("Number").value = persoon.Number;
    document.getElementById("Next").value = "false";
};

// Functie om de lijst met personen in de gebruikersinterface bij te werken
const updateLijst = () => {
    let lijst = document.getElementById("lstPersonen");
    // Wis de bestaande lijst
    while (lijst.hasChildNodes()) {
        lijst.removeChild(lijst.firstChild);
    }
    // Vul de lijst opnieuw met de bijgewerkte gegevens
    for (let i = 0; i < personen.length; i++) {
        let optie = document.createElement("option");
        let tekst = document.createTextNode(personen[i].Voornaam + " " + personen[i].Achternaam);
        optie.appendChild(tekst);
        optie.setAttribute("value", JSON.stringify(personen[i]));
        lijst.appendChild(optie);
    }
};

// Functie om het invoerformulier leeg te maken voor een nieuwe invoer
const nieuwPersoon = () => {
    console.log("Klik op de knop nieuw");
    document.getElementById("txtVoornaam").value = "";
    document.getElementById("txtFamilienaam").value = "";
    document.getElementById("txtGeboorteDatum").value = "";
    document.getElementById("txtEmail").value = "";
    document.getElementById("txtAantalKinderen").value = "";
    document.getElementById("Number").value = personen.length;
    document.getElementById("Next").value = "true";
    clearAllErrors();
};

// Setup functie om de event listeners te registreren bij het laden van de pagina
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", nieuwPersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.addEventListener("change", () => {
        bewerkNieuwePersoon(lstPersonen.value);
    });

    // Verberg de velden Number en Next
    let number = document.getElementById("Number");
    number.style.visibility = "hidden";
    number.value = 0;
    let next = document.getElementById("Next");
    next.style.visibility = "hidden";
    next.value = "true";

    // Voeg een change listener toe aan lstPersonen.
    // Bij het klikken op een option element in de lijst moet de data van die persoon getoond worden in het formulier
};

// Voeg een event listener toe om de setup functie uit te voeren wanneer de pagina geladen is
window.addEventListener("load", setup);
