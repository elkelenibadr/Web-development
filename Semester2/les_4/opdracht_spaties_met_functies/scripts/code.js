const setup = () => {
    const inputText = "Man bijt hond met valse tanden";
    const resultaat = maakMetSpaties(inputText);
    console.log(resultaat);
}

const maakMetSpaties = (inputText) => {
    let result = "";
    for (let i = 0; i < inputText.length; i++) {
        if(inputText.charAt(i) !== " ") {
            result += inputText.charAt(i) + " ";
        }
    }
    return result;
}

window.addEventListener("load", setup);