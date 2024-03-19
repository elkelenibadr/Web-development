const setup = () => {
    const tablesContainer = document.getElementById('tablesContainer');
    const generateButton = document.getElementById('generateButton');

    generateButton.addEventListener('click', () => {
        generateTable();
    });

    const generateTable = () => {
        const numberInput = document.getElementById('numberInput').value.trim();
        if (!isNaN(numberInput) && numberInput !== '') {
            const table = document.createElement('div');
            table.classList.add('table');

            const header = document.createElement('div');
            header.classList.add('table-header');
            header.innerText = `Tafel van ${numberInput} aangemaakt op: ${getTime()}`;

            table.appendChild(header);

            for (let i = 1; i <= 10; i++) {
                const row = document.createElement('div');
                row.classList.add('row');
                if (i % 2 === 0) {
                    row.classList.add('even');
                }
                row.innerText = `${numberInput} × ${i} = ${numberInput * i}`;
                table.appendChild(row);
            }

            tablesContainer.appendChild(table);
            document.getElementById('numberInput').value = '';
        } else {
            alert('Please enter a valid number!');
        }
    };

    const getTime = () => {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    };
};

window.addEventListener("load", setup);
