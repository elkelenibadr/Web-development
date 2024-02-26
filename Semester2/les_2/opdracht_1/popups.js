window.alert("Dit is een mededeling");

let confirmResultaat = window.confirm("Weet u het zeker?");
console.log("Returnwaarde van de confirm functie:", confirmResultaat);
//De returnwaarde van de confirm-functie zal true zijn als de gebruiker op OK klikt en false zijn als hij op Cancel kilkt.

let promptResultaat = window.prompt("Wat is uw naam", "onbekend");
console.log("Returnwaarde van de prompt functie:", promptResultaat);
//De returnwaarde van de prompt-functie zal de ingevoerde tekst zijn als de gebruiker op OK klikt en null zijn als hij op Cancel klikt.