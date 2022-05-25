import Deck from "./models/Deck.js";
import Dealer from "./models/Dealer.js";
import User from "./models/User.js";

export default class GameBoard {
    constructor(){
        this.deck = new Deck();
        this.dealer = new Dealer();
        this.user = new User();
    }
    init(){
        // deck 섞기
        this.deck.shuffle();
        // 카드 2장씩 나눠주기
        // hit();
        // hit();
        // // 유저 카드는 다 보여주기
        // displayUserCard();
        // // 딜러 카드 보여주기
        // displayDillerCard();
    }

    hit(){
        const popDeck = this.deck.popCard();
        this.user.addCard(popDeck);
        
        if(true) {
            const popDeck2 = this.deck.popCard();
            this.dealer.addCard(popDeck2);
        }
        //console.log(this.deck.deck.length);
        console.log(this.user.cards);
        alert("tests~!!");

    }

    stand() {
        console.log("stand()");
        while(this.cardValueCalculation() <= 21) {
            dealer.addCard(deck.popCard());
        }
    }

    cardValueCalculation() {
        let score = 0;
        const cards = this.user.getCard();
        
        for(let i = 0; i < cards.length; i++){
            if(cards[i][1] === '10' || cards[i][1] === 'jack' || cards[i][1] === 'queen' || cards[i][1] === 'king'){
                score += 10;
            } else if(cards[i][1] === 'ace'){
                if(score + 11 > 21) score += 1;
                else score += 11;
            } else{
                score += parseInt(cards[i][1]);
            }
        }
        return score;
    }

    showCard(){
        //유저 카드를 이미지 
        for(let i=0; i<this.user.cards.length; i++){
            const doc = document.getElementById('dillercard');
            doc.innerHTML=`<img class="card" src="./img/${deck.cardValue}_of_clubs.png" alt=""></img>`;   
        }
    }
}

