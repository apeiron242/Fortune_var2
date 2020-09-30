const topSubmit = document.querySelector("#topSubmit");
const bottomSubmit = document.querySelector("#bottomSubmit");
const variableSubmit = document.querySelector("#variableSubmit");

topSubmit.addEventListener("click", print);
bottomSubmit.addEventListener("click", print2);
variableSubmit.addEventListener("click", print3);

var topPic = document.querySelector("#topPic");
var bottomPic = document.querySelector("#bottomPic");
var variableTopPic = document.querySelector("#variableTopPic");
var variableBottomPic = document.querySelector("#variableBottomPic");

function getRandom(){
    document.querySelector("#top").value = Math.round(Math.random() * 7 + 1);
    document.querySelector("#bottom").value = Math.round(Math.random() * 7 + 1);
    document.querySelector("#variable").value = Math.round(Math.random() * 5 + 1);
    print();
    print2();
    print3();
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

