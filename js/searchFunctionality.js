// searchFunctionality.js
import { data, renderTable, rowsPerPage, currentPage } from './renderTable.js';

let filteredData = {};

document.getElementById('searchButton').addEventListener('click', () => {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    filteredData = Object.keys(data).filter(key => {
        const row = data[key];
        return Object.values(row).some(value => 
            value.toString().toLowerCase().includes(searchInput)
        );
    }).reduce((obj, key) => {
        obj[key] = data[key];
        return obj;
    }, {});

    //currentPage = 1;
    renderTable(1, filteredData);
});

document.getElementById('searchButtonReset').addEventListener('click', () => {
    filteredData = {};
    //currentPage = 1;
    renderTable(1);
});