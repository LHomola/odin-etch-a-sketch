const MAX_SIZE = 100;
let gridSize = 16; // number of divs in a row / column

function changeGridSize() {    
    const mainContainer = document.querySelector(".main-container");
    let input;

    // limit size of grid to avoid potential delays, freezing, or crashing
    do {
        input = prompt("Provide grid size in squares / row: ");
        if (input === null) { // if user cancels the prompt assign default value
            input = '16';
        }
    } while (input > MAX_SIZE || isNaN(input));
    
    gridSize = Number(input);
    mainContainer.innerHTML = "";
    createDivGrid();
    updateSizeBtnlabel();
}

function attachButtonsEventListener() {
    const mainContainer = document.querySelector(".main-container");
    const sizeBtn = document.querySelector("#gridSizeBtn");
    const resetBtn = document.querySelector("#resetBtn");

    resetBtn.addEventListener("click", () => { 
        mainContainer.innerHTML = "";
        createDivGrid();
     });

    sizeBtn.addEventListener("click", () => { changeGridSize() });    
    
    updateSizeBtnlabel();
}

// generate random color code
const randomRgbColor = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
  };

function createDivGrid() {
    const mainContainer = document.querySelector(".main-container");
    const mainContainerWidth = mainContainer.offsetWidth / gridSize;

    // populate mainContainer with a grid of divs so that these can be used to draw on with mouse
    for (let i = 0; i < gridSize * gridSize; i++) {        
        const divCell = document.createElement("div");

        divCell.style.backgroundColor = "white";
        divCell.style.opacity = 0.0/*  */;
        divCell.style.border = "1px solid black";
        divCell.style.boxSizing = "border-box";
        divCell.style.height = `${mainContainerWidth}px`;
        divCell.style.width = `${mainContainerWidth}px`;

        attachHoverEventListener(divCell);

        mainContainer.appendChild(divCell);
    }
}

// randomize color on every interaction + increase opacity by 0.1
function attachHoverEventListener(divCell) {    
    divCell.addEventListener("mouseover", () => { 
        divCell.style.backgroundColor = randomRgbColor();
        if (divCell.style.opacity < 1) { divCell.style.opacity = parseFloat(divCell.style.opacity) + 0.1; }
    });
}

function updateSizeBtnlabel() {
    const sizeLbl = document.querySelector("#sizeLabel");
    sizeLbl.textContent = `Current size: ${gridSize} squares / row`;
}

createDivGrid();
attachButtonsEventListener();