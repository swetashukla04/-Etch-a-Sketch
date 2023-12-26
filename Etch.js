const container = document.createElement('div');
document.body.appendChild(container);

const clearButton = document.createElement('button');
clearButton.textContent = 'Clear Grid';
clearButton.addEventListener('click', clearGrid);
document.body.appendChild(clearButton);

createGrid();

function createGrid() {
    const n = prompt('Enter the number of blocks in the grid:');
    if (!n) return;

    container.style.display = 'grid';
    container.style.gridTemplateColumns = `repeat(${n}, 20px)`;
    container.style.gridGap = '2px';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const div = document.createElement('div');
            div.style.width = '20px';
            div.style.height = '20px';
            div.style.border = '1px solid black';
            container.appendChild(div);
            div.addEventListener('mouseenter', handleMouseEnter);
            div.addEventListener('mouseleave', handleMouseLeave);
        }
    }
}

function handleMouseEnter(event) {
    event.target.classList.add('hovered');
    const randomColor = getRandomColor();
    event.target.style.backgroundColor = randomColor;
}

function handleMouseLeave(event) {
    event.target.classList.remove('hovered');
}

function getRandomColor() {
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    return randomColor;
}

function clearGrid() {
    container.innerHTML = '';
    createGrid();
}
