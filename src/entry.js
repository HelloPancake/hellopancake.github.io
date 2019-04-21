import Game from "./game";

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("startButton").addEventListener("click", () => {
        document.getElementById('startButton').style.display = 'none';
        const game = new Game();
        setInterval(game.draw, 9);
    })
});

