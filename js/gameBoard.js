import index from "js/index.js";

function init(){
    // 배팅 금액 값 가져오기
    index.setup(document.getElementById('bettingCost'));

    getBettingCost(){
        
    }
    // deck 섞기
    shuffle();
    // 카드 2장씩 나눠주기
    hit();
    hit();
    // 유저 카드는 다 보여주기
    displayUserCard();
    // 딜러 카드 보여주기
    displayDillerCard();
}


function hit() {
    // deck에서 카드 한장씩 딜러 유저 나눠주기
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