// index.html에서 id=bettingCost 가 넘긴 배팅값을
// gameBoard.js 의 init(){ getBettingCost() } 로 넘겨주기

function start() {
    const bettingCost = document.getElementById('bettingCost').value;
    let textBox = bettingCost;
    
    // textBox !== null || textBox !== undefined
    if(textBox.value.length > 0){
        location.href="gameBoard.html?type='+textBox'";
    }
}

