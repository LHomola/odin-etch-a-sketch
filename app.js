const gridSize = 16; // number of divs in a row / column

function createDivGrid() {
    const mainContainer = document.querySelector(".main-container");
    const mainContainerWidth = mainContainer.offsetWidth / gridSize;

    // populate mainContainer with a grid of divs so that these can be used to draw on with mouse
    for (let i = 0; i < gridSize * gridSize; i++) {
        const divCell = document.createElement("div");
    
        divCell.style.backgroundColor = "white";
        divCell.style.border = "1px solid black";
        divCell.style.height = `${mainContainerWidth}px`;
        divCell.style.width = `${mainContainerWidth}px`;

        attachHoverEventListener(divCell);

        mainContainer.appendChild(divCell);
    }
}

function attachHoverEventListener(divCell) {    
    divCell.addEventListener("mouseover", () => { divCell.style.backgroundColor = "black"});
}

createDivGrid();