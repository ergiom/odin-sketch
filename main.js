function createDivs() {
    let body = document.querySelector('body');
    for (let i = 0; i < 16 * 16; i++) {
        let div = document.createElement('div');
        div.classList.add('grid-div');
        body.appendChild(div);
    }
}

function changeColor() {

}

createDivs();
let divs = Array.from(document.querySelectorAll('.grid-div'));