let history = [];

const getElements = () => ({
    zoekbalk: document.getElementById("zoeken"),
    button: document.getElementById("button"),
    historyContainer: document.getElementById("history")
});

const executeSearch = (searchQuery) => {
    const commandPrefix = searchQuery[1];
    const searchValue = searchQuery.substring(3);

    const searchProviders = {
        'g': { title: 'Google', url: `https://www.google.com/search?q=${searchValue}` },
        'y': { title: 'YouTube', url: `https://www.youtube.com/results?search_query=${searchValue}` },
        't': { title: 'Twitter', url: `https://twitter.com/hashtag/${searchValue}` },
        'i': { title: 'Instagram', url: `https://www.instagram.com/explore/tags/${searchValue}/` }
    };

    const provider = searchProviders[commandPrefix];
    if (provider) {
        openLink(provider.url);
        addToHistory(provider.title, searchValue, provider.url);
    } else {
        window.alert("Unknown command prefix");
    }
};

const addToHistory = (title, searchValue, url) => {
    history.push({title, searchValue, url});
    localStorage.setItem("history", JSON.stringify(history));
    renderHistory();
};

const openLink = (url) => {
    window.open(url, "_blank");
};

const goToWebsite = (event) => {
    const url = event.target.dataset.url;
    openLink(url);
};

const renderHistory = () => {
    const { historyContainer } = getElements();
    historyContainer.innerHTML = "";
    history.forEach((item) => {
        let cardBackgroundColor;
        let buttonBackgroundColor;
        let buttonTextColor;

        switch (item.title) {
            case 'Google':
                cardBackgroundColor = 'bg-google';
                buttonBackgroundColor = 'btn-google';
                buttonTextColor = 'text-white';
                break;
            case 'YouTube':
                cardBackgroundColor = 'bg-youtube';
                buttonBackgroundColor = 'btn-youtube';
                buttonTextColor = 'text-white';
                break;
            case 'Twitter':
                cardBackgroundColor = 'bg-twitter';
                buttonBackgroundColor = 'btn-twitter';
                buttonTextColor = 'text-white';
                break;
            case 'Instagram':
                cardBackgroundColor = 'bg-instagram';
                buttonBackgroundColor = 'btn-instagram';
                buttonTextColor = 'text-white';
                break;
            default:
                cardBackgroundColor = '';
                buttonBackgroundColor = 'btn-default';
                buttonTextColor = 'text-default';
                break;
        }

        const card = document.createElement("div");
        card.classList.add("col-sm-6");
        card.classList.add("col-md-4");
        card.classList.add("col-lg-4");

        card.innerHTML = `
            <div class="card ${cardBackgroundColor}">
                <div class="card-body">
                    <h5 class="card-title ${buttonTextColor}">${item.title}</h5>
                    <p class="card-text ${buttonTextColor}">${item.searchValue}</p>
                    <button class="btn ${buttonBackgroundColor} btn-history" data-url="${item.url}">Go!</button>
                </div>
            </div>`;
        historyContainer.appendChild(card);
    });
};

const setup = () => {
    const { button, zoekbalk } = getElements();

    button.addEventListener("click", () => {
        const searchQuery = zoekbalk.value.trim();
        if (searchQuery.startsWith("/")) {
            executeSearch(searchQuery);
        } else if (searchQuery.toLowerCase() === "refresh pagina") {
            location.reload();
        } else {
            window.alert("Invalid command");
        }
        zoekbalk.value = "";
    });

    const storedHistory = localStorage.getItem("history");
    if (storedHistory) {
        history = JSON.parse(storedHistory);
        renderHistory();
    }

    const { historyContainer } = getElements();
    historyContainer.addEventListener("click", (event) => {
        if (event.target.classList.contains("btn-history")) {
            goToWebsite(event);
        }
    });
};

window.addEventListener("load", setup);
