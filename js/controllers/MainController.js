import Game from "../models/Game.js"

export default class MainController {
    constructor() {
        this.game = new Game();
    }

    init() {
        // betting 금액 가져와서 넣기
        this.game.setBetCost(betCost);
    }

    onHit() {
        
    }

    onStand() {

    }

    onSurrend() {
        // 이후 index.html로 이동
    }
}
