const setup = () => {
    const woord = "onoorbaar";
    printTrigrams(woord);
}

const maakTrigrams = (woord) => {
    const trigrams = [];
    for (let i = 0; i < woord.length - 2; i++) {
        trigrams[i] = woord.substring(i, i + 3);
    }
    return trigrams;
}

const printTrigrams = (woord) => {
    const trigrams = maakTrigrams(woord);
    for (let i = 0; i < trigrams.length; i++) {
        console.log(trigrams[i]);
    }
}

window.addEventListener("load", setup);
