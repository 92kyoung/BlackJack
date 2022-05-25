

export default class Deck {

    constructor(){
        this.deck = createCrads();
    }

    cardValue(card){
        const cardShape='';
        const cardValue='';

        switch(card/13){
            case 0:
                cardShape='S';
            case 1:
                cardShape='H';
            case 2:
                cardShape='D';
            case 3:
                cardShape='C';
        }

        switch(card % 13){
            case 0:
                cardValue='K';
                break;
            case 1:
                cardValue='1';
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
                cardValue='J';
                break;
            case 12:
                cardValue='Q';
                break;
            }

            const cardTest = [];
            cardTest.push(cardShape,cardValue); 
            return cardTest;   
    }

    popCard(){
        // 한장씩 꺼내기
        const poppedCard =this.deck.pop();
        return poppedCard;
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