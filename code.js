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
    selectPixel();
    
}

function selectPixel() {
    const pixel = document.querySelectorAll(".column");
    pixel.forEach(paintCanvas);
}

function paintCanvas(pixel) {
    pixel.addEventListener("mouseover", function(){
        pixel.style.backgroundColor = "red";
    });

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

createCanvas();
changeCanvasSize();
