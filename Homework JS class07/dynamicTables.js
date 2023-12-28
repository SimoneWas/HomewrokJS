console.log("wanna be web developer")

  function createTable() {
   
    let numRows = document.getElementById('rows').value;
    let numColumns = document.getElementById('columns').value;

    let table = document.createElement('table');

    for (let i = 0; i < numRows; i++) {
        let row = table.insertRow(i);

        for (let j = 0; j < numColumns; j++) {
            let cell = row.insertCell(j);
            cell.textContent = 'Row-' + (i + 1) + ' Column-' + (j + 1);
        }
    }


    let tableContainer = document.getElementById('tableContainer');
    tableContainer.innerHTML = '';
    tableContainer.appendChild(table);
}