const largeBox = document.querySelector(".sketchContainer");
const blackButton = document.querySelector(".blackButton");
const colorPicker = document.querySelector(".colorChoice");
let penColor = "black";
colorPicker.addEventListener("input", () => penColor = colorPicker.value);
blackButton.addEventListener("click", () => penColor = "black")
let gridSize = prompt("How large of a grid?");




//Populates the grid with the user selected number of pixels.

function populateBoxes() {
    for (i = 0; i<(gridSize**2); i++) {
    const smallBox = document.createElement("div");
    smallBox.classList.add("pixel");
    smallBox.style.height = (600/gridSize)+"px";
    smallBox.style.width = (600/gridSize)+"px";
    largeBox.appendChild(smallBox);
    }
}


//Removes all child pixels and replaces them with new ones.

function resetGrid() {
    while (largeBox.childElementCount > 0) {
        largeBox.removeChild(largeBox.lastChild);
    }
    gridSize = prompt("How many squares?");
    populateBoxes();
    enableDrawing();
    }  


//Adds the event listener to the parent div of all the pixels. When any of the
//events bubble up to the parent div element, checks the class of the element
//that triggered the event. If it's one of the pixels, changes it to the
// appropriate color.

function EnableDrawing() {
    largeBox.addEventListener("mouseover",
        function(e) {
            if(e.target && e.target.matches("div.pixel")) {
                e.target.style.backgroundColor = penColor;
            }
        });
}


populateBoxes();
EnableDrawing();

const reset = document.getElementById("resetButton");
reset.addEventListener("click", () => resetGrid())
