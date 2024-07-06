function displaySavedQuotes() {

    const savedQuotes = getSavedQuotes();


    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');


    const headerRow = document.createElement('tr');
    ['FECHA', 'MONEDA', 'COMPRA', 'VENTA', 'ACCIÓN'].forEach(header => {
    const th = document.createElement('th');
    th.textContent = header;
    headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);


    savedQuotes.forEach(quote => {
    const row = document.createElement('tr');


    const dateCell = document.createElement('td');
    dateCell.textContent = quote.date;
    row.appendChild(dateCell);


    const currenciesCell = document.createElement('td');
    quote.currencies.forEach(currency => {
        const currencyElement = document.createElement('div');
        currencyElement.textContent = currency;
        currenciesCell.appendChild(currencyElement);
    });
    row.appendChild(currenciesCell);

    const buyCell = document.createElement('td');
    buyCell.textContent = quote.buy;
    row.appendChild(buyCell);

    const sellCell = document.createElement('td');
    sellCell.textContent = quote.sell;
    row.appendChild(sellCell);


    const actionCell = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    deleteButton.textContent = '🗑️';
    deleteButton.addEventListener('click', () => removeQuote(quote.date));
    actionCell.appendChild(deleteButton);
    row.appendChild(actionCell);

    tbody.appendChild(row);
    });

    table.appendChild(thead);
    table.appendChild(tbody);


    const miArchivoContainer = document.querySelector('.mi-archivo-container');
    miArchivoContainer.innerHTML = '';
    miArchivoContainer.appendChild(table);
}


function removeQuote(date) {

    console.log(`Eliminando cotización del ${date}`);
}


function printReport() {

    var reportContent = document.querySelector('.mi-archivo-container').innerHTML;

    var printWindow = window.open('', '', 'height=400,width=800');
    printWindow.document.write('<html><head><title>Cotizacion Hoy</title>');
    printWindow.document.write('</head><body >');
    printWindow.document.write(reportContent);
    printWindow.document.write('</body></html>');


    printWindow.document.close();
    printWindow.focus();
    printWindow.print();

    printWindow.close();
}

displaySavedQuotes();


document.getElementById('share-info').addEventListener('click', function() {
    document.getElementById('email-form').classList.toggle('hidden');
});

document.getElementById('close-form').addEventListener('click', function() {
    document.getElementById('email-form').classList.add('hidden');
});