
export default class User {
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