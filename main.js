function createDivs() {
    let body = document.querySelector('body');
    for (let i = 0; i < 16 * 16; i++) {
        let div = document.createElement('div');
        div.classList.add('grid-div');
        body.appendChild(div);
    }
}

function changeColor(event) {
    let div = event.target;
    div.removeEventListener('mousemove', changeColor);
    div.style.backgroundColor = 'black';
}

function initialize() {
    createDivs();
    let divs = Array.from(document.querySelectorAll('.grid-div'));
    console.log(divs);
    divs.forEach((div) =>
        div.addEventListener('mousemove', changeColor));
}

initialize();