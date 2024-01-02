const container = document.querySelector("#container");
const input = document.querySelector("input");
const buttonSet = document.querySelector("button#set");
const buttonReset = document.querySelector("button#reset");
const heading = document.querySelector("h1");


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
            square.style.backgroundColor = `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`;
        })
    }

}

setGrid();

buttonSet.addEventListener("click", () => {
    if (Number(input.value) >= 16 && Number(input.value) <= 100) {
        heading.textContent =  "Press button again to reset!";
        setGrid();
    } else {
        heading.textContent =  "Wrong number! (min: 16, max: 100)";
    }
})