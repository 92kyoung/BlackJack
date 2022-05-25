
export default class Dealer {
    constructor(){
        this.cards = [];
    }

    addCard(card){
        this.cards.push(card);
    }

    getCard(){
        return this.cards;
    }
}