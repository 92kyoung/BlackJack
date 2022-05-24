import Deck from "./deck.js";

export default class Game {

    constructor(user = new User()){
        this.deck = new Deck();
        this.dealer = new Dealer();
        this.user = user;
        this.init();
    }

    setBetCost(betCost){

    }

    init(){
        // 배팅 금액 값 가져오기
        getBettingCost()
        // deck setting
        // 카드 2장씩 나눠주기
        hit();
        hit();
    }

    hit() {
        // deck에서 딜러 유저 각각 카드 한장씩 나눠주기
        // 이때, diller의 카드 합이 17미만일 경우에만 카드 한장 더 주기
        getOneCard();
    }

    stand() {
        // diller의 카드 합이 17이상이 될때까지 카드 주기
        getOneCard();
    }

    surrender() {
        // 절반으로 삭감
        // 현재 유저 리턴
        return this.user;
    }

    outcome() {
        // 현재 승패가 났는지 확인
        // 유저와 딜러 중 승자 확인
        cardsCalculation(this.user.cards);

        // 0 : 아직 승패가 나지 않음
        // 1 : 유저 승
        // 2 : 딜러 승
        // 3 : 비김
    }
}

function cardsCalculation(cards){
    // 카드 값 계산
    // 결과 2개일 겨우 1개만 RETURN 
}