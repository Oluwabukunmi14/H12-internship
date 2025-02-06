let score = 0;
let targetColor;
let colorOptions = [];

const scoreDisplay = document.getElementById('score');
const targetColorBox = document.getElementById('target-color');
const colorOptionsContainer = document.getElementById('color-options');

function generateRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function setColorOptions() {
    colorOptions = [];
    while (colorOptions.length < 6) {
        let color = generateRandomColor();
        if (!colorOptions.includes(color)) {
            colorOptions.push(color);
        }
    }
    targetColor = colorOptions[Math.floor(Math.random() * colorOptions.length)];
}

function displayColorOptions() {
    colorOptionsContainer.innerHTML = '';
    colorOptions.forEach(color => {
        const colorDiv = document.createElement('div');
        colorDiv.classList.add('color-option');
        colorDiv.style.backgroundColor = color;
        colorDiv.onclick = () => handleGuess(color);
        colorOptionsContainer.appendChild(colorDiv);
    });
}

function handleGuess(selectedColor) {
    if (selectedColor === targetColor) {
        score++;
        alert('Correct! You get a point!');
    } else {
        alert('Wrong! Try again.');
    }
    updateScore();
    newGame();
}

function updateScore() {
    scoreDisplay.textContent = score;
}

function newGame() {
    setColorOptions();
    targetColorBox.style.backgroundColor = targetColor;
    displayColorOptions();
}

window.onload = newGame;
