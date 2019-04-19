import Game from "./game";

document.addEventListener('DOMContentLoaded', () => {
    const game = new Game();
    setInterval(game.draw, 9);

});

