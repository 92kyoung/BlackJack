import GameBoard from "./gameBoard.js";

let game;
document.addEventListener("DOMContentLoaded", () => {
    game = new GameBoard();
    game.init();
    game.hit();
<<<<<<< Updated upstream
    console.log(game.cardValueCalculation());

=======
    game.hit();
>>>>>>> Stashed changes
});

const btnHit = document.querySelector("#btn-hit");
btnHit.addEventListener("click", () => {
    game.hit();
});

const btnStand = document.querySelector("#btn-stand");
btnStand.addEventListener("click", () => {
    game.stand();
});
