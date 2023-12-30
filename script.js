const container = document.querySelector("#container");
const input = document.querySelector("input");
const buttonSet = document.querySelector("button#set");
const buttonReset = document.querySelector("button#reset");
const allChildren = document.querySelectorAll(".square");


function setGrid() {
    container.replaceChildren();
    let numberOfSquares = Number(input.value);
    let squareFlexBasis = 640 / numberOfSquares;
    for (let i = 0; i < numberOfSquares ** 2; i++) {
        let square = document.createElement("div");
        square.classList.add('square');
        square.style.flexBasis = squareFlexBasis + "px";
        container.appendChild(square);
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "red";
        })
    }
    
}

setGrid();

buttonSet.addEventListener("click", () => {
    setGrid();
})
