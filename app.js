const MAX_SIZE = 100;
let gridSize = 16; // number of divs in a row / column

function changeGridSize() {    
    const mainContainer = document.querySelector(".main-container");

    // limit size of grid to avoid potential delays, freezing, or crashing
    do {
        gridSize = prompt("Provide grid size in squares / row: ");
    } while (gridSize > MAX_SIZE);
    
    mainContainer.innerHTML = "";
    createDivGrid();
    updateSizeBtnlabel();
}

function attachGridSizeButtonEventListener() {
    const sizeBtn = document.querySelector("#gridSizeBtn");
    sizeBtn.addEventListener("click", () => { changeGridSize() });    
    updateSizeBtnlabel();
}

function createDivGrid() {
    const mainContainer = document.querySelector(".main-container");
    const mainContainerWidth = mainContainer.offsetWidth / gridSize; // add borders to div dimensions

    // populate mainContainer with a grid of divs so that these can be used to draw on with mouse
    for (let i = 0; i < gridSize * gridSize; i++) {
        const divCell = document.createElement("div");
    
        divCell.style.backgroundColor = "white";
        divCell.style.border = "1px solid black";
        divCell.style.boxSizing = "border-box";
        divCell.style.height = `${mainContainerWidth}px`;
        divCell.style.width = `${mainContainerWidth}px`;

        attachHoverEventListener(divCell);

        mainContainer.appendChild(divCell);
    }
}

function attachHoverEventListener(divCell) {    
    divCell.addEventListener("mouseover", () => { divCell.style.backgroundColor = "black"});
}

function updateSizeBtnlabel() {
    const sizeLbl = document.querySelector("#sizeLabel");
    sizeLbl.textContent = `Current size: ${gridSize} squares / row`;
}

createDivGrid();
attachGridSizeButtonEventListener();