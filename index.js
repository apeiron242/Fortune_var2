const submitAll = document.querySelector('#submitAll')

submitAll.addEventListener("click", print);
submitAll.addEventListener("click", print2);
submitAll.addEventListener("click", print3);
submitAll.addEventListener("click", print4);
submitAll.addEventListener("click", print5);
submitAll.addEventListener("click", print6);
submitAll.addEventListener("click", print7);
submitAll.addEventListener("click", showFinalResult);

var topPic = document.querySelector("#topPic");
var bottomPic = document.querySelector("#bottomPic");
var variableTopPic = document.querySelector("#variableTopPic");
var variableBottomPic = document.querySelector("#variableBottomPic");

var now = new Date();
var day = now.getDate();
var month = now.getMonth() + 1;
var year = now.getFullYear();
var time = now.getHours();
var minutes = now.getMinutes();

function getText(){
    var text = document.querySelector("#text").value;
    document.querySelector("#고민").innerHTML = "고민 내용: " + text;
    document.querySelector("#시간").innerHTML = "시간: " + year + "년 " + month + "월 " + day + "일 " + time + ":" + minutes;
    document.querySelector("#text").value = "";
}

function getRandom(){
    document.querySelector("#top").value = Math.round(Math.random() * 7 + 1);
    document.querySelector("#bottom").value = Math.round(Math.random() * 7 + 1);
    document.querySelector("#variable").value = Math.round(Math.random() * 5 + 1);
    print();
    print2();
    print3();
    print4();
    print5();
    print6();
    print7();
    showFinalResult();
}


// 상괘 구하는 함수
function print(){
    if (document.querySelector("#top").value == 1){
        document.querySelector("#showTop > img").setAttribute("src", "./pics/건.png")
    } else if(document.querySelector("#top").value == 2){
        document.querySelector("#showTop > img").setAttribute("src", "./pics/태.png")
    } else if(document.querySelector("#top").value == 3){
        document.querySelector("#showTop > img").setAttribute("src", "./pics/리.png")
    } else if(document.querySelector("#top").value == 4){
        document.querySelector("#showTop > img").setAttribute("src", "./pics/진.png")
    } else if(document.querySelector("#top").value == 5){
        document.querySelector("#showTop > img").setAttribute("src", "./pics/손.png")
    } else if(document.querySelector("#top").value == 6){
        document.querySelector("#showTop > img").setAttribute("src", "./pics/감.png")
    } else if(document.querySelector("#top").value == 7){
        document.querySelector("#showTop > img").setAttribute("src", "./pics/간.png")
    } else if(document.querySelector("#top").value == 8){
        document.querySelector("#showTop > img").setAttribute("src", "./pics/곤.png")
    } else {
        alert("1부터 8까지의 숫자를 입력하세요")
    }
}


//하괘 구하는 함수
function print2(){
    if (document.querySelector("#bottom").value == 1){
        document.querySelector("#showBottom > img").setAttribute("src", "./pics/건.png")
    } else if(document.querySelector("#bottom").value == 2){
        document.querySelector("#showBottom > img").setAttribute("src", "./pics/태.png")
    } else if(document.querySelector("#bottom").value == 3){
        document.querySelector("#showBottom > img").setAttribute("src", "./pics/리.png")
    } else if(document.querySelector("#bottom").value == 4){
        document.querySelector("#showBottom > img").setAttribute("src", "./pics/진.png")
    } else if(document.querySelector("#bottom").value == 5){
        document.querySelector("#showBottom > img").setAttribute("src", "./pics/손.png")
    } else if(document.querySelector("#bottom").value == 6){
        document.querySelector("#showBottom > img").setAttribute("src", "./pics/감.png")
    } else if(document.querySelector("#bottom").value == 7){
        document.querySelector("#showBottom > img").setAttribute("src", "./pics/간.png")
    } else if(document.querySelector("#bottom").value == 8){
        document.querySelector("#showBottom > img").setAttribute("src", "./pics/곤.png")
    } else {
        alert("1부터 8까지의 숫자를 입력하세요")
    }
}


//동효와 변괘 구하는 함수
function print3(){
    if (document.querySelector("#variable").value == 1){
        var getTop = topPic.getAttribute("src");
        variableTopPic.setAttribute("src", getTop);
        if(document.querySelector("#bottom").value == 1){
            document.querySelector("#variableBottom > img").setAttribute("src", "./pics/손.png");
        } else if (document.querySelector("#bottom").value == 2){
            document.querySelector("#variableBottom > img").setAttribute("src", "./pics/감.png")
        } else if (document.querySelector("#bottom").value == 3){
            document.querySelector("#variableBottom > img").setAttribute("src", "./pics/간.png")
        } else if (document.querySelector("#bottom").value == 4){
            document.querySelector("#variableBottom > img").setAttribute("src", "./pics/곤.png")
        } else if (document.querySelector("#bottom").value == 5){
            document.querySelector("#variableBottom > img").setAttribute("src", "./pics/건.png")
        } else if (document.querySelector("#bottom").value == 6){
            document.querySelector("#variableBottom > img").setAttribute("src", "./pics/태.png")
        } else if (document.querySelector("#bottom").value == 7){
            document.querySelector("#variableBottom > img").setAttribute("src", "./pics/리.png")
        } else if (document.querySelector("#bottom").value == 8){
            document.querySelector("#variableBottom > img").setAttribute("src", "./pics/진.png")
        } 
    } else if (document.querySelector("#variable").value == 2){
        var getTop = topPic.getAttribute("src");
        variableTopPic.setAttribute("src", getTop)
        if(document.querySelector("#bottom").value == 1){
            document.querySelector("#variableBottom > img").setAttribute("src", "./pics/리.png");
        } else if (document.querySelector("#bottom").value == 2){
            document.querySelector("#variableBottom > img").setAttribute("src", "./pics/진.png")
        } else if (document.querySelector("#bottom").value == 3){
            document.querySelector("#variableBottom > img").setAttribute("src", "./pics/건.png")
        } else if (document.querySelector("#bottom").value == 4){
            document.querySelector("#variableBottom > img").setAttribute("src", "./pics/태.png")
        } else if (document.querySelector("#bottom").value == 5){
            document.querySelector("#variableBottom > img").setAttribute("src", "./pics/간.png")
        } else if (document.querySelector("#bottom").value == 6){
            document.querySelector("#variableBottom > img").setAttribute("src", "./pics/곤.png")
        } else if (document.querySelector("#bottom").value == 7){
            document.querySelector("#variableBottom > img").setAttribute("src", "./pics/손.png")
        } else if (document.querySelector("#bottom").value == 8){
            document.querySelector("#variableBottom > img").setAttribute("src", "./pics/감.png")
        } 
    } else if (document.querySelector("#variable").value == 3){
        var getTop = topPic.getAttribute("src");
        variableTopPic.setAttribute("src", getTop)
        if(document.querySelector("#bottom").value == 1){
            document.querySelector("#variableBottom > img").setAttribute("src", "./pics/태.png");
        } else if (document.querySelector("#bottom").value == 2){
            document.querySelector("#variableBottom > img").setAttribute("src", "./pics/건.png")
        } else if (document.querySelector("#bottom").value == 3){
            document.querySelector("#variableBottom > img").setAttribute("src", "./pics/진.png")
        } else if (document.querySelector("#bottom").value == 4){
            document.querySelector("#variableBottom > img").setAttribute("src", "./pics/리.png")
        } else if (document.querySelector("#bottom").value == 5){
            document.querySelector("#variableBottom > img").setAttribute("src", "./pics/감.png")
        } else if (document.querySelector("#bottom").value == 6){
            document.querySelector("#variableBottom > img").setAttribute("src", "./pics/손.png")
        } else if (document.querySelector("#bottom").value == 7){
            document.querySelector("#variableBottom > img").setAttribute("src", "./pics/곤.png")
        } else if (document.querySelector("#bottom").value == 8){
            document.querySelector("#variableBottom > img").setAttribute("src", "./pics/간.png")
        } 
    } else if (document.querySelector("#variable").value == 4){
        var getBottom = bottomPic.getAttribute("src");
        variableBottomPic.setAttribute("src", getBottom);
        if(document.querySelector("#top").value == 1){
            document.querySelector("#variableTop > img").setAttribute("src", "./pics/손.png");
        } else if (document.querySelector("#top").value == 2){
            document.querySelector("#variableTop > img").setAttribute("src", "./pics/감.png");
        } else if (document.querySelector("#top").value == 3){
            document.querySelector("#variableTop > img").setAttribute("src", "./pics/간.png");
        } else if (document.querySelector("#top").value == 4){
            document.querySelector("#variableTop > img").setAttribute("src", "./pics/곤.png");
        } else if (document.querySelector("#top").value == 5){
            document.querySelector("#variableTop > img").setAttribute("src", "./pics/건.png");
        } else if (document.querySelector("#top").value == 6){
            document.querySelector("#variableTop > img").setAttribute("src", "./pics/태.png");
        } else if (document.querySelector("#top").value == 7){
            document.querySelector("#variableTop > img").setAttribute("src", "./pics/리.png");
        } else if (document.querySelector("#top").value == 8){
            document.querySelector("#variableTop > img").setAttribute("src", "./pics/진.png");
        } 
    } else if (document.querySelector("#variable").value == 5){
        var getBottom = bottomPic.getAttribute("src");
        variableBottomPic.setAttribute("src", getBottom);
        if(document.querySelector("#top").value == 1){
            document.querySelector("#variableTop > img").setAttribute("src", "./pics/리.png");
        } else if (document.querySelector("#top").value == 2){
            document.querySelector("#variableTop > img").setAttribute("src", "./pics/진.png");
        } else if (document.querySelector("#top").value == 3){
            document.querySelector("#variableTop > img").setAttribute("src", "./pics/건.png");
        } else if (document.querySelector("#top").value == 4){
            document.querySelector("#variableTop > img").setAttribute("src", "./pics/태.png");
        } else if (document.querySelector("#top").value == 5){
            document.querySelector("#variableTop > img").setAttribute("src", "./pics/간.png");
        } else if (document.querySelector("#top").value == 6){
            document.querySelector("#variableTop > img").setAttribute("src", "./pics/곤.png");
        } else if (document.querySelector("#top").value == 7){
            document.querySelector("#variableTop > img").setAttribute("src", "./pics/손.png");
        } else if (document.querySelector("#top").value == 8){
            document.querySelector("#variableTop > img").setAttribute("src", "./pics/감.png");
        } 
    } else if (document.querySelector("#variable").value == 6){
        var getBottom = bottomPic.getAttribute("src");
        variableBottomPic.setAttribute("src", getBottom);
        if(document.querySelector("#top").value == 1){
            document.querySelector("#variableTop > img").setAttribute("src", "./pics/태.png");
        } else if (document.querySelector("#top").value == 2){
            document.querySelector("#variableTop > img").setAttribute("src", "./pics/건.png");
        } else if (document.querySelector("#top").value == 3){
            document.querySelector("#variableTop > img").setAttribute("src", "./pics/진.png");
        } else if (document.querySelector("#top").value == 4){
            document.querySelector("#variableTop > img").setAttribute("src", "./pics/리.png");
        } else if (document.querySelector("#top").value == 5){
            document.querySelector("#variableTop > img").setAttribute("src", "./pics/감.png");
        } else if (document.querySelector("#top").value == 6){
            document.querySelector("#variableTop > img").setAttribute("src", "./pics/손.png");
        } else if (document.querySelector("#top").value == 7){
            document.querySelector("#variableTop > img").setAttribute("src", "./pics/곤.png");
        } else if (document.querySelector("#top").value == 8){
            document.querySelector("#variableTop > img").setAttribute("src", "./pics/간.png");
        }
    } else {
        alert("1부터 6까지의 숫자를 입력하세요");
    }
}

// 나의 괘 구하기
function print4(){
    const variable = document.querySelector("#variable").value;
    const resultMe = document.querySelector("#resultMe > img");
    if(variable == 1 || variable == 2 || variable == 3){
        if (document.querySelector("#top").value == 1){
            resultMe.setAttribute("src", "./pics/건.png")
        } else if(document.querySelector("#top").value == 2){
            resultMe.setAttribute("src", "./pics/태.png")
        } else if(document.querySelector("#top").value == 3){
            resultMe.setAttribute("src", "./pics/리.png")
        } else if(document.querySelector("#top").value == 4){
            resultMe.setAttribute("src", "./pics/진.png")
        } else if(document.querySelector("#top").value == 5){
            resultMe.setAttribute("src", "./pics/손.png")
        } else if(document.querySelector("#top").value == 6){
            resultMe.setAttribute("src", "./pics/감.png")
        } else if(document.querySelector("#top").value == 7){
            resultMe.setAttribute("src", "./pics/간.png")
        } else {
            resultMe.setAttribute("src", "./pics/곤.png")
        }
    } else {
        if (document.querySelector("#bottom").value == 1){
            resultMe.setAttribute("src", "./pics/건.png")
        } else if(document.querySelector("#bottom").value == 2){
            resultMe.setAttribute("src", "./pics/태.png")
        } else if(document.querySelector("#bottom").value == 3){
            resultMe.setAttribute("src", "./pics/리.png")
        } else if(document.querySelector("#bottom").value == 4){
            resultMe.setAttribute("src", "./pics/진.png")
        } else if(document.querySelector("#bottom").value == 5){
            resultMe.setAttribute("src", "./pics/손.png")
        } else if(document.querySelector("#bottom").value == 6){
            resultMe.setAttribute("src", "./pics/감.png")
        } else if(document.querySelector("#bottom").value == 7){
            resultMe.setAttribute("src", "./pics/간.png")
        } else {
            resultMe.setAttribute("src", "./pics/곤.png")
        }
    }
}

// 현재 상태 구하기
function print5(){
    const variable = document.querySelector("#variable").value;
    const resultNow = document.querySelector("#resultNow > img");
    if(variable == 1 || variable == 2 || variable == 3){
        if (document.querySelector("#bottom").value == 1){
            resultNow.setAttribute("src", "./pics/건.png")
        } else if(document.querySelector("#bottom").value == 2){
            resultNow.setAttribute("src", "./pics/태.png")
        } else if(document.querySelector("#bottom").value == 3){
            resultNow.setAttribute("src", "./pics/리.png")
        } else if(document.querySelector("#bottom").value == 4){
            resultNow.setAttribute("src", "./pics/진.png")
        } else if(document.querySelector("#bottom").value == 5){
            resultNow.setAttribute("src", "./pics/손.png")
        } else if(document.querySelector("#bottom").value == 6){
            resultNow.setAttribute("src", "./pics/감.png")
        } else if(document.querySelector("#bottom").value == 7){
            resultNow.setAttribute("src", "./pics/간.png")
        } else {
            resultNow.setAttribute("src", "./pics/곤.png")
        }
    } else {
        if (document.querySelector("#top").value == 1){
           resultNow.setAttribute("src", "./pics/건.png")
        } else if(document.querySelector("#top").value == 2){
           resultNow.setAttribute("src", "./pics/태.png")
        } else if(document.querySelector("#top").value == 3){
           resultNow.setAttribute("src", "./pics/리.png")
        } else if(document.querySelector("#top").value == 4){
           resultNow.setAttribute("src", "./pics/진.png")
        } else if(document.querySelector("#top").value == 5){
           resultNow.setAttribute("src", "./pics/손.png")
        } else if(document.querySelector("#top").value == 6){
           resultNow.setAttribute("src", "./pics/감.png")
        } else if(document.querySelector("#top").value == 7){
           resultNow.setAttribute("src", "./pics/간.png")
        } else if(document.querySelector("#top").value == 8){
           resultNow.setAttribute("src", "./pics/곤.png")
        }
    }
}

// 점의 결과 구하기
function print6(){
    const variable = document.querySelector("#variable").value;
    const resultFuture = document.querySelector("#resultFuture > img");
    if (document.querySelector("#variable").value == 1){
        var getTop = topPic.getAttribute("src");
        variableTopPic.setAttribute("src", getTop);
        if(document.querySelector("#bottom").value == 1){
            resultFuture.setAttribute("src", "./pics/손.png");
        } else if (document.querySelector("#bottom").value == 2){
            resultFuture.setAttribute("src", "./pics/감.png")
        } else if (document.querySelector("#bottom").value == 3){
            resultFuture.setAttribute("src", "./pics/간.png")
        } else if (document.querySelector("#bottom").value == 4){
            resultFuture.setAttribute("src", "./pics/곤.png")
        } else if (document.querySelector("#bottom").value == 5){
            resultFuture.setAttribute("src", "./pics/건.png")
        } else if (document.querySelector("#bottom").value == 6){
            resultFuture.setAttribute("src", "./pics/태.png")
        } else if (document.querySelector("#bottom").value == 7){
            resultFuture.setAttribute("src", "./pics/리.png")
        } else if (document.querySelector("#bottom").value == 8){
            resultFuture.setAttribute("src", "./pics/진.png")
        } 
    } else if (document.querySelector("#variable").value == 2){
        var getTop = topPic.getAttribute("src");
        variableTopPic.setAttribute("src", getTop)
        if(document.querySelector("#bottom").value == 1){
            resultFuture.setAttribute("src", "./pics/리.png");
        } else if (document.querySelector("#bottom").value == 2){
            resultFuture.setAttribute("src", "./pics/진.png")
        } else if (document.querySelector("#bottom").value == 3){
            resultFuture.setAttribute("src", "./pics/건.png")
        } else if (document.querySelector("#bottom").value == 4){
            resultFuture.setAttribute("src", "./pics/태.png")
        } else if (document.querySelector("#bottom").value == 5){
            resultFuture.setAttribute("src", "./pics/간.png")
        } else if (document.querySelector("#bottom").value == 6){
            resultFuture.setAttribute("src", "./pics/곤.png")
        } else if (document.querySelector("#bottom").value == 7){
            resultFuture.setAttribute("src", "./pics/손.png")
        } else if (document.querySelector("#bottom").value == 8){
            resultFuture.setAttribute("src", "./pics/감.png")
        } 
    } else if (document.querySelector("#variable").value == 3){
        var getTop = topPic.getAttribute("src");
        variableTopPic.setAttribute("src", getTop)
        if(document.querySelector("#bottom").value == 1){
            resultFuture.setAttribute("src", "./pics/태.png");
        } else if (document.querySelector("#bottom").value == 2){
            resultFuture.setAttribute("src", "./pics/건.png")
        } else if (document.querySelector("#bottom").value == 3){
            resultFuture.setAttribute("src", "./pics/진.png")
        } else if (document.querySelector("#bottom").value == 4){
            resultFuture.setAttribute("src", "./pics/리.png")
        } else if (document.querySelector("#bottom").value == 5){
            resultFuture.setAttribute("src", "./pics/감.png")
        } else if (document.querySelector("#bottom").value == 6){
            resultFuture.setAttribute("src", "./pics/손.png")
        } else if (document.querySelector("#bottom").value == 7){
            resultFuture.setAttribute("src", "./pics/곤.png")
        } else if (document.querySelector("#bottom").value == 8){
            resultFuture.setAttribute("src", "./pics/간.png")
        } 
    } else if (document.querySelector("#variable").value == 4){
        var getBottom = bottomPic.getAttribute("src");
        variableBottomPic.setAttribute("src", getBottom);
        if(document.querySelector("#top").value == 1){
            resultFuture.setAttribute("src", "./pics/손.png");
        } else if (document.querySelector("#top").value == 2){
            resultFuture.setAttribute("src", "./pics/감.png");
        } else if (document.querySelector("#top").value == 3){
            resultFuture.setAttribute("src", "./pics/간.png");
        } else if (document.querySelector("#top").value == 4){
            resultFuture.setAttribute("src", "./pics/곤.png");
        } else if (document.querySelector("#top").value == 5){
            resultFuture.setAttribute("src", "./pics/건.png");
        } else if (document.querySelector("#top").value == 6){
            resultFuture.setAttribute("src", "./pics/태.png");
        } else if (document.querySelector("#top").value == 7){
            resultFuture.setAttribute("src", "./pics/리.png");
        } else if (document.querySelector("#top").value == 8){
            resultFuture.setAttribute("src", "./pics/진.png");
        } 
    } else if (document.querySelector("#variable").value == 5){
        var getBottom = bottomPic.getAttribute("src");
        variableBottomPic.setAttribute("src", getBottom);
        if(document.querySelector("#top").value == 1){
            resultFuture.setAttribute("src", "./pics/리.png");
        } else if (document.querySelector("#top").value == 2){
            resultFuture.setAttribute("src", "./pics/진.png");
        } else if (document.querySelector("#top").value == 3){
            resultFuture.setAttribute("src", "./pics/건.png");
        } else if (document.querySelector("#top").value == 4){
            resultFuture.setAttribute("src", "./pics/태.png");
        } else if (document.querySelector("#top").value == 5){
            resultFuture.setAttribute("src", "./pics/간.png");
        } else if (document.querySelector("#top").value == 6){
            resultFuture.setAttribute("src", "./pics/곤.png");
        } else if (document.querySelector("#top").value == 7){
            resultFuture.setAttribute("src", "./pics/손.png");
        } else if (document.querySelector("#top").value == 8){
            resultFuture.setAttribute("src", "./pics/감.png");
        } 
    } else if (document.querySelector("#variable").value == 6){
        var getBottom = bottomPic.getAttribute("src");
        variableBottomPic.setAttribute("src", getBottom);
        if(document.querySelector("#top").value == 1){
            resultFuture.setAttribute("src", "./pics/태.png");
        } else if (document.querySelector("#top").value == 2){
            resultFuture.setAttribute("src", "./pics/건.png");
        } else if (document.querySelector("#top").value == 3){
            resultFuture.setAttribute("src", "./pics/진.png");
        } else if (document.querySelector("#top").value == 4){
            resultFuture.setAttribute("src", "./pics/리.png");
        } else if (document.querySelector("#top").value == 5){
            resultFuture.setAttribute("src", "./pics/감.png");
        } else if (document.querySelector("#top").value == 6){
            resultFuture.setAttribute("src", "./pics/손.png");
        } else if (document.querySelector("#top").value == 7){
            resultFuture.setAttribute("src", "./pics/곤.png");
        } else if (document.querySelector("#top").value == 8){
            resultFuture.setAttribute("src", "./pics/간.png");
        }
    }
}

function print7(){
    const variable = document.querySelector("#variable").value;
    const top = document.querySelector("#top").value;
    const bottom = document.querySelector("#bottom").value;
    const explain = document.querySelector('#explain');
    const explainResult = document.querySelector('#explainResult');
    const resultMe = document.querySelector("#resultMe > img");
    const resultNow = document.querySelector("#resultNow > img");
    const resultFuture = document.querySelector('#resultFuture > img');

    if(resultMe.getAttribute('src') == "./pics/건.png"){
        console.log(resultMe.getAttribute('src'))
        if(resultNow.getAttribute('src') == "./pics/건.png"){
            explain.innerHTML = "현재 상황은 매우 좋습니다!"
        } else if(resultNow.getAttribute('src') == "./pics/태.png"){
            explain.innerHTML = "현재 상황은 매우 좋습니다!"
        } else if(resultNow.getAttribute('src') == "./pics/리.png"){
            explain.innerHTML = "현재 상황은 매우 안 좋습니다. 결과가 너무 좋지 않은 이상 이 선택을 피해야 합니다"
        } else if(resultNow.getAttribute('src') == "./pics/진.png"){
            explain.innerHTML = "현재 상황은 조금 어려움이 있으나 헤처나갈 수 있는 어려움입니다"
        } else if(resultNow.getAttribute('src') == "./pics/손.png"){
            explain.innerHTML = "현재 상황은 조금 어려움이 있으나 헤처나갈 수 있는 어려움입니다"
        } else if(resultNow.getAttribute('src') == "./pics/감.png"){
            explain.innerHTML = "현재 상황은 좋지 않으며, 많은 에너지 소모를 겪을 것입니다"
        } else if(resultNow.getAttribute('src') == "./pics/간.png"){
            explain.innerHTML = "현재 상황은 이보다 더 좋을 수 없습니다!"
        } else {
            explain.innerHTML = "현재 상황은 이보다 더 좋을 수 없습니다!"
        }
    } else if(resultMe.getAttribute('src') == "./pics/태.png"){
        if(resultNow.getAttribute('src') == "./pics/건.png"){
            explain.innerHTML = "현재 상황은 매우 좋습니다"
        } else if(resultNow.getAttribute('src') == "./pics/태.png"){
            explain.innerHTML = "현재 상황은 매우 좋습니다"
        } else if(resultNow.getAttribute('src') == "./pics/리.png"){
            explain.innerHTML = "현재 상황은 매우 안 좋습니다. 결과가 너무 좋지 않은 이상 이 선택을 피해야 합니다"
        } else if(resultNow.getAttribute('src') == "./pics/진.png"){
            explain.innerHTML = "현재 상황은 조금 어려움이 있으나 헤처나갈 수 있는 어려움입니다"
        } else if(resultNow.getAttribute('src') == "./pics/손.png"){
            explain.innerHTML = "현재 상황은 조금 어려움이 있으나 헤처나갈 수 있는 어려움입니다"
        } else if(resultNow.getAttribute('src') == "./pics/감.png"){
            explain.innerHTML = "현재 상황은 좋지 않으며, 많은 에너지 소모를 겪을 것입니다"
        } else if(resultNow.getAttribute('src') == "./pics/간.png"){
            explain.innerHTML = "현재 상황은 이보다 더 좋을 수 없습니다!"
        } else {
            explain.innerHTML = "현재 상황은 이보다 더 좋을 수 없습니다!"
        }
    } else if(resultMe.getAttribute('src') == "./pics/리.png"){
        if(resultNow.getAttribute('src') == "./pics/건.png"){
            explain.innerHTML = "현재 상황은 조금 어려움이 있으나 헤처나갈 수 있는 어려움입니다"
        } else if(resultNow.getAttribute('src') == "./pics/태.png"){
            explain.innerHTML = "현재 상황은 조금 어려움이 있으나 헤처나갈 수 있는 어려움입니다"
        } else if(resultNow.getAttribute('src') == "./pics/리.png"){
            explain.innerHTML = "현재 상황은 매우 좋습니다"
        } else if(resultNow.getAttribute('src') == "./pics/진.png"){
            explain.innerHTML = "현재 상황은 이보다 더 좋을 수 없습니다!"
        } else if(resultNow.getAttribute('src') == "./pics/손.png"){
            explain.innerHTML = "현재 상황은 이보다 더 좋을 수 없습니다!"
        } else if(resultNow.getAttribute('src') == "./pics/감.png"){
            explain.innerHTML = "현재 상황은 매우 안 좋습니다. 결과가 너무 좋지 않은 이상 이 선택을 피해야 합니다"
        } else if(resultNow.getAttribute('src') == "./pics/간.png"){
            explain.innerHTML = "현재 상황은 좋지 않으며, 많은 에너지 소모를 겪을 것입니다"
        } else {
            explain.innerHTML = "현재 상황은 좋지 않으며, 많은 에너지 소모를 겪을 것입니다"
        }
    } else if(resultMe.getAttribute('src') == "./pics/진.png"){
        if(resultNow.getAttribute('src') == "./pics/건.png"){
            explain.innerHTML = "현재 상황은 매우 안 좋습니다. 결과가 너무 좋지 않은 이상 이 선택을 피해야 합니다"
        } else if(resultNow.getAttribute('src') == "./pics/태.png"){
            explain.innerHTML = "현재 상황은 매우 안 좋습니다. 결과가 너무 좋지 않은 이상 이 선택을 피해야 합니다"
        } else if(resultNow.getAttribute('src') == "./pics/리.png"){
            explain.innerHTML = "현재 상황은 좋지 않으며, 많은 에너지 소모를 겪을 것입니다"
        } else if(resultNow.getAttribute('src') == "./pics/진.png"){
            explain.innerHTML = "현재 상황은 매우 좋습니다"
        } else if(resultNow.getAttribute('src') == "./pics/손.png"){
            explain.innerHTML = "현재 상황은 매우 좋습니다"
        } else if(resultNow.getAttribute('src') == "./pics/감.png"){
            explain.innerHTML = "현재 상황은 이보다 더 좋을 수 없습니다!"
        } else if(resultNow.getAttribute('src') == "./pics/간.png"){
            explain.innerHTML = "현재 상황은 조금 어려움이 있으나 헤처나갈 수 있는 어려움입니다"
        } else {
            explain.innerHTML = "현재 상황은 조금 어려움이 있으나 헤처나갈 수 있는 어려움입니다"
        }
    } else if(resultMe.getAttribute('src') == "./pics/손.png"){
        if(resultNow.getAttribute('src') == "./pics/건.png"){
            explain.innerHTML = "현재 상황은 매우 안 좋습니다. 결과가 너무 좋지 않은 이상 이 선택을 피해야 합니다"
        } else if(resultNow.getAttribute('src') == "./pics/태.png"){
            explain.innerHTML = "현재 상황은 매우 안 좋습니다. 결과가 너무 좋지 않은 이상 이 선택을 피해야 합니다"
        } else if(resultNow.getAttribute('src') == "./pics/리.png"){
            explain.innerHTML = "현재 상황은 좋지 않으며, 많은 에너지 소모를 겪을 것입니다"
        } else if(resultNow.getAttribute('src') == "./pics/진.png"){
            explain.innerHTML = "현재 상황은 매우 좋습니다"
        } else if(resultNow.getAttribute('src') == "./pics/손.png"){
            explain.innerHTML = "현재 상황은 매우 좋습니다"
        } else if(resultNow.getAttribute('src') == "./pics/감.png"){
            explain.innerHTML = "현재 상황은 이보다 더 좋을 수 없습니다!"
        } else if(resultNow.getAttribute('src') == "./pics/간.png"){
            explain.innerHTML = "현재 상황은 조금 어려움이 있으나 헤처나갈 수 있는 어려움입니다"
        } else {
            explain.innerHTML = "현재 상황은 조금 어려움이 있으나 헤처나갈 수 있는 어려움입니다"
        }
    } else if(resultMe.getAttribute('src') == "./pics/감.png"){
        if(resultNow.getAttribute('src') == "./pics/건.png"){
            explain.innerHTML = "현재 상황은 이보다 더 좋을 수 없습니다!"
        } else if(resultNow.getAttribute('src') == "./pics/태.png"){
            explain.innerHTML = "현재 상황은 이보다 더 좋을 수 없습니다!"
        } else if(resultNow.getAttribute('src') == "./pics/리.png"){
            explain.innerHTML = "현재 상황은 조금 어려움이 있으나 헤처나갈 수 있는 어려움입니다"
        } else if(resultNow.getAttribute('src') == "./pics/진.png"){
            explain.innerHTML = "현재 상황은 좋지 않으며, 많은 에너지 소모를 겪을 것입니다"
        } else if(resultNow.getAttribute('src') == "./pics/손.png"){
            explain.innerHTML = "현재 상황은 좋지 않으며, 많은 에너지 소모를 겪을 것입니다"
        } else if(resultNow.getAttribute('src') == "./pics/감.png"){
            explain.innerHTML = "현재 상황은 매우 좋습니다"
        } else if(resultNow.getAttribute('src') == "./pics/간.png"){
            explain.innerHTML = "현재 상황은 매우 안 좋습니다. 결과가 너무 좋지 않은 이상 이 선택을 피해야 합니다"
        } else {
            explain.innerHTML = "현재 상황은 매우 안 좋습니다. 결과가 너무 좋지 않은 이상 이 선택을 피해야 합니다"
        }
    } else if(resultMe.getAttribute('src') == "./pics/간.png"){
        if(resultNow.getAttribute('src') == "./pics/건.png"){
            explain.innerHTML = "현재 상황은 좋지 않으며, 많은 에너지 소모를 겪을 것입니다"
        } else if(resultNow.getAttribute('src') == "./pics/태.png"){
            explain.innerHTML = "현재 상황은 좋지 않으며, 많은 에너지 소모를 겪을 것입니다"
        } else if(resultNow.getAttribute('src') == "./pics/리.png"){
            explain.innerHTML = "현재 상황은 이보다 더 좋을 수 없습니다!"
        } else if(resultNow.getAttribute('src') == "./pics/진.png"){
            explain.innerHTML = "현재 상황은 매우 안 좋습니다. 결과가 너무 좋지 않은 이상 이 선택을 피해야 합니다"
        } else if(resultNow.getAttribute('src') == "./pics/손.png"){
            explain.innerHTML = "현재 상황은 매우 안 좋습니다. 결과가 너무 좋지 않은 이상 이 선택을 피해야 합니다"
        } else if(resultNow.getAttribute('src') == "./pics/감.png"){
            explain.innerHTML = "현재 상황은 조금 어려움이 있으나 헤처나갈 수 있는 어려움입니다"
        } else if(resultNow.getAttribute('src') == "./pics/간.png"){
            explain.innerHTML = "현재 상황은 매우 좋습니다"
        } else {
            explain.innerHTML = "현재 상황은 매우 좋습니다"
        }
    } else if(resultMe.getAttribute('src') == "./pics/곤.png"){
        if(resultNow.getAttribute('src') == "./pics/건.png"){
            explain.innerHTML = "현재 상황은 좋지 않으며, 많은 에너지 소모를 겪을 것입니다"
        } else if(resultNow.getAttribute('src') == "./pics/태.png"){
            explain.innerHTML = "현재 상황은 좋지 않으며, 많은 에너지 소모를 겪을 것입니다"
        } else if(resultNow.getAttribute('src') == "./pics/리.png"){
            explain.innerHTML = "현재 상황은 이보다 더 좋을 수 없습니다!"
        } else if(resultNow.getAttribute('src') == "./pics/진.png"){
            explain.innerHTML = "현재 상황은 매우 안 좋습니다. 결과가 너무 좋지 않은 이상 이 선택을 피해야 합니다"
        } else if(resultNow.getAttribute('src') == "./pics/손.png"){
            explain.innerHTML = "현재 상황은 매우 안 좋습니다. 결과가 너무 좋지 않은 이상 이 선택을 피해야 합니다"
        } else if(resultNow.getAttribute('src') == "./pics/감.png"){
            explain.innerHTML = "현재 상황은 조금 어려움이 있으나 헤처나갈 수 있는 어려움입니다"
        } else if(resultNow.getAttribute('src') == "./pics/간.png"){
            explain.innerHTML = "현재 상황은 매우 좋습니다"
        } else {
            explain.innerHTML = "현재 상황은 매우 좋습니다"
        }
    }

    if(resultMe.getAttribute('src') == "./pics/건.png"){
        if(resultFuture.getAttribute('src') == "./pics/건.png"){
            explainResult.innerHTML = "현재 상황은 매우 좋습니다!"
        } else if(resultFuture.getAttribute('src') == "./pics/태.png"){
            explainResult.innerHTML = "현재 상황은 매우 좋습니다!"
        } else if(resultFuture.getAttribute('src') == "./pics/리.png"){
            explainResult.innerHTML = "현재 상황은 매우 안 좋습니다. 결과가 너무 좋지 않은 이상 이 선택을 피해야 합니다"
        } else if(resultFuture.getAttribute('src') == "./pics/진.png"){
            explainResult.innerHTML = "현재 상황은 조금 어려움이 있으나 헤처나갈 수 있는 어려움입니다"
        } else if(resultFuture.getAttribute('src') == "./pics/손.png"){
            explainResult.innerHTML = "현재 상황은 조금 어려움이 있으나 헤처나갈 수 있는 어려움입니다"
        } else if(resultFuture.getAttribute('src') == "./pics/감.png"){
            explainResult.innerHTML = "현재 상황은 좋지 않으며, 많은 에너지 소모를 겪을 것입니다"
        } else if(resultFuture.getAttribute('src') == "./pics/간.png"){
            explainResult.innerHTML = "현재 상황은 이보다 더 좋을 수 없습니다!"
        } else {
            explainResult.innerHTML = "현재 상황은 이보다 더 좋을 수 없습니다!"
        }
    } else if(resultMe.getAttribute('src') == "./pics/태.png"){
        if(resultFuture.getAttribute('src') == "./pics/건.png"){
            explainResult.innerHTML = "현재 상황은 매우 좋습니다"
        } else if(resultFuture.getAttribute('src') == "./pics/태.png"){
            explainResult.innerHTML = "현재 상황은 매우 좋습니다"
        } else if(resultFuture.getAttribute('src') == "./pics/리.png"){
            explainResult.innerHTML = "현재 상황은 매우 안 좋습니다. 결과가 너무 좋지 않은 이상 이 선택을 피해야 합니다"
        } else if(resultFuture.getAttribute('src') == "./pics/진.png"){
            explainResult.innerHTML = "현재 상황은 조금 어려움이 있으나 헤처나갈 수 있는 어려움입니다"
        } else if(resultFuture.getAttribute('src') == "./pics/손.png"){
            explainResult.innerHTML = "현재 상황은 조금 어려움이 있으나 헤처나갈 수 있는 어려움입니다"
        } else if(resultFuture.getAttribute('src') == "./pics/감.png"){
            explainResult.innerHTML = "현재 상황은 좋지 않으며, 많은 에너지 소모를 겪을 것입니다"
        } else if(resultFuture.getAttribute('src') == "./pics/간.png"){
            explainResult.innerHTML = "현재 상황은 이보다 더 좋을 수 없습니다!"
        } else {
            explainResult.innerHTML = "현재 상황은 이보다 더 좋을 수 없습니다!"
        }
    } else if(resultMe.getAttribute('src') == "./pics/리.png"){
        if(resultFuture.getAttribute('src') == "./pics/건.png"){
            explainResult.innerHTML = "현재 상황은 조금 어려움이 있으나 헤처나갈 수 있는 어려움입니다"
        } else if(resultFuture.getAttribute('src') == "./pics/태.png"){
            explainResult.innerHTML = "현재 상황은 조금 어려움이 있으나 헤처나갈 수 있는 어려움입니다"
        } else if(resultFuture.getAttribute('src') == "./pics/리.png"){
            explainResult.innerHTML = "현재 상황은 매우 좋습니다"
        } else if(resultFuture.getAttribute('src') == "./pics/진.png"){
            explainResult.innerHTML = "현재 상황은 이보다 더 좋을 수 없습니다!"
        } else if(resultFuture.getAttribute('src') == "./pics/손.png"){
            explainResult.innerHTML = "현재 상황은 이보다 더 좋을 수 없습니다!"
        } else if(resultFuture.getAttribute('src') == "./pics/감.png"){
            explainResult.innerHTML = "현재 상황은 매우 안 좋습니다. 결과가 너무 좋지 않은 이상 이 선택을 피해야 합니다"
        } else if(resultFuture.getAttribute('src') == "./pics/간.png"){
            explainResult.innerHTML = "현재 상황은 좋지 않으며, 많은 에너지 소모를 겪을 것입니다"
        } else {
            explainResult.innerHTML = "현재 상황은 좋지 않으며, 많은 에너지 소모를 겪을 것입니다"
        }
    } else if(resultMe.getAttribute('src') == "./pics/진.png"){
        if(resultFuture.getAttribute('src') == "./pics/건.png"){
            explainResult.innerHTML = "현재 상황은 매우 안 좋습니다. 결과가 너무 좋지 않은 이상 이 선택을 피해야 합니다"
        } else if(resultFuture.getAttribute('src') == "./pics/태.png"){
            explainResult.innerHTML = "현재 상황은 매우 안 좋습니다. 결과가 너무 좋지 않은 이상 이 선택을 피해야 합니다"
        } else if(resultFuture.getAttribute('src') == "./pics/리.png"){
            explainResult.innerHTML = "현재 상황은 좋지 않으며, 많은 에너지 소모를 겪을 것입니다"
        } else if(resultFuture.getAttribute('src') == "./pics/진.png"){
            explainResult.innerHTML = "현재 상황은 매우 좋습니다"
        } else if(resultFuture.getAttribute('src') == "./pics/손.png"){
            explainResult.innerHTML = "현재 상황은 매우 좋습니다"
        } else if(resultFuture.getAttribute('src') == "./pics/감.png"){
            explainResult.innerHTML = "현재 상황은 이보다 더 좋을 수 없습니다!"
        } else if(resultFuture.getAttribute('src') == "./pics/간.png"){
            explainResult.innerHTML = "현재 상황은 조금 어려움이 있으나 헤처나갈 수 있는 어려움입니다"
        } else {
            explainResult.innerHTML = "현재 상황은 조금 어려움이 있으나 헤처나갈 수 있는 어려움입니다"
        }
    } else if(resultMe.getAttribute('src') == "./pics/손.png"){
        if(resultFuture.getAttribute('src') == "./pics/건.png"){
            explainResult.innerHTML = "현재 상황은 매우 안 좋습니다. 결과가 너무 좋지 않은 이상 이 선택을 피해야 합니다"
        } else if(resultFuture.getAttribute('src') == "./pics/태.png"){
            explainResult.innerHTML = "현재 상황은 매우 안 좋습니다. 결과가 너무 좋지 않은 이상 이 선택을 피해야 합니다"
        } else if(resultFuture.getAttribute('src') == "./pics/리.png"){
            explainResult.innerHTML = "현재 상황은 좋지 않으며, 많은 에너지 소모를 겪을 것입니다"
        } else if(resultFuture.getAttribute('src') == "./pics/진.png"){
            explainResult.innerHTML = "현재 상황은 매우 좋습니다"
        } else if(resultFuture.getAttribute('src') == "./pics/손.png"){
            explainResult.innerHTML = "현재 상황은 매우 좋습니다"
        } else if(resultFuture.getAttribute('src') == "./pics/감.png"){
            explainResult.innerHTML = "현재 상황은 이보다 더 좋을 수 없습니다!"
        } else if(resultFuture.getAttribute('src') == "./pics/간.png"){
            explainResult.innerHTML = "현재 상황은 조금 어려움이 있으나 헤처나갈 수 있는 어려움입니다"
        } else {
            explainResult.innerHTML = "현재 상황은 조금 어려움이 있으나 헤처나갈 수 있는 어려움입니다"
        }
    } else if(resultMe.getAttribute('src') == "./pics/감.png"){
        if(resultFuture.getAttribute('src') == "./pics/건.png"){
            explainResult.innerHTML = "현재 상황은 이보다 더 좋을 수 없습니다!"
        } else if(resultFuture.getAttribute('src') == "./pics/태.png"){
            explainResult.innerHTML = "현재 상황은 이보다 더 좋을 수 없습니다!"
        } else if(resultFuture.getAttribute('src') == "./pics/리.png"){
            explainResult.innerHTML = "현재 상황은 조금 어려움이 있으나 헤처나갈 수 있는 어려움입니다"
        } else if(resultFuture.getAttribute('src') == "./pics/진.png"){
            explainResult.innerHTML = "현재 상황은 좋지 않으며, 많은 에너지 소모를 겪을 것입니다"
        } else if(resultFuture.getAttribute('src') == "./pics/손.png"){
            explainResult.innerHTML = "현재 상황은 좋지 않으며, 많은 에너지 소모를 겪을 것입니다"
        } else if(resultFuture.getAttribute('src') == "./pics/감.png"){
            explainResult.innerHTML = "현재 상황은 매우 좋습니다"
        } else if(resultFuture.getAttribute('src') == "./pics/간.png"){
            explainResult.innerHTML = "현재 상황은 매우 안 좋습니다. 결과가 너무 좋지 않은 이상 이 선택을 피해야 합니다"
        } else {
            explainResult.innerHTML = "현재 상황은 매우 안 좋습니다. 결과가 너무 좋지 않은 이상 이 선택을 피해야 합니다"
        }
    } else if(resultMe.getAttribute('src') == "./pics/간.png"){
        if(resultFuture.getAttribute('src') == "./pics/건.png"){
            explainResult.innerHTML = "현재 상황은 좋지 않으며, 많은 에너지 소모를 겪을 것입니다"
        } else if(resultFuture.getAttribute('src') == "./pics/태.png"){
            explainResult.innerHTML = "현재 상황은 좋지 않으며, 많은 에너지 소모를 겪을 것입니다"
        } else if(resultFuture.getAttribute('src') == "./pics/리.png"){
            explainResult.innerHTML = "현재 상황은 이보다 더 좋을 수 없습니다!"
        } else if(resultFuture.getAttribute('src') == "./pics/진.png"){
            explainResult.innerHTML = "현재 상황은 매우 안 좋습니다. 결과가 너무 좋지 않은 이상 이 선택을 피해야 합니다"
        } else if(resultFuture.getAttribute('src') == "./pics/손.png"){
            explainResult.innerHTML = "현재 상황은 매우 안 좋습니다. 결과가 너무 좋지 않은 이상 이 선택을 피해야 합니다"
        } else if(resultFuture.getAttribute('src') == "./pics/감.png"){
            explainResult.innerHTML = "현재 상황은 조금 어려움이 있으나 헤처나갈 수 있는 어려움입니다"
        } else if(resultFuture.getAttribute('src') == "./pics/간.png"){
            explainResult.innerHTML = "현재 상황은 매우 좋습니다"
        } else {
            explainResult.innerHTML = "현재 상황은 매우 좋습니다"
        }
    } else if(resultMe.getAttribute('src') == "./pics/곤.png"){
        if(resultFuture.getAttribute('src') == "./pics/건.png"){
            explainResult.innerHTML = "현재 상황은 좋지 않으며, 많은 에너지 소모를 겪을 것입니다"
        } else if(resultFuture.getAttribute('src') == "./pics/태.png"){
            explainResult.innerHTML = "현재 상황은 좋지 않으며, 많은 에너지 소모를 겪을 것입니다"
        } else if(resultFuture.getAttribute('src') == "./pics/리.png"){
            explainResult.innerHTML = "현재 상황은 이보다 더 좋을 수 없습니다!"
        } else if(resultFuture.getAttribute('src') == "./pics/진.png"){
            explainResult.innerHTML = "현재 상황은 매우 안 좋습니다. 결과가 너무 좋지 않은 이상 이 선택을 피해야 합니다"
        } else if(resultFuture.getAttribute('src') == "./pics/손.png"){
            explainResult.innerHTML = "현재 상황은 매우 안 좋습니다. 결과가 너무 좋지 않은 이상 이 선택을 피해야 합니다"
        } else if(resultFuture.getAttribute('src') == "./pics/감.png"){
            explainResult.innerHTML = "현재 상황은 조금 어려움이 있으나 헤처나갈 수 있는 어려움입니다"
        } else if(resultFuture.getAttribute('src') == "./pics/간.png"){
            explainResult.innerHTML = "현재 상황은 매우 좋습니다"
        } else {
            explainResult.innerHTML = "현재 상황은 매우 좋습니다"
        }
    }
}

function showFinalResult(){
    const finalResult = document.querySelector('#finalResult');
    const interpretation = document.querySelector("#interpretation");

    finalResult.classList.toggle('is-hidden');
    interpretation.classList.toggle('is-hidden')
}