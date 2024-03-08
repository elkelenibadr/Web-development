let familieleden = ["Badr", "Jan", "Piet", "Marie", "Salah"];

console.log("Aantal familieleden:", familieleden.length);

console.log("Eerste element:", familieleden[0]);
console.log("Derde element:", familieleden[2]);
console.log("Vijfde element:", familieleden[4]);

function VoegNaamToe(naam) {
    familieleden.push(naam);
}

let nieuweNaam = prompt("Voer een nieuwe naam in:");
VoegNaamToe(nieuweNaam);
console.log("Familieleden na toevoeging:", familieleden);

let familieledenString = familieleden.join(", ");
console.log("Familieleden als string:", familieledenString);Listener("load", setup);