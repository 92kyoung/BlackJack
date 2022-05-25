import GameBoard from "./gameBoard.js";

let game;
document.addEventListener("DOMContentLoaded", () => {
    game = new GameBoard();
    game.init();
});

const btnHit = document.querySelector("#btn-hit");
btnHit.addEventListener("click", () => {
    if(game.hit()) {
        console.log(game.outcome());
    }
});

const btnStand = document.querySelector("#btn-stand");
btnStand.addEventListener("click", () => {
    game.stand();
    console.log(game.outcome());
});
