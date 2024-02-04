export function depopulateGrid() {
    var gifShowGrid = document.getElementById('gifShowGrid');

   while (gifShowGrid.firstChild) {
        gifShowGrid.removeChild(gifShowGrid.firstChild);
    }
}