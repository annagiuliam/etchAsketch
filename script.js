// set constants and variables
const container = document.querySelector("#container");
// let rows = document.getElementsByClassName("gridRow");
// let cells = document.getElementsByClassName("cell");


// function makeRows(rowNum) {

//     for (r = 0; r < rowNum; r++) {
//         let row = document.createElement("div");
//         row.classList.add("row");
//         container.appendChild(row);
//     };
// };



function createRow(cellNum) {
    for (let i = 0; i < cellNum; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        container.appendChild(cell);
    }
}

createRow(5);