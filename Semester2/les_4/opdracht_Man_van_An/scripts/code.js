const setup = () => {
    const tekst = "De man van An geeft geen hand aan ambetante verwanten";
    const zoektekst = "an";
    let count = 0;
    let idx = tekst.toLowerCase().indexOf(zoektekst.toLowerCase());

    while (idx !== -1) {
        count++;
        idx = tekst.toLowerCase().indexOf(zoektekst.toLowerCase(), idx + 1);
    }

    console.log(`Het aantal keer dat de sequentie "${zoektekst}" voorkomt (met indexOf): ${count}`);
    count = 0;
    idx = tekst.toLowerCase().lastIndexOf(zoektekst.toLowerCase());
    while (idx !== -1) {
        count++;
        idx = tekst.toLowerCase().lastIndexOf(zoektekst.toLowerCase(), idx - 1);
    }

    console.log(`Het aantal keer dat de sequentie "${zoektekst}" voorkomt (met lastIndexOf): ${count}`);
}

window.addEventListener("load", setup);
