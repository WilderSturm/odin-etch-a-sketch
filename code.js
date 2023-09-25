function createCanvas (newSize) {
    let size = 16;
    if (newSize != undefined) {
        size = newSize;
    }
    
    const canvas = document.querySelector("#canvas");
    canvas.innerHTML = "";

    for(i = 0; i < size; i++) {
        const createRow = document.createElement("div");
        createRow.classList = "row";
        canvas.append(createRow);
        for(j = 0; j < size; j++) {
            const createColumn = document.createElement("div");
            createColumn.classList = "column";
            createRow.append(createColumn);
        }
    }
    changePixelSize(size);
}

function selectPixel(mode) {
    const pixel = document.querySelectorAll(".column");
    pixel.forEach(paintCanvas);
}

function paintCanvas(pixel) {
    if (mode === "normalMode") {
        pixel.addEventListener("mouseover", function(){
            pixel.style.backgroundColor = "black";
        });
    } else if (mode === "rainbowMode") {
        pixel.addEventListener("mouseover", function(){
            pixel.style.backgroundColor = "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0");
        });
    } else if (mode === "eraser") {
        pixel.addEventListener("mouseover", function(){
            pixel.style.backgroundColor = "white";
        });
    } else if (mode === "clearCanvas") {
        pixel.style.backgroundColor = "white";
    }
}

function changeCanvasSize () {
    button = document.querySelector("#changeCanvasSize");
    button.onclick = function() {
        let newSize = prompt("Choose canvas size. Max 100 pixels.");
        if (newSize > 100) {
            createCanvas(100);
        } else if (newSize <= 0) {
            createCanvas(1);
        } else {
            createCanvas(newSize);
        }
    }
}

function changePixelSize (size) {
    const pixel = document.querySelectorAll(".column");
    let pixelSize = 480/size;
    pixel.forEach((pixel) => {
        pixel.style.width = `${pixelSize}px`;
        pixel.style.height = `${pixelSize}px`;
    });
}

function convertToId(e) {
    mode = e.target.id;
    selectPixel(mode);
}

createCanvas();
changeCanvasSize();


let mode;
rainbowModeButton = document.querySelector("#rainbowMode");
rainbowModeButton.addEventListener("mousedown", convertToId);
normalModeButton = document.querySelector("#normalMode");
normalModeButton.addEventListener("mousedown", convertToId);
eraserButton = document.querySelector("#eraser");
eraser.addEventListener("mousedown", convertToId);
clearCanvasButton = document.querySelector("#clearCanvas");
clearCanvasButton.addEventListener("mousedown", function(e) {
    mode = e.target.id;
    selectPixel(mode);
});