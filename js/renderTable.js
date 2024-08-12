// renderTable.js
import { getDatabase, ref, onValue, get } from 'https://www.gstatic.com/firebasejs/9.8.0/firebase-database.js';
import { auth } from '../js/firebase-config.js';
import { onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.8.0/firebase-auth.js';
import { signout } from '../js/signout.js';

export let data = {};
export const rowsPerPage = 250;
export let currentPage = 1;
let totalGuests = 0;
let attendingGuests = 0;
let filteredData = {};


export function renderTable(page, dataToRender = data) {
    const dataTableBody = document.getElementById('data-table').querySelector('tbody');
    dataTableBody.innerHTML = '';
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const keys = Object.keys(dataToRender).slice(start, end);

    for (let key of keys) {
        let row = dataToRender[key];
        const tr = document.createElement('tr');
        tr.setAttribute('data-id', row.id);
        tr.innerHTML = `
            <td>${row.id}</td>
            <td>${row.name}</td>
            <td>${row.category}</td>
            <td>${row.company}</td>
            <td>${row.email}</td>
            <td>${row.phoneno}</td>
            <td>${row.attending ? 'Yes' : 'No'}</td>
            <td></td>
        `;
        const lastCol = tr.lastElementChild;
        dataTableBody.appendChild(tr);
    }

    document.getElementById('page-info').innerText = `Page ${currentPage} ouf of ${Math.ceil(totalGuests / rowsPerPage)}`;
}

function updateGuestCounts() {
    totalGuests = Object.keys(data).length;
    attendingGuests = Object.values(data).filter(row => row.attending).length;
    console.log(Object.values(data).filter(row => row.attending))
    console.log(attendingGuests);
    document.getElementById('guest-number').innerText = `Total Guests: ${totalGuests}`;
    document.getElementById('attending-number').innerText = `Attending Guests: ${attendingGuests}`;
    document.getElementById('attending-percentage').innerText = `Percentage: ${attendingGuests/totalGuests}%`;
}

document.addEventListener('DOMContentLoaded', () => {
    const database = getDatabase();
    onAuthStateChanged(auth, async (user) => {
        if (!user) {
            window.location.href = '../index.html';
        } else {
            const sanitizeEmail = (email) => {
                return email.replace(/\.com$/, ''); // Remove ".com" from the end
            };
            const email = auth.currentUser.email;
            const sanitizedEmail = sanitizeEmail(email);
            const adminPath = 'admin/' + sanitizedEmail;
            const scanPath = 'scanner/' + sanitizedEmail;
            const adminRef = ref(database, adminPath);
            const scanRef = ref(database, scanPath);
            try {
                const [snapshot, snapshotScan] = await Promise.all([get(adminRef), get(scanRef)]);
                if (snapshot.exists()) {
                    const dataRef = ref(database, 'guests');
                    onValue(dataRef, (snapshot) => {
                        data = snapshot.val();
                        updateGuestCounts();
                        renderTable(currentPage);
                    });
                } else if (snapshotScan.exists()) {
                        // Le Bruh
                } else {
                    alert("Unauthorized access!");
                    window.location.href = '../index.html'; // Redirect to login page if not an admin
                }
            } catch (error) {
                console.error("Error fetching data: ", error);
                window.location.href = '../index.html'; // Redirect to login page on error just inc ase
            }
        }
    });

    document.getElementById('logout').addEventListener('click', () => {
        signout()
    });

    document.getElementById('logout2').addEventListener('click', async () => {
        signout()
    });

    document.getElementById('export').addEventListener('click', () => {
        exportTableToExcel('data-table', 'guests_data');
    });

    // function exportTableToExcel(tableID, filename = '') {
    //     let downloadLink;
    //     let dataType = 'application/vnd.ms-excel';
    //     let tableSelect = document.getElementById(tableID);
    //     let tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');
    //     filename = filename ? filename + '.xls' : 'excel_data.xls';
    //     downloadLink = document.createElement("a");
    //     document.body.appendChild(downloadLink);
    //     if (navigator.msSaveOrOpenBlob) {
    //         let blob = new Blob(['\ufeff', tableHTML], {
    //             type: dataType
    //         });
    //         navigator.msSaveOrOpenBlob(blob, filename);
    //     } else {
    //         downloadLink.href = 'data:' + dataType + ', ' + tableHTML;
    //         downloadLink.download = filename;
    //         downloadLink.click();
    //     }
    // }

    document.getElementById('export').addEventListener('click', () => {
        exportTableToExcel(data, 'guests_data');
    });

    ///Thank God FOR CHATGPT FOR THIS
    
    function createTableFromData(data) {
        let table = document.createElement('table');
        let thead = document.createElement('thead');
        let tbody = document.createElement('tbody');
    
        // Define the order of headers
        let headers = ['id', 'name', 'category', 'company', 'email', 'phoneno', 'attending'];
        let headerRow = document.createElement('tr');
        headers.forEach(header => {
            let th = document.createElement('th');
            th.innerText = header;
            headerRow.appendChild(th);
        });
        thead.appendChild(headerRow);
    
        // Create table rows
        Object.values(data).forEach(rowData => {
            let row = document.createElement('tr');
            headers.forEach(header => {
                let td = document.createElement('td');
                td.innerText = rowData[header];
                row.appendChild(td);
            });
            tbody.appendChild(row);
        });
    
        table.appendChild(thead);
        table.appendChild(tbody);
        return table;
    }
    
    function exportTableToExcel(data, filename = '') {
        let downloadLink;
        let dataType = 'application/vnd.ms-excel';
    
        // Create a table from the data
        let table = createTableFromData(data);
        let tableHTML = table.outerHTML.replace(/ /g, '%20');
    
        // Encode special characters
        tableHTML = tableHTML.replace(/#/g, '%23').replace(/&/g, '%26');
    
        filename = filename ? filename + '.xls' : 'excel_data.xls';
        downloadLink = document.createElement("a");
        document.body.appendChild(downloadLink);
    
        if (navigator.msSaveOrOpenBlob) {
            let blob = new Blob(['\ufeff', tableHTML], {
                type: dataType
            });
            navigator.msSaveOrOpenBlob(blob, filename);
        } else {
            downloadLink.href = 'data:' + dataType + ', ' + tableHTML;
            downloadLink.download = filename;
            downloadLink.click();
        }
    
        // Clean up
        document.body.removeChild(downloadLink);
    }

    document.getElementById('prev-page').addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            renderTable(currentPage, filteredData.length ? filteredData : data);
        }
    });

    document.getElementById('next-page').addEventListener('click', () => {
        if (currentPage * rowsPerPage < totalGuests) {
            currentPage++;
            renderTable(currentPage, filteredData.length ? filteredData : data);
        }
    });
});

