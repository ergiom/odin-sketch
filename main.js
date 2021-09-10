function createDivs(size) {
    let main_grid = document.querySelector('#main-grid-div');
    main_grid.style['grid-template-columns'] = `repeat(${size}, 1fr)`
    for (let i = 0; i < size * size; i++) {
        let div = document.createElement('div');
        div.classList.add('grid-div');
        main_grid.appendChild(div);
    }
}

function changeColor(event) {
    let div = event.target;
    let bColor = window.getComputedStyle(div).backgroundColor;

    let re = /\d+/;
    let colorValue = Number(re.exec(bColor));

    let newColorValue = colorValue - 10;
    let newBackgroundColor = 
        `rgb(${newColorValue},${newColorValue},${newColorValue})`;
    div.style.backgroundColor = newBackgroundColor;

    if (!newColorValue) {
        div.removeEventListener('mousemove', changeColor);
    }
}

function sizeInput() {
    while (true) {
        let size = Number(prompt('specify size:'));
        if (size > 0 && size < 100) return size;
    }
}

function initialize() {
    let restart = document.querySelector('#reset-button');
    restart.addEventListener('click', initialize);
    let size = sizeInput();

    let grid_div = document.querySelector('#main-grid-div');
    grid_div.innerHTML = '';
    createDivs(size);
    let divs = Array.from(document.querySelectorAll('.grid-div'));
    divs.forEach((div) =>
        div.addEventListener('mousemove', changeColor));
}

initialize();