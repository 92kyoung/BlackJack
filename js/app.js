import GameBoard from "./gameBoard.js";

let game;
document.addEventListener("DOMContentLoaded", () => {
    game = new GameBoard();
    game.init();
    game.showCard();
});

const btnHit = document.querySelector("#btn-hit");
btnHit.addEventListener("click", () => {
    if(game.hit()) {
        const result = game.outcome();
        if(result === 1)
            document.getElementById("outcome").innerHTML = "Win!";
        if(result === 2)
            document.getElementById("outcome").innerHTML = "Loose";
        if(result === 3)
            document.getElementById("outcome").innerHTML = "Tie!";
            
        document.getElementById("backgroud").style.display = "block";
    }
    game.showCard();
});

const btnStand = document.querySelector("#btn-stand");
btnStand.addEventListener("click", () => {
    game.stand();

    const result = game.outcome();
        if(result === 1)
            document.getElementById("outcome").innerHTML = "Win!";
        if(result === 2)
            document.getElementById("outcome").innerHTML = "Loose";
        if(result === 3)
            document.getElementById("outcome").innerHTML = "Tie!";
            
        document.getElementById("backgroud").style.display = "block";

    game.showCard();

    document.getElementById("backgroud").style.display = "block";
    
});
