import Deck from "./models/Deck.js";
import Dealer from "./models/Dealer.js";
import User from "./models/User.js";

const deck = new Deck();
const dealer = new Dealer();
const user = new User();


function init(){
    // deck 섞기
    deck.shuffle();
    // 카드 2장씩 나눠주기
    hit();
    hit();
    // 유저 카드는 다 보여주기
    displayUserCard();
    // 딜러 카드 보여주기
    displayDillerCard();
}

const userCard = [];  //유저 보유 카드
const dillerCard = []; //딜러 보유 카드

function hit() {
    console.log("hit()");
    const deck= makeCard();
    // deck에서 카드 한장씩 딜러 유저 나눠주기
    const num=Math.floor(Math.random()*52);
    userCard.push(deck[num]);
    //console.log(userCard);
    deck.splice(num,1); //카드가 유저에게 부여되고 나면 해당 카드는 카드 전체 목록에서 삭제
    //console.log(deck);
    // diller의 카드 합이 17미만이면 카드 한장 더 주기
    // if(dillerCard_sum<17){
    //     dillerCard.push(deck[num]);
    // }
    //dillerGetCard();
    // 나눠준 카드 보여주기
    // diller의 카드 합이 17미만이면 카드 한장 더 주기
    dillerGetCard();
    // 나눠준 카드 보여주기
}

function stand() {
    // diller의 카드 합이 17이상이 될때까지 카드 주기
    dillerGetCards();
    // 승패 결정하기
    whoWon();
    // 딜러의 카드 보여주기
    showAllCards();
    // 승패 화면 보여주기
    
}

function surrender() {
    // 절반으로 삭감하고
    // index.html로 이동
}

function cardValueCalculation(card) {
    // card score <= 21 인지 아닌지 계산
    // 스페이드 A일 경우 1일때와 11일 때를 동시에 계산하여 둘 중 21을 넘지 않으면서 가장 큰 값을 리턴 할 것
    // card : 사용자가 현재 보유중인 카드
    let score;
    
    for(let i = 0; i < userCard.length; i++){
        if(userCard[i][0] === '10' || userCard[i][0] === 'J' || userCard[i][0] === 'Q' || userCard[i][0] === 'K'){
            score += 10;
        } else if(userCard[i][0] === 'A'){
            if(score + 11 > 21) score += 1;
            else score += 11;
        } else{
            score += parseInt(userCard[i][0]);
        }
    }
    
    
}