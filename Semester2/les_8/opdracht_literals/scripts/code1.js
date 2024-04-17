const setup1 = () => {
    let tekst = '{"voornaam":"Badr","familienaam":"El Keleni","geboorteDatum":"2003-08-16T00:00:00.000Z","adres":{"straat":"Stationstraat 19","postcode":"8790","gemeente":"Waregem"},"isIngeschreven":true,"lievelingsEten":["frieten","macaroni","pita","lasagne"],"aantalAutos":0}'
    let student2 = JSON.parse(tekst);
    console.log(student2.familienaam);
}

window.addEventListener("load", setup1);