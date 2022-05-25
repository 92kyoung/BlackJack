

export default class Deck {

    constructor(){
        this.deck = [];
    }

    shuffle(){
        let tmpDeck = createCrads();
        while (this.deck.length > 0) {
            this.deck.push(this.tmpDeck.splice(getRandomNum(this.tmpDeck.length), 1)[0]);
        }
    
        this.deck;
    }

    printDeck(){
        console.log(this.deck);
    }
}


function createCrads() {
    let deck = [];
    for(let i=0; i<52; i++){
        deck.push(i);
    }
    return deck;
}

function getRandomNum(maxNum) {
    // 0 ~ maxNum까지에서 random 값 반환
    return Math.floor(Math.random() * maxNum);
}