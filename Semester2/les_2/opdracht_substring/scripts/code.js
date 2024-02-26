const setup = () => {
    let btnSubstring = document.getElementById("btnSubstring");
    btnSubstring.addEventListener("click", substring);
}

const substring = () =>{
    let txtInput = document.getElementById("txtInput");
    let firstNumber = document.getElementById("firstNumber").value;
    let lastNumber = document.getElementById("lastNumber").value;
    let txtOutput = document.getElementById("txtOutput");
    let text = txtInput.value;
    let output = text.substring(firstNumber, lastNumber);
    txtOutput.innerHTML = "<span> " + output + "</span>";
}

window.addEventListener("load", setup);