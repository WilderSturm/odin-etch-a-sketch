function createCanvas (newSize) {
    let size = 16;
    let numberOfColumn = 16;
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
    
    selectPixel();
}

function selectPixel() {
    const pixel = document.querySelectorAll(".column");
    pixel.forEach(paintCanvas);
}

function paintCanvas(pixel) {
    pixel.addEventListener("mouseover", function(){
        pixel.setAttribute("style", "background-color:red;");
    });

}

function changeCanvasSize () {
    button = document.querySelector("#changeCanvasSize");
    button.onclick = function() {
        let newSize = prompt("How many pixels for width and height?");
        createCanvas(newSize);
    }
}

createCanvas();
changeCanvasSize();
