const setup = () => {
    const btnSubmit = document.getElementById("btnSubmit");
    btnSubmit.addEventListener("click", spatiesOpConsole);
}

const spatiesOpConsole = () =>
{
    const inputTekst = document.getElementById("inputTekst").value;
    let nieuwStukTekst = " ";
    for(let i= 0; i < inputTekst.length; i++){
        if(inputTekst.charAt(i) !== " ") {
            nieuwStukTekst += inputTekst.charAt(i) + " ";
        }
    }
    console.log(nieuwStukTekst);
}
window.addEventListener("load", setup);