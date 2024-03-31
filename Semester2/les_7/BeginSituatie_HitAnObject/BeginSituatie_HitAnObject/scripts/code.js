const global = {
    IMAGE_COUNT: 5,  // aantal figuren
    IMAGE_SIZE: 48, // grootte van de figuur
    IMAGE_PATH_PREFIX: "images/",  // map van de figuren
    IMAGE_PATH_SUFFIX: ".png",  // extensie van de figuren
    MOVE_DELAY: 3000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
    score: 0,    // aantal hits
    timeoutId: 0 // id van de timeout timer, zodat we die kunnen annuleren
};

const setup = () => {
    const startButton = document.getElementById("startButton");
    startButton.addEventListener("click", startGame);

    let target = document.getElementById("target");
    let newNumber = Math.random() * 4;
    target.setAttribute("src", global.IMAGE_PATH_PREFIX + Math.round(newNumber) + global.IMAGE_PATH_SUFFIX);
};

const startGame = () => {
    const startButton = document.getElementById("startButton");
    startButton.remove();

    const target = document.getElementById("target");
    placeImageRandomly(target);

    cycleImage();
};

const cycleImage = () => {
    const target = document.getElementById("target");
    if (target.getAttribute("src") === global.IMAGE_PATH_PREFIX + "0" + global.IMAGE_PATH_SUFFIX) {
        global.timeoutId = setTimeout(cycleImage, global.MOVE_DELAY);
        placeImageRandomly(target);
    } else {
        global.timeoutId = setTimeout(cycleImage, global.MOVE_DELAY);
        target.addEventListener("click", handleImageClick);
    }
};

const placeImageRandomly = (imageElement) => {
    const randomImageNumber = Math.floor(Math.random() * global.IMAGE_COUNT);
    const randomX = Math.floor(Math.random() * (600 - global.IMAGE_SIZE));
    const randomY = Math.floor(Math.random() * (800 - global.IMAGE_SIZE));
    imageElement.setAttribute("src", global.IMAGE_PATH_PREFIX + randomImageNumber + global.IMAGE_PATH_SUFFIX);
    imageElement.style.left = `${randomX}px`;
    imageElement.style.top = `${randomY}px`;
};

const handleImageClick = () => {
    const target = document.getElementById("target");
    if (target.getAttribute("src") !== global.IMAGE_PATH_PREFIX + "0" + global.IMAGE_PATH_SUFFIX) {
        global.score += 1;
        const counter = document.getElementById("hits");
        counter.textContent = global.score;

        clearInterval(global.timeoutId);
        global.timeoutId = setInterval(() => {
            const target = document.getElementById("target");
            placeImageRandomly(target);
        }, global.MOVE_DELAY);
        placeImageRandomly(target);
    } else {
        window.alert("GAME OVER");
        clearInterval(global.timeoutId);
    }
};

window.addEventListener("load", setup);
