// set constants and variables
const sketchContainer = document.querySelector("#sketchContainer");
const btnClear = document.querySelector("#clear");



function createGrid() {
    let size = Number(getComputedStyle(document.documentElement).getPropertyValue("--grid-size"));
    sketchContainer.style.setProperty("--grid-size", size);
    for (let i = 0; i < size * size; i++) {
        
            const cell = document.createElement("div");
            cell.classList.add("cell");
            sketchContainer.appendChild(cell);
                    
    }   
}

function hoverEffect() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {    
    cell.addEventListener("mouseover", () => { 
        cell.classList.add("hover"); // OR event.target.style.backgroundColor = "red";
     });
    });
}

btnClear.addEventListener("click", () => {    
    const cells = document.querySelectorAll(".cell");
        cells.forEach((cell) => {            
                cell.classList.remove("hover"); // toggle will turn whitw these and turn blue the ones wihtout hover
        });
    let size = prompt("Enter a new size for the sketch pad");
    document.documentElement.style.setProperty('--grid-size', size);
    etchAsketch();
    });



function etchAsketch() {
    createGrid();
    hoverEffect();
}


etchAsketch();