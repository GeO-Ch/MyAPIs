export function depopulateTable() {
    var table = document.getElementById('dataTable');

   while (table.firstChild) {
        table.removeChild(table.firstChild);
    }
}