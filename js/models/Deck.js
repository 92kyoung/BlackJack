

export default class Deck {

    constructor(){
        this.deck = createCrads();
    }

    cardValue(card){
        let cardShape;
        let cardValue;

        switch(Math.floor(card/13)){
            case 0:
                cardShape='spades';
            case 1:
                cardShape='hearts';
            case 2:
                cardShape='diamond';
            case 3:
                cardShape='clubs';
        }

        switch(card % 13){
            case 0:
                cardValue='king';
                break;
            case 1:
                cardValue='ace';
                break;
            case 2:
                cardValue='2';
                break;
            case 3:
                cardValue='3';
                break;
            case 4:
                cardValue='4';
                break;
            case 5:
                cardValue='5';
                break;
            case 6:
                cardValue='6';
                break;
            case 7:
                cardValue='7';
                break;
            case 8:
                cardValue='8';
                break;
            case 9:
                cardValue='9';
                break;
            case 10:
                cardValue='10';
                break;
            case 11:
                cardValue='jack';
                break;
            case 12:
                cardValue='queen';
                break;
            }

            const oneCard = [];
            oneCard.push([cardShape,cardValue]); 
            return oneCard;   
    }

    popCard(){
        // 한장씩 꺼내기
        const poppedCard =this.deck.pop();
        return this.cardValue(poppedCard);
    }

    shuffle(){
        let tmpDeck = [];
        while (this.deck.length > 0) {
            tmpDeck.push(this.deck.splice(getRandomNum(this.deck.length), 1)[0]);
        }
    
        this.deck = tmpDeck;
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

