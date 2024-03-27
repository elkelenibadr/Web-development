let global = {
    IMAGE_COUNT: 5, // aantal figuren
    IMAGE_SIZE: 48, // grootte van de figuur
    IMAGE_PATH_PREFIX: "images/", // map van de figuren
    IMAGE_PATH_SUFFIX: ".png", // extensie van de figuren
    MOVE_DELAY: 3000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
    score: 0, // aantal hits
    timeoutId: 0 // id van de timeout timer, zodat we die kunnen annuleren
};

const handleTargetClick = () => {
    const target = document.getElementById("target");
    const isBomb = target.classList.contains("bom");

    if (isBomb) {
        alert("GAME OVER");
        global.score = 0;
        clearInterval(global.timeoutId);
    } else {
        global.score++;
        document.getElementById("hits").textContent = `Aantal hits ${global.score}`;
        moveImageToRandomPosition();
        replaceImage();
    }
};

const setup = () => {
    const startButton = document.getElementById("startButton");
    startButton.addEventListener("click", startGame);
    document.getElementById("hits").textContent = `Aantal hits ${global.score}`;
    const target = document.getElementById("target");
    target.addEventListener("click", handleTargetClick);
};

const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};

const handleImageClick = () => {
    global.score++;
    document.getElementById("hits").textContent = `Aantal hits ${global.score}`;
};

const handleStartGame = () => {
    const startButton = document.getElementById("startButton");
    startButton.style.display = "none";
    const target = document.getElementById("target");
    target.addEventListener("click", handleImageClick);
    moveImageEverySecond();
};

const moveImageToRandomPosition = () => {
    const playField = document.getElementById("playField");
    const target = document.getElementById("target");
    const maxX = playField.clientWidth - global.IMAGE_SIZE;
    const maxY = playField.clientHeight - global.IMAGE_SIZE;
    const newX = getRandomNumber(0, maxX);
    const newY = getRandomNumber(0, maxY);
    target.style.left = `${newX}px`;
    target.style.top = `${newY}px`;
};

const replaceImage = () => {
    const target = document.getElementById("target");
    const randomImageNumber = Math.floor(Math.random() * global.IMAGE_COUNT);
    target.src = global.IMAGE_PATH_PREFIX + randomImageNumber + global.IMAGE_PATH_SUFFIX;
};

const moveImageEverySecond = () => {
    global.timeoutId = setInterval(() => {
        moveImageToRandomPosition();
        replaceImage();
    }, global.MOVE_DELAY);
};

const startGame = () => {
    handleStartGame();
};

window.addEventListener("load", setup);
