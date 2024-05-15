let global = {
    woorden: ["vives", "hotel", "stoel", "rommel", "vogel"],
    teRadenWoord: [],
    highscores: [],
};

const setup = () => {
    let gok = document.getElementById("gok");
    let goButton = document.getElementById("go");

    gok.disabled = true;
    goButton.disabled = true;

    getElements().nieuwspel.addEventListener("click", () => {
        naamIngeven();
    });

    highscoresWeergeven();
};

const getElements = () => ({
    button: document.getElementById("clear"),
    nieuwspel: document.getElementById("nieuw"),
    helpHidden: document.getElementsByClassName("help hidden"),
    gokken: document.getElementById("gokken"),
    game: document.getElementById("game")
});

const naamIngeven = () => {
    const input = prompt("Naam speler:");
    naamToevoegen(input);
    if(input === "") {
        window.stop();
    }
};

const woordIngeven = () => {
    let goButton = document.getElementById("go");
    let gok = document.getElementById("gok");

    goButton.addEventListener("click", () => {
          if(gok.index === 4) {
              let groteDiv = document.createElement("div");

              let div1 = document.createElement("div");
              let div2 = document.createElement("div");
              let div3 = document.createElement("div");
              let div4 = document.createElement("div");
              let div5 = document.createElement("div");
          }
      });
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