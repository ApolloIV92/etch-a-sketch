const largeBox = document.querySelector(".sketchContainer");


function populateBoxes() {
    for (i = 0; i<256; i++) {
    const smallBox = document.createElement("div");
    smallBox.classList.add("pixel");
    smallBox.style.height = (600/16)+"px";
    smallBox.style.width = (600/16)+"px";
    largeBox.appendChild(smallBox);
    console.log("test");
    }
}

populateBoxes();

const pixels = document.getElementsByClassName('pixel');
for (const pixel of pixels) {
pixel.addEventListener("mouseover", () => pixel.style.backgroundColor = "red");
}