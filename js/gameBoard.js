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
        this.hit();
        this.hit();
    }

    hit(){
        const popDeck = this.deck.popCard();
        this.user.addCard(popDeck);
        
        if(this.cardValueCalculation(this.dealer) < 17) {
            const popDeck2 = this.deck.popCard();
            this.dealer.addCard(popDeck2);
        }

        return(this.isBurst(this.user) || this.isBurst(this.dealer));
    }

    stand() {
        console.log("stand()");
        while(this.cardValueCalculation(this.dealer) <= 21) {
            this.dealer.addCard(this.deck.popCard());
        }
    }

    isBurst(person) {
        let score = this.cardValueCalculation(person);
        
        if(score > 21) {
            return true;
        }
        return false;
    }

    outcome(){
        console.log(this.user.getCard());
        console.log(this.dealer.getCard());
        console.log(this.cardValueCalculation(this.user));
        console.log(this.cardValueCalculation(this.dealer));

        if(this.isBurst(this.user) && this.isBurst(this.dealer)) {
            return 3;
        }
        if(this.isBurst(this.user) && !this.isBurst(this.dealer)) {
            return 2;
        }
        if(!this.isBurst(this.user) && this.isBurst(this.dealer)) {
            return 1;
        }
        if(!this.isBurst(this.user) && !this.isBurst(this.dealer)) {
            if(this.cardValueCalculation(this.user) > this.cardValueCalculation(this.dealer)) {
                return 1;
            } else if(this.cardValueCalculation(this.user) === this.cardValueCalculation(this.dealer)) {
                return 3;
            } else {
                return 2;
            }
        }

    }

    cardValueCalculation(person = new User()) {
        let score = 0;
        const cards = person.getCard();
        console.log(cards);
        for(let i = 0; i < cards.length; i++){
            if(cards[i][1] === '10' || cards[i][1] === 'jack' || cards[i][1] === 'queen' || cards[i][1] === 'king'){
                score = score + 10;
            } else if(cards[i][1] === 'ace'){
                if(score + 11 > 21) score = score + 1;
                else score = score + 11;
            } else{
                score = score + parseInt(cards[i][1]);
            }
        }
        
        return score;
    }

    showCard(){
        //유저 이미지 보여줌
        const userdoc = document.getElementById('userCards');
        userdoc.innerHTML = "";
        for(let i=0; i<this.user.cards.length; i++){
            userdoc.innerHTML +=`<img class="card" src="./img/${this.user.cards[i][1]}_of_${this.user.cards[i][0]}.png" alt=""></img>`;   
            //doc.innerHTML= `<img class="card" src="./img/10_of_clubs.png" alt=""></img>`;
        }

        const dealerdoc = document.getElementById('dealerCards');
        dealerdoc.innerHTML = "";
        for(let i=0; i<this.dealer.cards.length; i++){
            dealerdoc.innerHTML +=`<img class="card" src="./img/${this.dealer.cards[i][1]}_of_${this.dealer.cards[i][0]}.png" alt=""></img>`;   
            //doc.innerHTML= `<img class="card" src="./img/10_of_clubs.png" alt=""></img>`;
        }
    
    }
}

