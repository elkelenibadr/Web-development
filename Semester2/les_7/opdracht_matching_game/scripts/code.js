let global = {
    AANTAL_HORIZONTAAL: 4,
    AANTAL_VERTICAAL: 3,
    AANTAL_KAARTEN: 6,
    lijstImages: ["images/kaart1.png","images/kaart2.png","images/kaart3.png","images/kaart4.png","images/kaart5.png","images/kaart6.png"],
    lijst: [],
    lijstVoorkanten: []
};

const setup = () => {
    let alleKaarten = document.getElementById("alleKaarten");

    alleKaarten.style.display = "grid";
    alleKaarten.style.gridTemplateColumns="repeat(" + global.AANTAL_HORIZONTAAL + ",165px)";
    alleKaarten.style.gridTemplateRows="repeat(" + global.AANTAL_VERTICAAL + ",220px)";
    alleKaarten.style.padding = "10px";
    alleKaarten.style.width = "640px";
    alleKaarten.style.height = "620px";
    alleKaarten.style.border = "5px dashed black";

    global.lijst = alleKaarten.querySelectorAll("img")
    for (let i = 0; i < global.lijst.length; i++) {
        global.lijst[i].setAttribute("src", "images/achterkant.png");
    }

    let teller = 0

    while(teller < 12)
    {
        let getal = Math.round(Math.random()*5);
        let counter = 0;

        for (let i = 0; i < global.lijstVoorkanten.length; i++) {
            if (global.lijstVoorkanten[i] === global.lijstImages[getal]) {
                counter++;
            }
        }

        if (counter < 2) {
            global.lijstVoorkanten[teller] = global.lijstImages[getal];
            teller++;
        }
    }

    for (let i = 0; i < global.lijst.length; i++) {
        global.lijst[i].addEventListener("click", () => {
            handleClick(i);
        });
    }
}

const handleClick = (getal) =>
{
    global.lijst[getal].setAttribute("src", global.lijstVoorkanten[getal]);

    let kaarten = [];

    for (let i = 0; i < global.lijstVoorkanten.length; i++) {
        if(global.lijst[i].getAttribute("src") !== "images/achterkant.png") {
            kaarten.push(i);
        }
    }

    if(kaarten.length > 1) {
        let alleKaarten = document.getElementById("alleKaarten");

        if (global.lijstVoorkanten[kaarten[0]] === global.lijstVoorkanten[kaarten[1]]) {
            alleKaarten.style.border = "5px dashed green";

            setTimeout(() => {
                for (let i = 0; i < 2; i++) {
                    global.lijst[kaarten[i]].setAttribute("src", "images/achterkant.png");
                    global.lijst[kaarten[i]].style.visibility = 'hidden';
                }
                alleKaarten.style.border = "5px dashed black";
            }, 1000);
        } else {
            alleKaarten.style.border= "5px dashed red";
            setTimeout(() => {
                global.lijst[kaarten[0]].setAttribute("src", "images/achterkant.png")
                global.lijst[kaarten[1]].setAttribute("src", "images/achterkant.png")
                alleKaarten.style.border= "5px dashed black";
            },1000);
        }
    }

    setTimeout(() => {
        let hiddenCardsCount = 0;

        for (let i = 0; i < global.lijst.length; i++) {
            let style = window.getComputedStyle(global.lijst[i]);
            if (style.getPropertyValue("visibility") === "hidden") {
                hiddenCardsCount++;
            }
        }

        if (hiddenCardsCount === global.lijst.length) {
            window.alert("Je hebt gewonnen!");
        }
    }, 1000);
}
window.addEventListener("load", setup);