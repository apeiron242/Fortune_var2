var topSubmit = document.querySelector("#topSubmit");
var bottomSubmit = document.querySelector("#bottomSubmit");
var variableSubmit = document.querySelector("#variableSubmit");

topSubmit.addEventListener("click", print)
bottomSubmit.addEventListener("click", print2)
variableSubmit.addEventListener("click", print3)

function getRandom(){
    document.querySelector("#top").value = Math.round(Math.random() * 7 + 1)
    document.querySelector("#bottom").value = Math.round(Math.random() * 7 + 1)
    document.querySelector("#variable").value = Math.round(Math.random() * 5 + 1)
    print();
    print2();
    print3();
}

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

function print3(){
    if (document.querySelector("#variable").value == 1){
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
    }
}