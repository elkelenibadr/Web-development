const setup = () => {
    let verjaardag = new Date('Augustus 16, 2003');
    let d = new Date();
    let verschilTijd = d.getTime() - verjaardag.getTime();
    let verschilDagen = Math.round(verschilTijd / (1000 * 60 * 60 * 24));
    console.log(verschilDagen);
}

window.addEventListener("load", setup);