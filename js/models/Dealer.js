//딜러가 가지고 있어한 변수와 함수
export default class Dealer{
    constructor(){ //변수는 생성자 내에 생성해야함
        this.dealerDeck=[]; //딜러가 가지고 있을 카드
        this.dealerDeckShow=[];
        this.dealerDeckHidden=[];
        this.dealerCardSum=0; //딜러 카드 숫자 합
    }  
}

function displayDealerCard(){
    //딜러가 가지고 있는 첫번째 카드를 보이게 한다.
    dealerDeckShow.push(dealerDeck[0]);
    //나머지는 hidden에 push
    for(let i=1; i<dealerDeck.length; i++){
        dealerDeckHidden.push(dealerDeck[i]);
    }
}

