let global = {
    woorden: ["vives", "hotel", "stoel", "rommel", "vogel"],
    teRadenWoord: "",
    highscores: [],
    aantalPogingen: 0,
    counter: 0
};

const setup = () => {
    let gok = document.getElementById("gok");
    let goButton = document.getElementById("go");
    let nieuwspel = document.getElementById("nieuw");

    gok.disabled = true;
    goButton.disabled = true;

    nieuwspel.addEventListener("click", naamIngeven);

    highscoresWeergeven();
};

const getElements = () => ({
    button: document.getElementById("clear"),
    helpHidden: document.getElementsByClassName("help hidden"),
    game: document.getElementById("game")
});

const naamIngeven = () => {
    const input = prompt("Naam speler:");
    naamToevoegen(input);

    let gok = document.getElementById("gok");
    let goButton = document.getElementById("go");

    gok.disabled = false;
    goButton.disabled = false;

    if(input === "") {
        window.stop();
    }
};

const woordIngeven = () => {
    let gok = document.getElementById("gok");

    if(gok.value.length !==5) {
        return;
    }

    let outer = document.createElement('div');

    for(let i = 0; i < 5; i++) {
        if(global.teRadenWoord.charAt(i) === gok.value.charAt(i)) {
            let inner = document.createElement('div');
            inner.classList.add('juist');
            inner.innerText = gok.value.charAt(i);
            outer.appendChild(inner);
            global.counter++;
        }
        else if(global.teRadenWoord.indexOf(gok.value.charAt(i))) {
            let inner = document.createElement('div');
            inner.classList.add('bevat');
            inner.innerText = gok.value.charAt(i);
            outer.appendChild(inner);
            global.counter++;
        }
        else {
            let inner = document.createElement('div');
            inner.classList.add('fout');
            inner.innerText = gok.value.charAt(i);
            outer.appendChild(inner);
            global.counter++;
        }
    }
};

const DatumBerekenen = () => {
    let maanden = ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"];
    let string = "";
};

const naamToevoegen = (naam) => {
    global.highscores.push(naam);
};

const highscoresWeergeven = () => {
    let highscore = document.getElementById("highscores");
    let sortedHighscores = global.highscores.sort();
    for (let i = 0; i < sortedHighscores.length; i++) {
        highscore.text = sortedHighscores[i];
    }
};

window.addEventListener("load", setup);