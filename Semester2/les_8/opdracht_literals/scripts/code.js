const setup = () => {
    let student1= {
        voornaam : "Badr",
        familienaam : "El Keleni",
        geboorteDatum : new Date("2003-08-16"),
        adres : {
            straat : "Stationstraat 19",
            postcode : "8790",
            gemeente : "Waregem"
        },
        isIngeschreven : true,
        lievelingsEten : ["frieten", "macaroni", "pita", "lasagne"],
        aantalAutos : 0
    }
    let tekst = JSON.stringify(student1);
    console.log(tekst);
}
window.addEventListener("load", setup);