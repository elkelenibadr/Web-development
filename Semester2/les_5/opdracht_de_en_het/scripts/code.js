const setup = () => {
    let zin = "Gisteren zat de jongen op de stoep en at de helft van de appel";
    let uitvoer = vervangDeDoorHet(zin);
    console.log(uitvoer);
}

const vervangDeDoorHet = (tekst) => {
    let woorden = tekst.split(' ');

    for (let i = 0; i < woorden.length; i++) {
        if (woorden[i].toLowerCase() === 'de') {
            if (woorden[i - 1]) {
                woorden[i] = 'het' + woorden[i].slice(2);
            } else {
                woorden[i] = 'het';
            }
        }
    }
    return woorden.join(' ');
}

window.addEventListener("load", setup);
