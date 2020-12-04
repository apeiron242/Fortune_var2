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

function getText() {
  var text = document.querySelector("#text").value;
  document.querySelector("#고민").innerHTML = "고민 내용: " + text;
  document.querySelector("#시간").innerHTML =
    "시간: " +
    year +
    "년 " +
    month +
    "월 " +
    day +
    "일 " +
    time +
    ":" +
    minutes;
  document.querySelector("#text").value = "";
}

function submit() {
  print();
  print2();
  print3();
  print4();
  print5();
  print6();
  print7();
  showFinalResult();
  getText();
}

function getRandom() {
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
  getText();
}

// 상괘 구하는 함수
function print() {
  if (document.querySelector("#top").value == 1) {
    document
      .querySelector("#showTop > img")
      .setAttribute("src", "./pics/건.png");
  } else if (document.querySelector("#top").value == 2) {
    document
      .querySelector("#showTop > img")
      .setAttribute("src", "./pics/태.png");
  } else if (document.querySelector("#top").value == 3) {
    document
      .querySelector("#showTop > img")
      .setAttribute("src", "./pics/리.png");
  } else if (document.querySelector("#top").value == 4) {
    document
      .querySelector("#showTop > img")
      .setAttribute("src", "./pics/진.png");
  } else if (document.querySelector("#top").value == 5) {
    document
      .querySelector("#showTop > img")
      .setAttribute("src", "./pics/손.png");
  } else if (document.querySelector("#top").value == 6) {
    document
      .querySelector("#showTop > img")
      .setAttribute("src", "./pics/감.png");
  } else if (document.querySelector("#top").value == 7) {
    document
      .querySelector("#showTop > img")
      .setAttribute("src", "./pics/간.png");
  } else if (document.querySelector("#top").value == 8) {
    document
      .querySelector("#showTop > img")
      .setAttribute("src", "./pics/곤.png");
  } else {
    alert("1부터 8까지의 숫자를 입력하세요");
  }
}

//하괘 구하는 함수
function print2() {
  if (document.querySelector("#bottom").value == 1) {
    document
      .querySelector("#showBottom > img")
      .setAttribute("src", "./pics/건.png");
  } else if (document.querySelector("#bottom").value == 2) {
    document
      .querySelector("#showBottom > img")
      .setAttribute("src", "./pics/태.png");
  } else if (document.querySelector("#bottom").value == 3) {
    document
      .querySelector("#showBottom > img")
      .setAttribute("src", "./pics/리.png");
  } else if (document.querySelector("#bottom").value == 4) {
    document
      .querySelector("#showBottom > img")
      .setAttribute("src", "./pics/진.png");
  } else if (document.querySelector("#bottom").value == 5) {
    document
      .querySelector("#showBottom > img")
      .setAttribute("src", "./pics/손.png");
  } else if (document.querySelector("#bottom").value == 6) {
    document
      .querySelector("#showBottom > img")
      .setAttribute("src", "./pics/감.png");
  } else if (document.querySelector("#bottom").value == 7) {
    document
      .querySelector("#showBottom > img")
      .setAttribute("src", "./pics/간.png");
  } else if (document.querySelector("#bottom").value == 8) {
    document
      .querySelector("#showBottom > img")
      .setAttribute("src", "./pics/곤.png");
  } else {
    alert("1부터 8까지의 숫자를 입력하세요");
  }
}

//동효와 변괘 구하는 함수
function print3() {
  if (document.querySelector("#variable").value == 1) {
    var getTop = topPic.getAttribute("src");
    variableTopPic.setAttribute("src", getTop);
    if (document.querySelector("#bottom").value == 1) {
      document
        .querySelector("#variableBottom > img")
        .setAttribute("src", "./pics/손.png");
    } else if (document.querySelector("#bottom").value == 2) {
      document
        .querySelector("#variableBottom > img")
        .setAttribute("src", "./pics/감.png");
    } else if (document.querySelector("#bottom").value == 3) {
      document
        .querySelector("#variableBottom > img")
        .setAttribute("src", "./pics/간.png");
    } else if (document.querySelector("#bottom").value == 4) {
      document
        .querySelector("#variableBottom > img")
        .setAttribute("src", "./pics/곤.png");
    } else if (document.querySelector("#bottom").value == 5) {
      document
        .querySelector("#variableBottom > img")
        .setAttribute("src", "./pics/건.png");
    } else if (document.querySelector("#bottom").value == 6) {
      document
        .querySelector("#variableBottom > img")
        .setAttribute("src", "./pics/태.png");
    } else if (document.querySelector("#bottom").value == 7) {
      document
        .querySelector("#variableBottom > img")
        .setAttribute("src", "./pics/리.png");
    } else if (document.querySelector("#bottom").value == 8) {
      document
        .querySelector("#variableBottom > img")
        .setAttribute("src", "./pics/진.png");
    }
  } else if (document.querySelector("#variable").value == 2) {
    var getTop = topPic.getAttribute("src");
    variableTopPic.setAttribute("src", getTop);
    if (document.querySelector("#bottom").value == 1) {
      document
        .querySelector("#variableBottom > img")
        .setAttribute("src", "./pics/리.png");
    } else if (document.querySelector("#bottom").value == 2) {
      document
        .querySelector("#variableBottom > img")
        .setAttribute("src", "./pics/진.png");
    } else if (document.querySelector("#bottom").value == 3) {
      document
        .querySelector("#variableBottom > img")
        .setAttribute("src", "./pics/건.png");
    } else if (document.querySelector("#bottom").value == 4) {
      document
        .querySelector("#variableBottom > img")
        .setAttribute("src", "./pics/태.png");
    } else if (document.querySelector("#bottom").value == 5) {
      document
        .querySelector("#variableBottom > img")
        .setAttribute("src", "./pics/간.png");
    } else if (document.querySelector("#bottom").value == 6) {
      document
        .querySelector("#variableBottom > img")
        .setAttribute("src", "./pics/곤.png");
    } else if (document.querySelector("#bottom").value == 7) {
      document
        .querySelector("#variableBottom > img")
        .setAttribute("src", "./pics/손.png");
    } else if (document.querySelector("#bottom").value == 8) {
      document
        .querySelector("#variableBottom > img")
        .setAttribute("src", "./pics/감.png");
    }
  } else if (document.querySelector("#variable").value == 3) {
    var getTop = topPic.getAttribute("src");
    variableTopPic.setAttribute("src", getTop);
    if (document.querySelector("#bottom").value == 1) {
      document
        .querySelector("#variableBottom > img")
        .setAttribute("src", "./pics/태.png");
    } else if (document.querySelector("#bottom").value == 2) {
      document
        .querySelector("#variableBottom > img")
        .setAttribute("src", "./pics/건.png");
    } else if (document.querySelector("#bottom").value == 3) {
      document
        .querySelector("#variableBottom > img")
        .setAttribute("src", "./pics/진.png");
    } else if (document.querySelector("#bottom").value == 4) {
      document
        .querySelector("#variableBottom > img")
        .setAttribute("src", "./pics/리.png");
    } else if (document.querySelector("#bottom").value == 5) {
      document
        .querySelector("#variableBottom > img")
        .setAttribute("src", "./pics/감.png");
    } else if (document.querySelector("#bottom").value == 6) {
      document
        .querySelector("#variableBottom > img")
        .setAttribute("src", "./pics/손.png");
    } else if (document.querySelector("#bottom").value == 7) {
      document
        .querySelector("#variableBottom > img")
        .setAttribute("src", "./pics/곤.png");
    } else if (document.querySelector("#bottom").value == 8) {
      document
        .querySelector("#variableBottom > img")
        .setAttribute("src", "./pics/간.png");
    }
  } else if (document.querySelector("#variable").value == 4) {
    var getBottom = bottomPic.getAttribute("src");
    variableBottomPic.setAttribute("src", getBottom);
    if (document.querySelector("#top").value == 1) {
      document
        .querySelector("#variableTop > img")
        .setAttribute("src", "./pics/손.png");
    } else if (document.querySelector("#top").value == 2) {
      document
        .querySelector("#variableTop > img")
        .setAttribute("src", "./pics/감.png");
    } else if (document.querySelector("#top").value == 3) {
      document
        .querySelector("#variableTop > img")
        .setAttribute("src", "./pics/간.png");
    } else if (document.querySelector("#top").value == 4) {
      document
        .querySelector("#variableTop > img")
        .setAttribute("src", "./pics/곤.png");
    } else if (document.querySelector("#top").value == 5) {
      document
        .querySelector("#variableTop > img")
        .setAttribute("src", "./pics/건.png");
    } else if (document.querySelector("#top").value == 6) {
      document
        .querySelector("#variableTop > img")
        .setAttribute("src", "./pics/태.png");
    } else if (document.querySelector("#top").value == 7) {
      document
        .querySelector("#variableTop > img")
        .setAttribute("src", "./pics/리.png");
    } else if (document.querySelector("#top").value == 8) {
      document
        .querySelector("#variableTop > img")
        .setAttribute("src", "./pics/진.png");
    }
  } else if (document.querySelector("#variable").value == 5) {
    var getBottom = bottomPic.getAttribute("src");
    variableBottomPic.setAttribute("src", getBottom);
    if (document.querySelector("#top").value == 1) {
      document
        .querySelector("#variableTop > img")
        .setAttribute("src", "./pics/리.png");
    } else if (document.querySelector("#top").value == 2) {
      document
        .querySelector("#variableTop > img")
        .setAttribute("src", "./pics/진.png");
    } else if (document.querySelector("#top").value == 3) {
      document
        .querySelector("#variableTop > img")
        .setAttribute("src", "./pics/건.png");
    } else if (document.querySelector("#top").value == 4) {
      document
        .querySelector("#variableTop > img")
        .setAttribute("src", "./pics/태.png");
    } else if (document.querySelector("#top").value == 5) {
      document
        .querySelector("#variableTop > img")
        .setAttribute("src", "./pics/간.png");
    } else if (document.querySelector("#top").value == 6) {
      document
        .querySelector("#variableTop > img")
        .setAttribute("src", "./pics/곤.png");
    } else if (document.querySelector("#top").value == 7) {
      document
        .querySelector("#variableTop > img")
        .setAttribute("src", "./pics/손.png");
    } else if (document.querySelector("#top").value == 8) {
      document
        .querySelector("#variableTop > img")
        .setAttribute("src", "./pics/감.png");
    }
  } else if (document.querySelector("#variable").value == 6) {
    var getBottom = bottomPic.getAttribute("src");
    variableBottomPic.setAttribute("src", getBottom);
    if (document.querySelector("#top").value == 1) {
      document
        .querySelector("#variableTop > img")
        .setAttribute("src", "./pics/태.png");
    } else if (document.querySelector("#top").value == 2) {
      document
        .querySelector("#variableTop > img")
        .setAttribute("src", "./pics/건.png");
    } else if (document.querySelector("#top").value == 3) {
      document
        .querySelector("#variableTop > img")
        .setAttribute("src", "./pics/진.png");
    } else if (document.querySelector("#top").value == 4) {
      document
        .querySelector("#variableTop > img")
        .setAttribute("src", "./pics/리.png");
    } else if (document.querySelector("#top").value == 5) {
      document
        .querySelector("#variableTop > img")
        .setAttribute("src", "./pics/감.png");
    } else if (document.querySelector("#top").value == 6) {
      document
        .querySelector("#variableTop > img")
        .setAttribute("src", "./pics/손.png");
    } else if (document.querySelector("#top").value == 7) {
      document
        .querySelector("#variableTop > img")
        .setAttribute("src", "./pics/곤.png");
    } else if (document.querySelector("#top").value == 8) {
      document
        .querySelector("#variableTop > img")
        .setAttribute("src", "./pics/간.png");
    }
  } else {
    alert("1부터 6까지의 숫자를 입력하세요");
  }
}

// 나의 괘 구하기
function print4() {
  const variable = document.querySelector("#variable").value;
  const resultMe = document.querySelector("#resultMe > img");
  if (variable == 1 || variable == 2 || variable == 3) {
    if (document.querySelector("#top").value == 1) {
      resultMe.setAttribute("src", "./pics/건.png");
    } else if (document.querySelector("#top").value == 2) {
      resultMe.setAttribute("src", "./pics/태.png");
    } else if (document.querySelector("#top").value == 3) {
      resultMe.setAttribute("src", "./pics/리.png");
    } else if (document.querySelector("#top").value == 4) {
      resultMe.setAttribute("src", "./pics/진.png");
    } else if (document.querySelector("#top").value == 5) {
      resultMe.setAttribute("src", "./pics/손.png");
    } else if (document.querySelector("#top").value == 6) {
      resultMe.setAttribute("src", "./pics/감.png");
    } else if (document.querySelector("#top").value == 7) {
      resultMe.setAttribute("src", "./pics/간.png");
    } else {
      resultMe.setAttribute("src", "./pics/곤.png");
    }
  } else {
    if (document.querySelector("#bottom").value == 1) {
      resultMe.setAttribute("src", "./pics/건.png");
    } else if (document.querySelector("#bottom").value == 2) {
      resultMe.setAttribute("src", "./pics/태.png");
    } else if (document.querySelector("#bottom").value == 3) {
      resultMe.setAttribute("src", "./pics/리.png");
    } else if (document.querySelector("#bottom").value == 4) {
      resultMe.setAttribute("src", "./pics/진.png");
    } else if (document.querySelector("#bottom").value == 5) {
      resultMe.setAttribute("src", "./pics/손.png");
    } else if (document.querySelector("#bottom").value == 6) {
      resultMe.setAttribute("src", "./pics/감.png");
    } else if (document.querySelector("#bottom").value == 7) {
      resultMe.setAttribute("src", "./pics/간.png");
    } else {
      resultMe.setAttribute("src", "./pics/곤.png");
    }
  }
}

// 현재 상태 구하기
function print5() {
  const variable = document.querySelector("#variable").value;
  const resultNow = document.querySelector("#resultNow > img");
  if (variable == 1 || variable == 2 || variable == 3) {
    if (document.querySelector("#bottom").value == 1) {
      resultNow.setAttribute("src", "./pics/건.png");
    } else if (document.querySelector("#bottom").value == 2) {
      resultNow.setAttribute("src", "./pics/태.png");
    } else if (document.querySelector("#bottom").value == 3) {
      resultNow.setAttribute("src", "./pics/리.png");
    } else if (document.querySelector("#bottom").value == 4) {
      resultNow.setAttribute("src", "./pics/진.png");
    } else if (document.querySelector("#bottom").value == 5) {
      resultNow.setAttribute("src", "./pics/손.png");
    } else if (document.querySelector("#bottom").value == 6) {
      resultNow.setAttribute("src", "./pics/감.png");
    } else if (document.querySelector("#bottom").value == 7) {
      resultNow.setAttribute("src", "./pics/간.png");
    } else {
      resultNow.setAttribute("src", "./pics/곤.png");
    }
  } else {
    if (document.querySelector("#top").value == 1) {
      resultNow.setAttribute("src", "./pics/건.png");
    } else if (document.querySelector("#top").value == 2) {
      resultNow.setAttribute("src", "./pics/태.png");
    } else if (document.querySelector("#top").value == 3) {
      resultNow.setAttribute("src", "./pics/리.png");
    } else if (document.querySelector("#top").value == 4) {
      resultNow.setAttribute("src", "./pics/진.png");
    } else if (document.querySelector("#top").value == 5) {
      resultNow.setAttribute("src", "./pics/손.png");
    } else if (document.querySelector("#top").value == 6) {
      resultNow.setAttribute("src", "./pics/감.png");
    } else if (document.querySelector("#top").value == 7) {
      resultNow.setAttribute("src", "./pics/간.png");
    } else if (document.querySelector("#top").value == 8) {
      resultNow.setAttribute("src", "./pics/곤.png");
    }
  }
}

// 점의 결과 구하기
function print6() {
  const variable = document.querySelector("#variable").value;
  const resultFuture = document.querySelector("#resultFuture > img");
  if (document.querySelector("#variable").value == 1) {
    var getTop = topPic.getAttribute("src");
    variableTopPic.setAttribute("src", getTop);
    if (document.querySelector("#bottom").value == 1) {
      resultFuture.setAttribute("src", "./pics/손.png");
    } else if (document.querySelector("#bottom").value == 2) {
      resultFuture.setAttribute("src", "./pics/감.png");
    } else if (document.querySelector("#bottom").value == 3) {
      resultFuture.setAttribute("src", "./pics/간.png");
    } else if (document.querySelector("#bottom").value == 4) {
      resultFuture.setAttribute("src", "./pics/곤.png");
    } else if (document.querySelector("#bottom").value == 5) {
      resultFuture.setAttribute("src", "./pics/건.png");
    } else if (document.querySelector("#bottom").value == 6) {
      resultFuture.setAttribute("src", "./pics/태.png");
    } else if (document.querySelector("#bottom").value == 7) {
      resultFuture.setAttribute("src", "./pics/리.png");
    } else if (document.querySelector("#bottom").value == 8) {
      resultFuture.setAttribute("src", "./pics/진.png");
    }
  } else if (document.querySelector("#variable").value == 2) {
    var getTop = topPic.getAttribute("src");
    variableTopPic.setAttribute("src", getTop);
    if (document.querySelector("#bottom").value == 1) {
      resultFuture.setAttribute("src", "./pics/리.png");
    } else if (document.querySelector("#bottom").value == 2) {
      resultFuture.setAttribute("src", "./pics/진.png");
    } else if (document.querySelector("#bottom").value == 3) {
      resultFuture.setAttribute("src", "./pics/건.png");
    } else if (document.querySelector("#bottom").value == 4) {
      resultFuture.setAttribute("src", "./pics/태.png");
    } else if (document.querySelector("#bottom").value == 5) {
      resultFuture.setAttribute("src", "./pics/간.png");
    } else if (document.querySelector("#bottom").value == 6) {
      resultFuture.setAttribute("src", "./pics/곤.png");
    } else if (document.querySelector("#bottom").value == 7) {
      resultFuture.setAttribute("src", "./pics/손.png");
    } else if (document.querySelector("#bottom").value == 8) {
      resultFuture.setAttribute("src", "./pics/감.png");
    }
  } else if (document.querySelector("#variable").value == 3) {
    var getTop = topPic.getAttribute("src");
    variableTopPic.setAttribute("src", getTop);
    if (document.querySelector("#bottom").value == 1) {
      resultFuture.setAttribute("src", "./pics/태.png");
    } else if (document.querySelector("#bottom").value == 2) {
      resultFuture.setAttribute("src", "./pics/건.png");
    } else if (document.querySelector("#bottom").value == 3) {
      resultFuture.setAttribute("src", "./pics/진.png");
    } else if (document.querySelector("#bottom").value == 4) {
      resultFuture.setAttribute("src", "./pics/리.png");
    } else if (document.querySelector("#bottom").value == 5) {
      resultFuture.setAttribute("src", "./pics/감.png");
    } else if (document.querySelector("#bottom").value == 6) {
      resultFuture.setAttribute("src", "./pics/손.png");
    } else if (document.querySelector("#bottom").value == 7) {
      resultFuture.setAttribute("src", "./pics/곤.png");
    } else if (document.querySelector("#bottom").value == 8) {
      resultFuture.setAttribute("src", "./pics/간.png");
    }
  } else if (document.querySelector("#variable").value == 4) {
    var getBottom = bottomPic.getAttribute("src");
    variableBottomPic.setAttribute("src", getBottom);
    if (document.querySelector("#top").value == 1) {
      resultFuture.setAttribute("src", "./pics/손.png");
    } else if (document.querySelector("#top").value == 2) {
      resultFuture.setAttribute("src", "./pics/감.png");
    } else if (document.querySelector("#top").value == 3) {
      resultFuture.setAttribute("src", "./pics/간.png");
    } else if (document.querySelector("#top").value == 4) {
      resultFuture.setAttribute("src", "./pics/곤.png");
    } else if (document.querySelector("#top").value == 5) {
      resultFuture.setAttribute("src", "./pics/건.png");
    } else if (document.querySelector("#top").value == 6) {
      resultFuture.setAttribute("src", "./pics/태.png");
    } else if (document.querySelector("#top").value == 7) {
      resultFuture.setAttribute("src", "./pics/리.png");
    } else if (document.querySelector("#top").value == 8) {
      resultFuture.setAttribute("src", "./pics/진.png");
    }
  } else if (document.querySelector("#variable").value == 5) {
    var getBottom = bottomPic.getAttribute("src");
    variableBottomPic.setAttribute("src", getBottom);
    if (document.querySelector("#top").value == 1) {
      resultFuture.setAttribute("src", "./pics/리.png");
    } else if (document.querySelector("#top").value == 2) {
      resultFuture.setAttribute("src", "./pics/진.png");
    } else if (document.querySelector("#top").value == 3) {
      resultFuture.setAttribute("src", "./pics/건.png");
    } else if (document.querySelector("#top").value == 4) {
      resultFuture.setAttribute("src", "./pics/태.png");
    } else if (document.querySelector("#top").value == 5) {
      resultFuture.setAttribute("src", "./pics/간.png");
    } else if (document.querySelector("#top").value == 6) {
      resultFuture.setAttribute("src", "./pics/곤.png");
    } else if (document.querySelector("#top").value == 7) {
      resultFuture.setAttribute("src", "./pics/손.png");
    } else if (document.querySelector("#top").value == 8) {
      resultFuture.setAttribute("src", "./pics/감.png");
    }
  } else if (document.querySelector("#variable").value == 6) {
    var getBottom = bottomPic.getAttribute("src");
    variableBottomPic.setAttribute("src", getBottom);
    if (document.querySelector("#top").value == 1) {
      resultFuture.setAttribute("src", "./pics/태.png");
    } else if (document.querySelector("#top").value == 2) {
      resultFuture.setAttribute("src", "./pics/건.png");
    } else if (document.querySelector("#top").value == 3) {
      resultFuture.setAttribute("src", "./pics/진.png");
    } else if (document.querySelector("#top").value == 4) {
      resultFuture.setAttribute("src", "./pics/리.png");
    } else if (document.querySelector("#top").value == 5) {
      resultFuture.setAttribute("src", "./pics/감.png");
    } else if (document.querySelector("#top").value == 6) {
      resultFuture.setAttribute("src", "./pics/손.png");
    } else if (document.querySelector("#top").value == 7) {
      resultFuture.setAttribute("src", "./pics/곤.png");
    } else if (document.querySelector("#top").value == 8) {
      resultFuture.setAttribute("src", "./pics/간.png");
    }
  }
}

function print7() {
  const variable = document.querySelector("#variable").value;
  const top = document.querySelector("#top").value;
  const bottom = document.querySelector("#bottom").value;
  const explain = document.querySelector("#explain");
  const explainResult = document.querySelector("#explainResult");
  const resultMe = document.querySelector("#resultMe > img");
  const resultNow = document.querySelector("#resultNow > img");
  const resultFuture = document.querySelector("#resultFuture > img");

  if (resultMe.getAttribute("src") == "./pics/건.png") {
    console.log(resultMe.getAttribute("src"));
    if (resultNow.getAttribute("src") == "./pics/건.png") {
      explain.innerHTML =
        "현재 상황은 매우 좋습니다! <br><br> 점의 대상이 사람이라면 상대는 나와 같은 마음을 품고 있는 깊은 친구와 같습니다. 서로의 생각이 비슷하니 마음이 통하고 일이 잘 풀리게 됩니다. 누군가와 갈등 중이라면 이는 나의 승리를 의미합니다. <br><br> 점의 대상이 사람이 아니라면, 역시 점의 대상은 나에게 이로운 상황을 가져올 것입니다";
    } else if (resultNow.getAttribute("src") == "./pics/태.png") {
      explain.innerHTML =
        "현재 상황은 매우 좋습니다! <br><br> 점의 대상이 사람이라면 상대는 나와 같은 마음을 품고 있는 깊은 친구와 같습니다. 서로의 생각이 비슷하니 마음이 통하고 일이 잘 풀리게 됩니다. 누군가와 갈등 중이라면 이는 나의 승리를 의미합니다. <br><br> 점의 대상이 사람이 아니라면, 역시 점의 대상은 나에게 이로운 상황을 가져올 것입니다";
    } else if (resultNow.getAttribute("src") == "./pics/리.png") {
      explain.innerHTML =
        "현재 상황은 매우 안 좋습니다 <br><br>점의 대상이 사람이라면, 상대가 나를 싫어하거나 혹은 나를 공격하고 있는 상황입니다. 점의 대상이 사람이 아니라면, 해당 대상이 나에게 피해를 입힐 것을 의미합니다. <br><br>결과에서 큰 반전이 없는 이상 이 선택은 피해야 합니다";
    } else if (resultNow.getAttribute("src") == "./pics/진.png") {
      explain.innerHTML =
        "현재 상황은 조금의 어려움은 있지만 헤쳐나갈 수 있는 상황입니다<br><br> 현재 상황은 일이 순조롭게 이루어지진 않고 약간의 장애물이 존재하지만, 노력을 통해 충분히 극복 가능한 상황입니다. 따라서 일을 이루려면 내가 먼저 행동하는 것이 중요합니다. <br><br>만약 점의 대상이 사람이라면, 이는 내가 먼저 적극적으로 다가가면 충분히 원하는 결과물을 얻을 수 있는 상황입니다. 누군가와 갈등 중이라면 내가 승리할 수 있는 상황입니다.";
    } else if (resultNow.getAttribute("src") == "./pics/손.png") {
      explain.innerHTML =
        "현재 상황은 조금의 어려움은 있지만 헤쳐나갈 수 있는 상황입니다<br><br> 현재 상황은 일이 순조롭게 이루어지진 않고 약간의 장애물이 존재하지만, 노력을 통해 충분히 극복 가능한 상황입니다. 따라서 일을 이루려면 내가 먼저 행동하는 것이 중요합니다. <br><br>만약 점의 대상이 사람이라면, 이는 내가 먼저 적극적으로 다가가면 충분히 원하는 결과물을 얻을 수 있는 상황입니다. 누군가와 갈등 중이라면 내가 승리할 수 있는 상황입니다.";
    } else if (resultNow.getAttribute("src") == "./pics/감.png") {
      explain.innerHTML =
        "현재 상황은 체력이 빨려 나가는 형상입니다 <br><br> 따라서 고생스러운 상황이 이어질 것이고, 노력 대비 성과는 적을 것입니다. 점의 대상이 사람이라면, 이는 내가 일방적으로 상대방에게 호감을 가지고 있는 상황입니다. 누군가와 갈등 중이라면 이는 나의 패배를 의미합니다. <br><br>만약 결과에서 반전이 있지 않으면 이 일은 좋지 않으니 실행하지 않는 것이 좋습니다. ";
    } else if (resultNow.getAttribute("src") == "./pics/간.png") {
      explain.innerHTML =
        "이 일의 결과는 이보다 더 좋을 수 없습니다! <br><br> 점의 대상이 사람이라면 이는 상대방이 나를 적극적으로 도울 예정이거나, 나에게 호감이 갖게 될 것을 드러냅니다. 마치 상대방은 부모와 같이 나를 도울 것입니다. 누군가와 갈등 중이라면 이는 나의 승리를 의미합니다. <br><br> 점의 대상이 사람이 아니라면 점의 대상은 나에게 무척 이롭게 작용할 것입니다.";
    } else {
      explain.innerHTML =
        "이 일의 결과는 이보다 더 좋을 수 없습니다! <br><br> 점의 대상이 사람이라면 이는 상대방이 나를 적극적으로 도울 예정이거나, 나에게 호감이 갖게 될 것을 드러냅니다. 마치 상대방은 부모와 같이 나를 도울 것입니다. 누군가와 갈등 중이라면 이는 나의 승리를 의미합니다. <br><br> 점의 대상이 사람이 아니라면 점의 대상은 나에게 무척 이롭게 작용할 것입니다.";
    }
  } else if (resultMe.getAttribute("src") == "./pics/태.png") {
    if (resultNow.getAttribute("src") == "./pics/건.png") {
      explain.innerHTML =
        "현재 상황은 매우 좋습니다! <br><br> 점의 대상이 사람이라면 상대는 나와 같은 마음을 품고 있는 깊은 친구와 같습니다. 서로의 생각이 비슷하니 마음이 통하고 일이 잘 풀리게 됩니다. 누군가와 갈등 중이라면 이는 나의 승리를 의미합니다. <br><br> 점의 대상이 사람이 아니라면, 역시 점의 대상은 나에게 이로운 상황을 가져올 것입니다";
    } else if (resultNow.getAttribute("src") == "./pics/태.png") {
      explain.innerHTML =
        "현재 상황은 매우 좋습니다! <br><br> 점의 대상이 사람이라면 상대는 나와 같은 마음을 품고 있는 깊은 친구와 같습니다. 서로의 생각이 비슷하니 마음이 통하고 일이 잘 풀리게 됩니다. 누군가와 갈등 중이라면 이는 나의 승리를 의미합니다. <br><br> 점의 대상이 사람이 아니라면, 역시 점의 대상은 나에게 이로운 상황을 가져올 것입니다";
    } else if (resultNow.getAttribute("src") == "./pics/리.png") {
      explain.innerHTML =
        "현재 상황은 매우 안 좋습니다 <br><br>점의 대상이 사람이라면, 상대가 나를 싫어하거나 혹은 나를 공격하고 있는 상황입니다. 점의 대상이 사람이 아니라면, 해당 대상이 나에게 피해를 입힐 것을 의미합니다. <br><br>결과에서 큰 반전이 없는 이상 이 선택은 피해야 합니다";
    } else if (resultNow.getAttribute("src") == "./pics/진.png") {
      explain.innerHTML =
        "현재 상황은 조금의 어려움은 있지만 헤쳐나갈 수 있는 상황입니다<br><br> 현재 상황은 일이 순조롭게 이루어지진 않고 약간의 장애물이 존재하지만, 노력을 통해 충분히 극복 가능한 상황입니다. 따라서 일을 이루려면 내가 먼저 행동하는 것이 중요합니다. <br><br>만약 점의 대상이 사람이라면, 이는 내가 먼저 적극적으로 다가가면 충분히 원하는 결과물을 얻을 수 있는 상황입니다. 누군가와 갈등 중이라면 내가 승리할 수 있는 상황입니다.";
    } else if (resultNow.getAttribute("src") == "./pics/손.png") {
      explain.innerHTML =
        "현재 상황은 조금의 어려움은 있지만 헤쳐나갈 수 있는 상황입니다<br><br> 현재 상황은 일이 순조롭게 이루어지진 않고 약간의 장애물이 존재하지만, 노력을 통해 충분히 극복 가능한 상황입니다. 따라서 일을 이루려면 내가 먼저 행동하는 것이 중요합니다. <br><br>만약 점의 대상이 사람이라면, 이는 내가 먼저 적극적으로 다가가면 충분히 원하는 결과물을 얻을 수 있는 상황입니다. 누군가와 갈등 중이라면 내가 승리할 수 있는 상황입니다.";
    } else if (resultNow.getAttribute("src") == "./pics/감.png") {
      explain.innerHTML =
        "현재 상황은 체력이 빨려 나가는 형상입니다 <br><br> 따라서 고생스러운 상황이 이어질 것이고, 노력 대비 성과는 적을 것입니다. 점의 대상이 사람이라면, 이는 내가 일방적으로 상대방에게 호감을 가지고 있는 상황입니다. 누군가와 갈등 중이라면 이는 나의 패배를 의미합니다. <br><br>만약 결과에서 반전이 있지 않으면 이 일은 좋지 않으니 실행하지 않는 것이 좋습니다. ";
    } else if (resultNow.getAttribute("src") == "./pics/간.png") {
      explain.innerHTML =
        "이 일의 결과는 이보다 더 좋을 수 없습니다! <br><br> 점의 대상이 사람이라면 이는 상대방이 나를 적극적으로 도울 예정이거나, 나에게 호감이 갖게 될 것을 드러냅니다. 마치 상대방은 부모와 같이 나를 도울 것입니다. 누군가와 갈등 중이라면 이는 나의 승리를 의미합니다. <br><br> 점의 대상이 사람이 아니라면 점의 대상은 나에게 무척 이롭게 작용할 것입니다.";
    } else {
      explain.innerHTML =
        "이 일의 결과는 이보다 더 좋을 수 없습니다! <br><br> 점의 대상이 사람이라면 이는 상대방이 나를 적극적으로 도울 예정이거나, 나에게 호감이 갖게 될 것을 드러냅니다. 마치 상대방은 부모와 같이 나를 도울 것입니다. 누군가와 갈등 중이라면 이는 나의 승리를 의미합니다. <br><br> 점의 대상이 사람이 아니라면 점의 대상은 나에게 무척 이롭게 작용할 것입니다.";
    }
  } else if (resultMe.getAttribute("src") == "./pics/리.png") {
    if (resultNow.getAttribute("src") == "./pics/건.png") {
      explain.innerHTML =
        "현재 상황은 조금의 어려움은 있지만 헤쳐나갈 수 있는 상황입니다<br><br> 현재 상황은 일이 순조롭게 이루어지진 않고 약간의 장애물이 존재하지만, 노력을 통해 충분히 극복 가능한 상황입니다. 따라서 일을 이루려면 내가 먼저 행동하는 것이 중요합니다. <br><br>만약 점의 대상이 사람이라면, 이는 내가 먼저 적극적으로 다가가면 충분히 원하는 결과물을 얻을 수 있는 상황입니다. 누군가와 갈등 중이라면 내가 승리할 수 있는 상황입니다.";
    } else if (resultNow.getAttribute("src") == "./pics/태.png") {
      explain.innerHTML =
        "현재 상황은 조금의 어려움은 있지만 헤쳐나갈 수 있는 상황입니다<br><br> 현재 상황은 일이 순조롭게 이루어지진 않고 약간의 장애물이 존재하지만, 노력을 통해 충분히 극복 가능한 상황입니다. 따라서 일을 이루려면 내가 먼저 행동하는 것이 중요합니다. <br><br>만약 점의 대상이 사람이라면, 이는 내가 먼저 적극적으로 다가가면 충분히 원하는 결과물을 얻을 수 있는 상황입니다. 누군가와 갈등 중이라면 내가 승리할 수 있는 상황입니다.";
    } else if (resultNow.getAttribute("src") == "./pics/리.png") {
      explain.innerHTML =
        "현재 상황은 매우 좋습니다! <br><br> 점의 대상이 사람이라면 상대는 나와 같은 마음을 품고 있는 깊은 친구와 같습니다. 서로의 생각이 비슷하니 마음이 통하고 일이 잘 풀리게 됩니다. 누군가와 갈등 중이라면 이는 나의 승리를 의미합니다. <br><br> 점의 대상이 사람이 아니라면, 역시 점의 대상은 나에게 이로운 상황을 가져올 것입니다";
    } else if (resultNow.getAttribute("src") == "./pics/진.png") {
      explain.innerHTML =
        "이 일의 결과는 이보다 더 좋을 수 없습니다! <br><br> 점의 대상이 사람이라면 이는 상대방이 나를 적극적으로 도울 예정이거나, 나에게 호감이 갖게 될 것을 드러냅니다. 마치 상대방은 부모와 같이 나를 도울 것입니다. 누군가와 갈등 중이라면 이는 나의 승리를 의미합니다. <br><br> 점의 대상이 사람이 아니라면 점의 대상은 나에게 무척 이롭게 작용할 것입니다.";
    } else if (resultNow.getAttribute("src") == "./pics/손.png") {
      explain.innerHTML =
        "이 일의 결과는 이보다 더 좋을 수 없습니다! <br><br> 점의 대상이 사람이라면 이는 상대방이 나를 적극적으로 도울 예정이거나, 나에게 호감이 갖게 될 것을 드러냅니다. 마치 상대방은 부모와 같이 나를 도울 것입니다. 누군가와 갈등 중이라면 이는 나의 승리를 의미합니다. <br><br> 점의 대상이 사람이 아니라면 점의 대상은 나에게 무척 이롭게 작용할 것입니다.";
    } else if (resultNow.getAttribute("src") == "./pics/감.png") {
      explain.innerHTML =
        "현재 상황은 매우 안 좋습니다 <br><br>점의 대상이 사람이라면, 상대가 나를 싫어하거나 혹은 나를 공격하고 있는 상황입니다. 점의 대상이 사람이 아니라면, 해당 대상이 나에게 피해를 입힐 것을 의미합니다. <br><br>결과에서 큰 반전이 없는 이상 이 선택은 피해야 합니다";
    } else if (resultNow.getAttribute("src") == "./pics/간.png") {
      explain.innerHTML =
        "현재 상황은 체력이 빨려 나가는 형상입니다 <br><br> 따라서 고생스러운 상황이 이어질 것이고, 노력 대비 성과는 적을 것입니다. 점의 대상이 사람이라면, 이는 내가 일방적으로 상대방에게 호감을 가지고 있는 상황입니다. 누군가와 갈등 중이라면 이는 나의 패배를 의미합니다. <br><br>만약 결과에서 반전이 있지 않으면 이 일은 좋지 않으니 실행하지 않는 것이 좋습니다. ";
    } else {
      explain.innerHTML =
        "현재 상황은 체력이 빨려 나가는 형상입니다 <br><br> 따라서 고생스러운 상황이 이어질 것이고, 노력 대비 성과는 적을 것입니다. 점의 대상이 사람이라면, 이는 내가 일방적으로 상대방에게 호감을 가지고 있는 상황입니다. 누군가와 갈등 중이라면 이는 나의 패배를 의미합니다. <br><br>만약 결과에서 반전이 있지 않으면 이 일은 좋지 않으니 실행하지 않는 것이 좋습니다. ";
    }
  } else if (resultMe.getAttribute("src") == "./pics/진.png") {
    if (resultNow.getAttribute("src") == "./pics/건.png") {
      explain.innerHTML =
        "현재 상황은 매우 안 좋습니다 <br><br>점의 대상이 사람이라면, 상대가 나를 싫어하거나 혹은 나를 공격하고 있는 상황입니다. 점의 대상이 사람이 아니라면, 해당 대상이 나에게 피해를 입힐 것을 의미합니다. <br><br>결과에서 큰 반전이 없는 이상 이 선택은 피해야 합니다";
    } else if (resultNow.getAttribute("src") == "./pics/태.png") {
      explain.innerHTML =
        "현재 상황은 매우 안 좋습니다 <br><br>점의 대상이 사람이라면, 상대가 나를 싫어하거나 혹은 나를 공격하고 있는 상황입니다. 점의 대상이 사람이 아니라면, 해당 대상이 나에게 피해를 입힐 것을 의미합니다. <br><br>결과에서 큰 반전이 없는 이상 이 선택은 피해야 합니다";
    } else if (resultNow.getAttribute("src") == "./pics/리.png") {
      explain.innerHTML =
        "현재 상황은 체력이 빨려 나가는 형상입니다 <br><br> 따라서 고생스러운 상황이 이어질 것이고, 노력 대비 성과는 적을 것입니다. 점의 대상이 사람이라면, 이는 내가 일방적으로 상대방에게 호감을 가지고 있는 상황입니다. 누군가와 갈등 중이라면 이는 나의 패배를 의미합니다. <br><br>만약 결과에서 반전이 있지 않으면 이 일은 좋지 않으니 실행하지 않는 것이 좋습니다. ";
    } else if (resultNow.getAttribute("src") == "./pics/진.png") {
      explain.innerHTML =
        "현재 상황은 매우 좋습니다! <br><br> 점의 대상이 사람이라면 상대는 나와 같은 마음을 품고 있는 깊은 친구와 같습니다. 서로의 생각이 비슷하니 마음이 통하고 일이 잘 풀리게 됩니다. 누군가와 갈등 중이라면 이는 나의 승리를 의미합니다. <br><br> 점의 대상이 사람이 아니라면, 역시 점의 대상은 나에게 이로운 상황을 가져올 것입니다";
    } else if (resultNow.getAttribute("src") == "./pics/손.png") {
      explain.innerHTML =
        "현재 상황은 매우 좋습니다! <br><br> 점의 대상이 사람이라면 상대는 나와 같은 마음을 품고 있는 깊은 친구와 같습니다. 서로의 생각이 비슷하니 마음이 통하고 일이 잘 풀리게 됩니다. 누군가와 갈등 중이라면 이는 나의 승리를 의미합니다. <br><br> 점의 대상이 사람이 아니라면, 역시 점의 대상은 나에게 이로운 상황을 가져올 것입니다";
    } else if (resultNow.getAttribute("src") == "./pics/감.png") {
      explain.innerHTML =
        "이 일의 결과는 이보다 더 좋을 수 없습니다! <br><br> 점의 대상이 사람이라면 이는 상대방이 나를 적극적으로 도울 예정이거나, 나에게 호감이 갖게 될 것을 드러냅니다. 마치 상대방은 부모와 같이 나를 도울 것입니다. 누군가와 갈등 중이라면 이는 나의 승리를 의미합니다. <br><br> 점의 대상이 사람이 아니라면 점의 대상은 나에게 무척 이롭게 작용할 것입니다.";
    } else if (resultNow.getAttribute("src") == "./pics/간.png") {
      explain.innerHTML =
        "현재 상황은 조금의 어려움은 있지만 헤쳐나갈 수 있는 상황입니다<br><br> 현재 상황은 일이 순조롭게 이루어지진 않고 약간의 장애물이 존재하지만, 노력을 통해 충분히 극복 가능한 상황입니다. 따라서 일을 이루려면 내가 먼저 행동하는 것이 중요합니다. <br><br>만약 점의 대상이 사람이라면, 이는 내가 먼저 적극적으로 다가가면 충분히 원하는 결과물을 얻을 수 있는 상황입니다. 누군가와 갈등 중이라면 내가 승리할 수 있는 상황입니다.";
    } else {
      explain.innerHTML =
        "현재 상황은 조금의 어려움은 있지만 헤쳐나갈 수 있는 상황입니다<br><br> 현재 상황은 일이 순조롭게 이루어지진 않고 약간의 장애물이 존재하지만, 노력을 통해 충분히 극복 가능한 상황입니다. 따라서 일을 이루려면 내가 먼저 행동하는 것이 중요합니다. <br><br>만약 점의 대상이 사람이라면, 이는 내가 먼저 적극적으로 다가가면 충분히 원하는 결과물을 얻을 수 있는 상황입니다. 누군가와 갈등 중이라면 내가 승리할 수 있는 상황입니다.";
    }
  } else if (resultMe.getAttribute("src") == "./pics/손.png") {
    if (resultNow.getAttribute("src") == "./pics/건.png") {
      explain.innerHTML =
        "현재 상황은 매우 안 좋습니다 <br><br>점의 대상이 사람이라면, 상대가 나를 싫어하거나 혹은 나를 공격하고 있는 상황입니다. 점의 대상이 사람이 아니라면, 해당 대상이 나에게 피해를 입힐 것을 의미합니다. <br><br>결과에서 큰 반전이 없는 이상 이 선택은 피해야 합니다";
    } else if (resultNow.getAttribute("src") == "./pics/태.png") {
      explain.innerHTML =
        "현재 상황은 매우 안 좋습니다 <br><br>점의 대상이 사람이라면, 상대가 나를 싫어하거나 혹은 나를 공격하고 있는 상황입니다. 점의 대상이 사람이 아니라면, 해당 대상이 나에게 피해를 입힐 것을 의미합니다. <br><br>결과에서 큰 반전이 없는 이상 이 선택은 피해야 합니다";
    } else if (resultNow.getAttribute("src") == "./pics/리.png") {
      explain.innerHTML =
        "현재 상황은 체력이 빨려 나가는 형상입니다 <br><br> 따라서 고생스러운 상황이 이어질 것이고, 노력 대비 성과는 적을 것입니다. 점의 대상이 사람이라면, 이는 내가 일방적으로 상대방에게 호감을 가지고 있는 상황입니다. 누군가와 갈등 중이라면 이는 나의 패배를 의미합니다. <br><br>만약 결과에서 반전이 있지 않으면 이 일은 좋지 않으니 실행하지 않는 것이 좋습니다. ";
    } else if (resultNow.getAttribute("src") == "./pics/진.png") {
      explain.innerHTML =
        "현재 상황은 매우 좋습니다! <br><br> 점의 대상이 사람이라면 상대는 나와 같은 마음을 품고 있는 깊은 친구와 같습니다. 서로의 생각이 비슷하니 마음이 통하고 일이 잘 풀리게 됩니다. 누군가와 갈등 중이라면 이는 나의 승리를 의미합니다. <br><br> 점의 대상이 사람이 아니라면, 역시 점의 대상은 나에게 이로운 상황을 가져올 것입니다";
    } else if (resultNow.getAttribute("src") == "./pics/손.png") {
      explain.innerHTML =
        "현재 상황은 매우 좋습니다! <br><br> 점의 대상이 사람이라면 상대는 나와 같은 마음을 품고 있는 깊은 친구와 같습니다. 서로의 생각이 비슷하니 마음이 통하고 일이 잘 풀리게 됩니다. 누군가와 갈등 중이라면 이는 나의 승리를 의미합니다. <br><br> 점의 대상이 사람이 아니라면, 역시 점의 대상은 나에게 이로운 상황을 가져올 것입니다";
    } else if (resultNow.getAttribute("src") == "./pics/감.png") {
      explain.innerHTML =
        "이 일의 결과는 이보다 더 좋을 수 없습니다! <br><br> 점의 대상이 사람이라면 이는 상대방이 나를 적극적으로 도울 예정이거나, 나에게 호감이 갖게 될 것을 드러냅니다. 마치 상대방은 부모와 같이 나를 도울 것입니다. 누군가와 갈등 중이라면 이는 나의 승리를 의미합니다. <br><br> 점의 대상이 사람이 아니라면 점의 대상은 나에게 무척 이롭게 작용할 것입니다.";
    } else if (resultNow.getAttribute("src") == "./pics/간.png") {
      explain.innerHTML =
        "현재 상황은 조금의 어려움은 있지만 헤쳐나갈 수 있는 상황입니다<br><br> 현재 상황은 일이 순조롭게 이루어지진 않고 약간의 장애물이 존재하지만, 노력을 통해 충분히 극복 가능한 상황입니다. 따라서 일을 이루려면 내가 먼저 행동하는 것이 중요합니다. <br><br>만약 점의 대상이 사람이라면, 이는 내가 먼저 적극적으로 다가가면 충분히 원하는 결과물을 얻을 수 있는 상황입니다. 누군가와 갈등 중이라면 내가 승리할 수 있는 상황입니다. ";
    } else {
      explain.innerHTML =
        "현재 상황은 조금의 어려움은 있지만 헤쳐나갈 수 있는 상황입니다<br><br> 현재 상황은 일이 순조롭게 이루어지진 않고 약간의 장애물이 존재하지만, 노력을 통해 충분히 극복 가능한 상황입니다. 따라서 일을 이루려면 내가 먼저 행동하는 것이 중요합니다. <br><br>만약 점의 대상이 사람이라면, 이는 내가 먼저 적극적으로 다가가면 충분히 원하는 결과물을 얻을 수 있는 상황입니다. 누군가와 갈등 중이라면 내가 승리할 수 있는 상황입니다. ";
    }
  } else if (resultMe.getAttribute("src") == "./pics/감.png") {
    if (resultNow.getAttribute("src") == "./pics/건.png") {
      explain.innerHTML =
        "이 일의 결과는 이보다 더 좋을 수 없습니다! <br><br> 점의 대상이 사람이라면 이는 상대방이 나를 적극적으로 도울 예정이거나, 나에게 호감이 갖게 될 것을 드러냅니다. 마치 상대방은 부모와 같이 나를 도울 것입니다. 누군가와 갈등 중이라면 이는 나의 승리를 의미합니다. <br><br> 점의 대상이 사람이 아니라면 점의 대상은 나에게 무척 이롭게 작용할 것입니다.";
    } else if (resultNow.getAttribute("src") == "./pics/태.png") {
      explain.innerHTML =
        "이 일의 결과는 이보다 더 좋을 수 없습니다! <br><br> 점의 대상이 사람이라면 이는 상대방이 나를 적극적으로 도울 예정이거나, 나에게 호감이 갖게 될 것을 드러냅니다. 마치 상대방은 부모와 같이 나를 도울 것입니다. 누군가와 갈등 중이라면 이는 나의 승리를 의미합니다. <br><br> 점의 대상이 사람이 아니라면 점의 대상은 나에게 무척 이롭게 작용할 것입니다.";
    } else if (resultNow.getAttribute("src") == "./pics/리.png") {
      explain.innerHTML =
        "현재 상황은 조금의 어려움은 있지만 헤쳐나갈 수 있는 상황입니다<br><br> 현재 상황은 일이 순조롭게 이루어지진 않고 약간의 장애물이 존재하지만, 노력을 통해 충분히 극복 가능한 상황입니다. 따라서 일을 이루려면 내가 먼저 행동하는 것이 중요합니다. <br><br>만약 점의 대상이 사람이라면, 이는 내가 먼저 적극적으로 다가가면 충분히 원하는 결과물을 얻을 수 있는 상황입니다. 누군가와 갈등 중이라면 내가 승리할 수 있는 상황입니다.";
    } else if (resultNow.getAttribute("src") == "./pics/진.png") {
      explain.innerHTML =
        "현재 상황은 체력이 빨려 나가는 형상입니다 <br><br> 따라서 고생스러운 상황이 이어질 것이고, 노력 대비 성과는 적을 것입니다. 점의 대상이 사람이라면, 이는 내가 일방적으로 상대방에게 호감을 가지고 있는 상황입니다. 누군가와 갈등 중이라면 이는 나의 패배를 의미합니다. <br><br>만약 결과에서 반전이 있지 않으면 이 일은 좋지 않으니 실행하지 않는 것이 좋습니다. ";
    } else if (resultNow.getAttribute("src") == "./pics/손.png") {
      explain.innerHTML =
        "현재 상황은 체력이 빨려 나가는 형상입니다 <br><br> 따라서 고생스러운 상황이 이어질 것이고, 노력 대비 성과는 적을 것입니다. 점의 대상이 사람이라면, 이는 내가 일방적으로 상대방에게 호감을 가지고 있는 상황입니다. 누군가와 갈등 중이라면 이는 나의 패배를 의미합니다. <br><br>만약 결과에서 반전이 있지 않으면 이 일은 좋지 않으니 실행하지 않는 것이 좋습니다. ";
    } else if (resultNow.getAttribute("src") == "./pics/감.png") {
      explain.innerHTML =
        "현재 상황은 매우 좋습니다! <br><br> 점의 대상이 사람이라면 상대는 나와 같은 마음을 품고 있는 깊은 친구와 같습니다. 서로의 생각이 비슷하니 마음이 통하고 일이 잘 풀리게 됩니다. 누군가와 갈등 중이라면 이는 나의 승리를 의미합니다. <br><br> 점의 대상이 사람이 아니라면, 역시 점의 대상은 나에게 이로운 상황을 가져올 것입니다";
    } else if (resultNow.getAttribute("src") == "./pics/간.png") {
      explain.innerHTML =
        "현재 상황은 매우 안 좋습니다 <br><br>점의 대상이 사람이라면, 상대가 나를 싫어하거나 혹은 나를 공격하고 있는 상황입니다. 점의 대상이 사람이 아니라면, 해당 대상이 나에게 피해를 입힐 것을 의미합니다. <br><br>결과에서 큰 반전이 없는 이상 이 선택은 피해야 합니다";
    } else {
      explain.innerHTML =
        "현재 상황은 매우 안 좋습니다 <br><br>점의 대상이 사람이라면, 상대가 나를 싫어하거나 혹은 나를 공격하고 있는 상황입니다. 점의 대상이 사람이 아니라면, 해당 대상이 나에게 피해를 입힐 것을 의미합니다. <br><br>결과에서 큰 반전이 없는 이상 이 선택은 피해야 합니다";
    }
  } else if (resultMe.getAttribute("src") == "./pics/간.png") {
    if (resultNow.getAttribute("src") == "./pics/건.png") {
      explain.innerHTML =
        "현재 상황은 체력이 빨려 나가는 형상입니다 <br><br> 따라서 고생스러운 상황이 이어질 것이고, 노력 대비 성과는 적을 것입니다. 점의 대상이 사람이라면, 이는 내가 일방적으로 상대방에게 호감을 가지고 있는 상황입니다. 누군가와 갈등 중이라면 이는 나의 패배를 의미합니다. <br><br>만약 결과에서 반전이 있지 않으면 이 일은 좋지 않으니 실행하지 않는 것이 좋습니다. ";
    } else if (resultNow.getAttribute("src") == "./pics/태.png") {
      explain.innerHTML =
        "현재 상황은 체력이 빨려 나가는 형상입니다 <br><br> 따라서 고생스러운 상황이 이어질 것이고, 노력 대비 성과는 적을 것입니다. 점의 대상이 사람이라면, 이는 내가 일방적으로 상대방에게 호감을 가지고 있는 상황입니다. 누군가와 갈등 중이라면 이는 나의 패배를 의미합니다. <br><br>만약 결과에서 반전이 있지 않으면 이 일은 좋지 않으니 실행하지 않는 것이 좋습니다. ";
    } else if (resultNow.getAttribute("src") == "./pics/리.png") {
      explain.innerHTML =
        "이 일의 결과는 이보다 더 좋을 수 없습니다! <br><br> 점의 대상이 사람이라면 이는 상대방이 나를 적극적으로 도울 예정이거나, 나에게 호감이 갖게 될 것을 드러냅니다. 마치 상대방은 부모와 같이 나를 도울 것입니다. 누군가와 갈등 중이라면 이는 나의 승리를 의미합니다. <br><br> 점의 대상이 사람이 아니라면 점의 대상은 나에게 무척 이롭게 작용할 것입니다.";
    } else if (resultNow.getAttribute("src") == "./pics/진.png") {
      explain.innerHTML =
        "현재 상황은 매우 안 좋습니다 <br><br>점의 대상이 사람이라면, 상대가 나를 싫어하거나 혹은 나를 공격하고 있는 상황입니다. 점의 대상이 사람이 아니라면, 해당 대상이 나에게 피해를 입힐 것을 의미합니다. <br><br>결과에서 큰 반전이 없는 이상 이 선택은 피해야 합니다";
    } else if (resultNow.getAttribute("src") == "./pics/손.png") {
      explain.innerHTML =
        "현재 상황은 매우 안 좋습니다 <br><br>점의 대상이 사람이라면, 상대가 나를 싫어하거나 혹은 나를 공격하고 있는 상황입니다. 점의 대상이 사람이 아니라면, 해당 대상이 나에게 피해를 입힐 것을 의미합니다. <br><br>결과에서 큰 반전이 없는 이상 이 선택은 피해야 합니다";
    } else if (resultNow.getAttribute("src") == "./pics/감.png") {
      explain.innerHTML =
        "현재 상황은 조금의 어려움은 있지만 헤쳐나갈 수 있는 상황입니다<br><br> 현재 상황은 일이 순조롭게 이루어지진 않고 약간의 장애물이 존재하지만, 노력을 통해 충분히 극복 가능한 상황입니다. 따라서 일을 이루려면 내가 먼저 행동하는 것이 중요합니다. <br><br>만약 점의 대상이 사람이라면, 이는 내가 먼저 적극적으로 다가가면 충분히 원하는 결과물을 얻을 수 있는 상황입니다. 누군가와 갈등 중이라면 내가 승리할 수 있는 상황입니다.";
    } else if (resultNow.getAttribute("src") == "./pics/간.png") {
      explain.innerHTML =
        "현재 상황은 매우 좋습니다! <br><br> 점의 대상이 사람이라면 상대는 나와 같은 마음을 품고 있는 깊은 친구와 같습니다. 서로의 생각이 비슷하니 마음이 통하고 일이 잘 풀리게 됩니다. 누군가와 갈등 중이라면 이는 나의 승리를 의미합니다. <br><br> 점의 대상이 사람이 아니라면, 역시 점의 대상은 나에게 이로운 상황을 가져올 것입니다";
    } else {
      explain.innerHTML =
        "현재 상황은 매우 좋습니다! <br><br> 점의 대상이 사람이라면 상대는 나와 같은 마음을 품고 있는 깊은 친구와 같습니다. 서로의 생각이 비슷하니 마음이 통하고 일이 잘 풀리게 됩니다. 누군가와 갈등 중이라면 이는 나의 승리를 의미합니다. <br><br> 점의 대상이 사람이 아니라면, 역시 점의 대상은 나에게 이로운 상황을 가져올 것입니다";
    }
  } else if (resultMe.getAttribute("src") == "./pics/곤.png") {
    if (resultNow.getAttribute("src") == "./pics/건.png") {
      explain.innerHTML =
        "현재 상황은 체력이 빨려 나가는 형상입니다 <br><br> 따라서 고생스러운 상황이 이어질 것이고, 노력 대비 성과는 적을 것입니다. 점의 대상이 사람이라면, 이는 내가 일방적으로 상대방에게 호감을 가지고 있는 상황입니다. 누군가와 갈등 중이라면 이는 나의 패배를 의미합니다. <br><br>만약 결과에서 반전이 있지 않으면 이 일은 좋지 않으니 실행하지 않는 것이 좋습니다. ";
    } else if (resultNow.getAttribute("src") == "./pics/태.png") {
      explain.innerHTML =
        "현재 상황은 체력이 빨려 나가는 형상입니다 <br><br> 따라서 고생스러운 상황이 이어질 것이고, 노력 대비 성과는 적을 것입니다. 점의 대상이 사람이라면, 이는 내가 일방적으로 상대방에게 호감을 가지고 있는 상황입니다. 누군가와 갈등 중이라면 이는 나의 패배를 의미합니다. <br><br>만약 결과에서 반전이 있지 않으면 이 일은 좋지 않으니 실행하지 않는 것이 좋습니다. ";
    } else if (resultNow.getAttribute("src") == "./pics/리.png") {
      explain.innerHTML =
        "이 일의 결과는 이보다 더 좋을 수 없습니다! <br><br> 점의 대상이 사람이라면 이는 상대방이 나를 적극적으로 도울 예정이거나, 나에게 호감이 갖게 될 것을 드러냅니다. 마치 상대방은 부모와 같이 나를 도울 것입니다. 누군가와 갈등 중이라면 이는 나의 승리를 의미합니다. <br><br> 점의 대상이 사람이 아니라면 점의 대상은 나에게 무척 이롭게 작용할 것입니다.";
    } else if (resultNow.getAttribute("src") == "./pics/진.png") {
      explain.innerHTML =
        "현재 상황은 매우 안 좋습니다 <br><br>점의 대상이 사람이라면, 상대가 나를 싫어하거나 혹은 나를 공격하고 있는 상황입니다. 점의 대상이 사람이 아니라면, 해당 대상이 나에게 피해를 입힐 것을 의미합니다. <br><br>결과에서 큰 반전이 없는 이상 이 선택은 피해야 합니다";
    } else if (resultNow.getAttribute("src") == "./pics/손.png") {
      explain.innerHTML =
        "현재 상황은 매우 안 좋습니다 <br><br>점의 대상이 사람이라면, 상대가 나를 싫어하거나 혹은 나를 공격하고 있는 상황입니다. 점의 대상이 사람이 아니라면, 해당 대상이 나에게 피해를 입힐 것을 의미합니다. <br><br>결과에서 큰 반전이 없는 이상 이 선택은 피해야 합니다";
    } else if (resultNow.getAttribute("src") == "./pics/감.png") {
      explain.innerHTML =
        "현재 상황은 조금의 어려움은 있지만 헤쳐나갈 수 있는 상황입니다<br><br> 현재 상황은 일이 순조롭게 이루어지진 않고 약간의 장애물이 존재하지만, 노력을 통해 충분히 극복 가능한 상황입니다. 따라서 일을 이루려면 내가 먼저 행동하는 것이 중요합니다. <br><br>만약 점의 대상이 사람이라면, 이는 내가 먼저 적극적으로 다가가면 충분히 원하는 결과물을 얻을 수 있는 상황입니다. 누군가와 갈등 중이라면 내가 승리할 수 있는 상황입니다.";
    } else if (resultNow.getAttribute("src") == "./pics/간.png") {
      explain.innerHTML =
        "현재 상황은 매우 좋습니다! <br><br> 점의 대상이 사람이라면 상대는 나와 같은 마음을 품고 있는 깊은 친구와 같습니다. 서로의 생각이 비슷하니 마음이 통하고 일이 잘 풀리게 됩니다. 누군가와 갈등 중이라면 이는 나의 승리를 의미합니다. <br><br> 점의 대상이 사람이 아니라면, 역시 점의 대상은 나에게 이로운 상황을 가져올 것입니다";
    } else {
      explain.innerHTML =
        "현재 상황은 매우 좋습니다! <br><br> 점의 대상이 사람이라면 상대는 나와 같은 마음을 품고 있는 깊은 친구와 같습니다. 서로의 생각이 비슷하니 마음이 통하고 일이 잘 풀리게 됩니다. 누군가와 갈등 중이라면 이는 나의 승리를 의미합니다. <br><br> 점의 대상이 사람이 아니라면, 역시 점의 대상은 나에게 이로운 상황을 가져올 것입니다";
    }
  }

  if (resultMe.getAttribute("src") == "./pics/건.png") {
    if (resultFuture.getAttribute("src") == "./pics/건.png") {
      explainResult.innerHTML =
        "이 일의 결과는 매우 좋습니다. <br><br> 점의 대상이 사람이라면 상대는 나와 같은 마음을 품고 있는 깊은 친구와 같습니다. 서로의 생각이 비슷하니 마음이 통하고 일이 잘 풀리게 됩니다. 누군가와 갈등 중이라면 이는 나의 승리를 의미합니다. <br><br> 점의 대상이 사람이 아니라면, 역시 점의 대상은 나에게 이로운 상황을 가져올 것입니다";
    } else if (resultFuture.getAttribute("src") == "./pics/태.png") {
      explainResult.innerHTML =
        "이 일의 결과는 매우 좋습니다. <br><br> 점의 대상이 사람이라면 상대는 나와 같은 마음을 품고 있는 깊은 친구와 같습니다. 서로의 생각이 비슷하니 마음이 통하고 일이 잘 풀리게 됩니다. 누군가와 갈등 중이라면 이는 나의 승리를 의미합니다. <br><br> 점의 대상이 사람이 아니라면, 역시 점의 대상은 나에게 이로운 상황을 가져올 것입니다";
    } else if (resultFuture.getAttribute("src") == "./pics/리.png") {
      explainResult.innerHTML =
        "이 일의 결과는 매우 안 좋습니다 <br><br> 점의 대상이 사람이라면, 상대가 나를 싫어하거나 혹은 나를 공격하고 있는 상황입니다. 점의 대상이 사람이 아니라면, 해당 대상이 나에게 피해를 입힐 것을 의미합니다";
    } else if (resultFuture.getAttribute("src") == "./pics/진.png") {
      explainResult.innerHTML =
        "이 일의 결과는 조금의 어려움은 있지만 헤쳐나갈 수 있는 상황입니다<br><br> 좋은 결과를 내기까지 일이 순조롭게 이루어지진 않고 약간의 장애물이 존재하지만, 노력을 통해 충분히 극복 가능한 상황입니다. 따라서 일을 이루려면 내가 먼저 행동하는 것이 중요합니다.<br><br> 만약 점의 대상이 사람이라면, 이는 내가 먼저 적극적으로 다가가면 충분히 원하는 결과물을 얻을 수 있는 상황입니다. 누군가와 갈등 중이라면 내가 승리할 수 있는 상황입니다. ";
    } else if (resultFuture.getAttribute("src") == "./pics/손.png") {
      explainResult.innerHTML =
        "이 일의 결과는 조금의 어려움은 있지만 헤쳐나갈 수 있는 상황입니다<br><br> 좋은 결과를 내기까지 일이 순조롭게 이루어지진 않고 약간의 장애물이 존재하지만, 노력을 통해 충분히 극복 가능한 상황입니다. 따라서 일을 이루려면 내가 먼저 행동하는 것이 중요합니다.<br><br> 만약 점의 대상이 사람이라면, 이는 내가 먼저 적극적으로 다가가면 충분히 원하는 결과물을 얻을 수 있는 상황입니다. 누군가와 갈등 중이라면 내가 승리할 수 있는 상황입니다. ";
    } else if (resultFuture.getAttribute("src") == "./pics/감.png") {
      explainResult.innerHTML =
        "이 일의 결과는 체력이 빨려 나가는 형상입니다<br><br> 따라서 고생스러운 상황이 이어질 것이고, 노력 대비 성과는 적을 것입니다. 점의 대상이 사람이라면, 이는 내가 일방적으로 상대방에게 호감을 가지고 있는 상황입니다. 누군가와 갈등 중이라면 이는 나의 패배를 의미합니다. <br><br>따라서 이 일의 결과는 안 좋으니 실행하지 않는 것이 좋습니다";
    } else if (resultFuture.getAttribute("src") == "./pics/간.png") {
      explainResult.innerHTML =
        "이 일의 결과는 이보다 더 좋을 수 없습니다! <br><br> 점의 대상이 사람이라면 이는 상대방이 나를 적극적으로 도울 예정이거나, 나에게 호감이 갖게 될 것을 드러냅니다. 마치 상대방은 부모와 같이 나를 도울 것입니다. 누군가와 갈등 중이라면 이는 나의 승리를 의미합니다. <br><br> 점의 대상이 사람이 아니라면 점의 대상은 나에게 무척 이롭게 작용할 것입니다.";
    } else {
      explainResult.innerHTML =
        "이 일의 결과는 이보다 더 좋을 수 없습니다! <br><br> 점의 대상이 사람이라면 이는 상대방이 나를 적극적으로 도울 예정이거나, 나에게 호감이 갖게 될 것을 드러냅니다. 마치 상대방은 부모와 같이 나를 도울 것입니다. 누군가와 갈등 중이라면 이는 나의 승리를 의미합니다. <br><br> 점의 대상이 사람이 아니라면 점의 대상은 나에게 무척 이롭게 작용할 것입니다.";
    }
  } else if (resultMe.getAttribute("src") == "./pics/태.png") {
    if (resultFuture.getAttribute("src") == "./pics/건.png") {
      explainResult.innerHTML =
        "이 일의 결과는 매우 좋습니다. <br><br> 점의 대상이 사람이라면 상대는 나와 같은 마음을 품고 있는 깊은 친구와 같습니다. 서로의 생각이 비슷하니 마음이 통하고 일이 잘 풀리게 됩니다. 누군가와 갈등 중이라면 이는 나의 승리를 의미합니다. <br><br> 점의 대상이 사람이 아니라면, 역시 점의 대상은 나에게 이로운 상황을 가져올 것입니다";
    } else if (resultFuture.getAttribute("src") == "./pics/태.png") {
      explainResult.innerHTML =
        "이 일의 결과는 매우 좋습니다. <br><br> 점의 대상이 사람이라면 상대는 나와 같은 마음을 품고 있는 깊은 친구와 같습니다. 서로의 생각이 비슷하니 마음이 통하고 일이 잘 풀리게 됩니다. 누군가와 갈등 중이라면 이는 나의 승리를 의미합니다. <br><br> 점의 대상이 사람이 아니라면, 역시 점의 대상은 나에게 이로운 상황을 가져올 것입니다";
    } else if (resultFuture.getAttribute("src") == "./pics/리.png") {
      explainResult.innerHTML =
        "이 일의 결과는 매우 안 좋습니다 <br><br> 점의 대상이 사람이라면, 상대가 나를 싫어하거나 혹은 나를 공격하고 있는 상황입니다. 점의 대상이 사람이 아니라면, 해당 대상이 나에게 피해를 입힐 것을 의미합니다";
    } else if (resultFuture.getAttribute("src") == "./pics/진.png") {
      explainResult.innerHTML =
        "이 일의 결과는 조금의 어려움은 있지만 헤쳐나갈 수 있는 상황입니다<br><br> 좋은 결과를 내기까지 일이 순조롭게 이루어지진 않고 약간의 장애물이 존재하지만, 노력을 통해 충분히 극복 가능한 상황입니다. 따라서 일을 이루려면 내가 먼저 행동하는 것이 중요합니다.<br><br> 만약 점의 대상이 사람이라면, 이는 내가 먼저 적극적으로 다가가면 충분히 원하는 결과물을 얻을 수 있는 상황입니다. 누군가와 갈등 중이라면 내가 승리할 수 있는 상황입니다. ";
    } else if (resultFuture.getAttribute("src") == "./pics/손.png") {
      explainResult.innerHTML =
        "이 일의 결과는 조금의 어려움은 있지만 헤쳐나갈 수 있는 상황입니다<br><br> 좋은 결과를 내기까지 일이 순조롭게 이루어지진 않고 약간의 장애물이 존재하지만, 노력을 통해 충분히 극복 가능한 상황입니다. 따라서 일을 이루려면 내가 먼저 행동하는 것이 중요합니다.<br><br> 만약 점의 대상이 사람이라면, 이는 내가 먼저 적극적으로 다가가면 충분히 원하는 결과물을 얻을 수 있는 상황입니다. 누군가와 갈등 중이라면 내가 승리할 수 있는 상황입니다. ";
    } else if (resultFuture.getAttribute("src") == "./pics/감.png") {
      explainResult.innerHTML =
        "이 일의 결과는 체력이 빨려 나가는 형상입니다<br><br> 따라서 고생스러운 상황이 이어질 것이고, 노력 대비 성과는 적을 것입니다. 점의 대상이 사람이라면, 이는 내가 일방적으로 상대방에게 호감을 가지고 있는 상황입니다. 누군가와 갈등 중이라면 이는 나의 패배를 의미합니다. <br><br>따라서 이 일의 결과는 안 좋으니 실행하지 않는 것이 좋습니다";
    } else if (resultFuture.getAttribute("src") == "./pics/간.png") {
      explainResult.innerHTML =
        "이 일의 결과는 이보다 더 좋을 수 없습니다! <br><br> 점의 대상이 사람이라면 이는 상대방이 나를 적극적으로 도울 예정이거나, 나에게 호감이 갖게 될 것을 드러냅니다. 마치 상대방은 부모와 같이 나를 도울 것입니다. 누군가와 갈등 중이라면 이는 나의 승리를 의미합니다. <br><br> 점의 대상이 사람이 아니라면 점의 대상은 나에게 무척 이롭게 작용할 것입니다.";
    } else {
      explainResult.innerHTML =
        "이 일의 결과는 이보다 더 좋을 수 없습니다! <br><br> 점의 대상이 사람이라면 이는 상대방이 나를 적극적으로 도울 예정이거나, 나에게 호감이 갖게 될 것을 드러냅니다. 마치 상대방은 부모와 같이 나를 도울 것입니다. 누군가와 갈등 중이라면 이는 나의 승리를 의미합니다. <br><br> 점의 대상이 사람이 아니라면 점의 대상은 나에게 무척 이롭게 작용할 것입니다.";
    }
  } else if (resultMe.getAttribute("src") == "./pics/리.png") {
    if (resultFuture.getAttribute("src") == "./pics/건.png") {
      explainResult.innerHTML =
        "이 일의 결과는 조금의 어려움은 있지만 헤쳐나갈 수 있는 상황입니다<br><br> 좋은 결과를 내기까지 일이 순조롭게 이루어지진 않고 약간의 장애물이 존재하지만, 노력을 통해 충분히 극복 가능한 상황입니다. 따라서 일을 이루려면 내가 먼저 행동하는 것이 중요합니다.<br><br> 만약 점의 대상이 사람이라면, 이는 내가 먼저 적극적으로 다가가면 충분히 원하는 결과물을 얻을 수 있는 상황입니다. 누군가와 갈등 중이라면 내가 승리할 수 있는 상황입니다. ";
    } else if (resultFuture.getAttribute("src") == "./pics/태.png") {
      explainResult.innerHTML =
        "이 일의 결과는 조금의 어려움은 있지만 헤쳐나갈 수 있는 상황입니다<br><br> 좋은 결과를 내기까지 일이 순조롭게 이루어지진 않고 약간의 장애물이 존재하지만, 노력을 통해 충분히 극복 가능한 상황입니다. 따라서 일을 이루려면 내가 먼저 행동하는 것이 중요합니다.<br><br> 만약 점의 대상이 사람이라면, 이는 내가 먼저 적극적으로 다가가면 충분히 원하는 결과물을 얻을 수 있는 상황입니다. 누군가와 갈등 중이라면 내가 승리할 수 있는 상황입니다. ";
    } else if (resultFuture.getAttribute("src") == "./pics/리.png") {
      explainResult.innerHTML =
        "이 일의 결과는 매우 좋습니다. <br><br> 점의 대상이 사람이라면 상대는 나와 같은 마음을 품고 있는 깊은 친구와 같습니다. 서로의 생각이 비슷하니 마음이 통하고 일이 잘 풀리게 됩니다. 누군가와 갈등 중이라면 이는 나의 승리를 의미합니다. <br><br> 점의 대상이 사람이 아니라면, 역시 점의 대상은 나에게 이로운 상황을 가져올 것입니다";
    } else if (resultFuture.getAttribute("src") == "./pics/진.png") {
      explainResult.innerHTML =
        "이 일의 결과는 이보다 더 좋을 수 없습니다! <br><br> 점의 대상이 사람이라면 이는 상대방이 나를 적극적으로 도울 예정이거나, 나에게 호감이 갖게 될 것을 드러냅니다. 마치 상대방은 부모와 같이 나를 도울 것입니다. 누군가와 갈등 중이라면 이는 나의 승리를 의미합니다. <br><br> 점의 대상이 사람이 아니라면 점의 대상은 나에게 무척 이롭게 작용할 것입니다.";
    } else if (resultFuture.getAttribute("src") == "./pics/손.png") {
      explainResult.innerHTML =
        "이 일의 결과는 이보다 더 좋을 수 없습니다! <br><br> 점의 대상이 사람이라면 이는 상대방이 나를 적극적으로 도울 예정이거나, 나에게 호감이 갖게 될 것을 드러냅니다. 마치 상대방은 부모와 같이 나를 도울 것입니다. 누군가와 갈등 중이라면 이는 나의 승리를 의미합니다. <br><br> 점의 대상이 사람이 아니라면 점의 대상은 나에게 무척 이롭게 작용할 것입니다.";
    } else if (resultFuture.getAttribute("src") == "./pics/감.png") {
      explainResult.innerHTML =
        "이 일의 결과는 매우 안 좋습니다 <br><br> 점의 대상이 사람이라면, 상대가 나를 싫어하거나 혹은 나를 공격하고 있는 상황입니다. 점의 대상이 사람이 아니라면, 해당 대상이 나에게 피해를 입힐 것을 의미합니다";
    } else if (resultFuture.getAttribute("src") == "./pics/간.png") {
      explainResult.innerHTML =
        "이 일의 결과는 체력이 빨려 나가는 형상입니다<br><br> 따라서 고생스러운 상황이 이어질 것이고, 노력 대비 성과는 적을 것입니다. 점의 대상이 사람이라면, 이는 내가 일방적으로 상대방에게 호감을 가지고 있는 상황입니다. 누군가와 갈등 중이라면 이는 나의 패배를 의미합니다. <br><br>따라서 이 일의 결과는 안 좋으니 실행하지 않는 것이 좋습니다";
    } else {
      explainResult.innerHTML =
        "이 일의 결과는 체력이 빨려 나가는 형상입니다<br><br> 따라서 고생스러운 상황이 이어질 것이고, 노력 대비 성과는 적을 것입니다. 점의 대상이 사람이라면, 이는 내가 일방적으로 상대방에게 호감을 가지고 있는 상황입니다. 누군가와 갈등 중이라면 이는 나의 패배를 의미합니다. <br><br>따라서 이 일의 결과는 안 좋으니 실행하지 않는 것이 좋습니다";
    }
  } else if (resultMe.getAttribute("src") == "./pics/진.png") {
    if (resultFuture.getAttribute("src") == "./pics/건.png") {
      explainResult.innerHTML =
        "이 일의 결과는 매우 안 좋습니다 <br><br> 점의 대상이 사람이라면, 상대가 나를 싫어하거나 혹은 나를 공격하고 있는 상황입니다. 점의 대상이 사람이 아니라면, 해당 대상이 나에게 피해를 입힐 것을 의미합니다";
    } else if (resultFuture.getAttribute("src") == "./pics/태.png") {
      explainResult.innerHTML =
        "이 일의 결과는 매우 안 좋습니다 <br><br> 점의 대상이 사람이라면, 상대가 나를 싫어하거나 혹은 나를 공격하고 있는 상황입니다. 점의 대상이 사람이 아니라면, 해당 대상이 나에게 피해를 입힐 것을 의미합니다";
    } else if (resultFuture.getAttribute("src") == "./pics/리.png") {
      explainResult.innerHTML =
        "이 일의 결과는 체력이 빨려 나가는 형상입니다<br><br> 따라서 고생스러운 상황이 이어질 것이고, 노력 대비 성과는 적을 것입니다. 점의 대상이 사람이라면, 이는 내가 일방적으로 상대방에게 호감을 가지고 있는 상황입니다. 누군가와 갈등 중이라면 이는 나의 패배를 의미합니다. <br><br>따라서 이 일의 결과는 안 좋으니 실행하지 않는 것이 좋습니다";
    } else if (resultFuture.getAttribute("src") == "./pics/진.png") {
      explainResult.innerHTML =
        "이 일의 결과는 매우 좋습니다. <br><br> 점의 대상이 사람이라면 상대는 나와 같은 마음을 품고 있는 깊은 친구와 같습니다. 서로의 생각이 비슷하니 마음이 통하고 일이 잘 풀리게 됩니다. 누군가와 갈등 중이라면 이는 나의 승리를 의미합니다. <br><br> 점의 대상이 사람이 아니라면, 역시 점의 대상은 나에게 이로운 상황을 가져올 것입니다";
    } else if (resultFuture.getAttribute("src") == "./pics/손.png") {
      explainResult.innerHTML =
        "이 일의 결과는 매우 좋습니다. <br><br> 점의 대상이 사람이라면 상대는 나와 같은 마음을 품고 있는 깊은 친구와 같습니다. 서로의 생각이 비슷하니 마음이 통하고 일이 잘 풀리게 됩니다. 누군가와 갈등 중이라면 이는 나의 승리를 의미합니다. <br><br> 점의 대상이 사람이 아니라면, 역시 점의 대상은 나에게 이로운 상황을 가져올 것입니다";
    } else if (resultFuture.getAttribute("src") == "./pics/감.png") {
      explainResult.innerHTML =
        "이 일의 결과는 이보다 더 좋을 수 없습니다! <br><br> 점의 대상이 사람이라면 이는 상대방이 나를 적극적으로 도울 예정이거나, 나에게 호감이 갖게 될 것을 드러냅니다. 마치 상대방은 부모와 같이 나를 도울 것입니다. 누군가와 갈등 중이라면 이는 나의 승리를 의미합니다. <br><br> 점의 대상이 사람이 아니라면 점의 대상은 나에게 무척 이롭게 작용할 것입니다.";
    } else if (resultFuture.getAttribute("src") == "./pics/간.png") {
      explainResult.innerHTML =
        "이 일의 결과는 조금의 어려움은 있지만 헤쳐나갈 수 있는 상황입니다<br><br> 좋은 결과를 내기까지 일이 순조롭게 이루어지진 않고 약간의 장애물이 존재하지만, 노력을 통해 충분히 극복 가능한 상황입니다. 따라서 일을 이루려면 내가 먼저 행동하는 것이 중요합니다.<br><br> 만약 점의 대상이 사람이라면, 이는 내가 먼저 적극적으로 다가가면 충분히 원하는 결과물을 얻을 수 있는 상황입니다. 누군가와 갈등 중이라면 내가 승리할 수 있는 상황입니다. ";
    } else {
      explainResult.innerHTML =
        "이 일의 결과는 조금의 어려움은 있지만 헤쳐나갈 수 있는 상황입니다<br><br> 좋은 결과를 내기까지 일이 순조롭게 이루어지진 않고 약간의 장애물이 존재하지만, 노력을 통해 충분히 극복 가능한 상황입니다. 따라서 일을 이루려면 내가 먼저 행동하는 것이 중요합니다.<br><br> 만약 점의 대상이 사람이라면, 이는 내가 먼저 적극적으로 다가가면 충분히 원하는 결과물을 얻을 수 있는 상황입니다. 누군가와 갈등 중이라면 내가 승리할 수 있는 상황입니다. ";
    }
  } else if (resultMe.getAttribute("src") == "./pics/손.png") {
    if (resultFuture.getAttribute("src") == "./pics/건.png") {
      explainResult.innerHTML =
        "이 일의 결과는 매우 안 좋습니다 <br><br> 점의 대상이 사람이라면, 상대가 나를 싫어하거나 혹은 나를 공격하고 있는 상황입니다. 점의 대상이 사람이 아니라면, 해당 대상이 나에게 피해를 입힐 것을 의미합니다";
    } else if (resultFuture.getAttribute("src") == "./pics/태.png") {
      explainResult.innerHTML =
        "이 일의 결과는 매우 안 좋습니다 <br><br> 점의 대상이 사람이라면, 상대가 나를 싫어하거나 혹은 나를 공격하고 있는 상황입니다. 점의 대상이 사람이 아니라면, 해당 대상이 나에게 피해를 입힐 것을 의미합니다";
    } else if (resultFuture.getAttribute("src") == "./pics/리.png") {
      explainResult.innerHTML =
        "이 일의 결과는 체력이 빨려 나가는 형상입니다<br><br> 따라서 고생스러운 상황이 이어질 것이고, 노력 대비 성과는 적을 것입니다. 점의 대상이 사람이라면, 이는 내가 일방적으로 상대방에게 호감을 가지고 있는 상황입니다. 누군가와 갈등 중이라면 이는 나의 패배를 의미합니다. <br><br>따라서 이 일의 결과는 안 좋으니 실행하지 않는 것이 좋습니다";
    } else if (resultFuture.getAttribute("src") == "./pics/진.png") {
      explainResult.innerHTML =
        "이 일의 결과는 매우 좋습니다. <br><br> 점의 대상이 사람이라면 상대는 나와 같은 마음을 품고 있는 깊은 친구와 같습니다. 서로의 생각이 비슷하니 마음이 통하고 일이 잘 풀리게 됩니다. 누군가와 갈등 중이라면 이는 나의 승리를 의미합니다. <br><br> 점의 대상이 사람이 아니라면, 역시 점의 대상은 나에게 이로운 상황을 가져올 것입니다";
    } else if (resultFuture.getAttribute("src") == "./pics/손.png") {
      explainResult.innerHTML =
        "이 일의 결과는 매우 좋습니다. <br><br> 점의 대상이 사람이라면 상대는 나와 같은 마음을 품고 있는 깊은 친구와 같습니다. 서로의 생각이 비슷하니 마음이 통하고 일이 잘 풀리게 됩니다. 누군가와 갈등 중이라면 이는 나의 승리를 의미합니다. <br><br> 점의 대상이 사람이 아니라면, 역시 점의 대상은 나에게 이로운 상황을 가져올 것입니다";
    } else if (resultFuture.getAttribute("src") == "./pics/감.png") {
      explainResult.innerHTML =
        "이 일의 결과는 이보다 더 좋을 수 없습니다! <br><br> 점의 대상이 사람이라면 이는 상대방이 나를 적극적으로 도울 예정이거나, 나에게 호감이 갖게 될 것을 드러냅니다. 마치 상대방은 부모와 같이 나를 도울 것입니다. 누군가와 갈등 중이라면 이는 나의 승리를 의미합니다. <br><br> 점의 대상이 사람이 아니라면 점의 대상은 나에게 무척 이롭게 작용할 것입니다.";
    } else if (resultFuture.getAttribute("src") == "./pics/간.png") {
      explainResult.innerHTML =
        "이 일의 결과는 조금의 어려움은 있지만 헤쳐나갈 수 있는 상황입니다<br><br> 좋은 결과를 내기까지 일이 순조롭게 이루어지진 않고 약간의 장애물이 존재하지만, 노력을 통해 충분히 극복 가능한 상황입니다. 따라서 일을 이루려면 내가 먼저 행동하는 것이 중요합니다.<br><br> 만약 점의 대상이 사람이라면, 이는 내가 먼저 적극적으로 다가가면 충분히 원하는 결과물을 얻을 수 있는 상황입니다. 누군가와 갈등 중이라면 내가 승리할 수 있는 상황입니다. ";
    } else {
      explainResult.innerHTML =
        "이 일의 결과는 조금의 어려움은 있지만 헤쳐나갈 수 있는 상황입니다<br><br> 좋은 결과를 내기까지 일이 순조롭게 이루어지진 않고 약간의 장애물이 존재하지만, 노력을 통해 충분히 극복 가능한 상황입니다. 따라서 일을 이루려면 내가 먼저 행동하는 것이 중요합니다.<br><br> 만약 점의 대상이 사람이라면, 이는 내가 먼저 적극적으로 다가가면 충분히 원하는 결과물을 얻을 수 있는 상황입니다. 누군가와 갈등 중이라면 내가 승리할 수 있는 상황입니다. ";
    }
  } else if (resultMe.getAttribute("src") == "./pics/감.png") {
    if (resultFuture.getAttribute("src") == "./pics/건.png") {
      explainResult.innerHTML =
        "이 일의 결과는 이보다 더 좋을 수 없습니다! <br><br> 점의 대상이 사람이라면 이는 상대방이 나를 적극적으로 도울 예정이거나, 나에게 호감이 갖게 될 것을 드러냅니다. 마치 상대방은 부모와 같이 나를 도울 것입니다. 누군가와 갈등 중이라면 이는 나의 승리를 의미합니다. <br><br> 점의 대상이 사람이 아니라면 점의 대상은 나에게 무척 이롭게 작용할 것입니다.";
    } else if (resultFuture.getAttribute("src") == "./pics/태.png") {
      explainResult.innerHTML =
        "이 일의 결과는 이보다 더 좋을 수 없습니다! <br><br> 점의 대상이 사람이라면 이는 상대방이 나를 적극적으로 도울 예정이거나, 나에게 호감이 갖게 될 것을 드러냅니다. 마치 상대방은 부모와 같이 나를 도울 것입니다. 누군가와 갈등 중이라면 이는 나의 승리를 의미합니다. <br><br> 점의 대상이 사람이 아니라면 점의 대상은 나에게 무척 이롭게 작용할 것입니다.";
    } else if (resultFuture.getAttribute("src") == "./pics/리.png") {
      explainResult.innerHTML =
        "이 일의 결과는 조금의 어려움은 있지만 헤쳐나갈 수 있는 상황입니다<br><br> 좋은 결과를 내기까지 일이 순조롭게 이루어지진 않고 약간의 장애물이 존재하지만, 노력을 통해 충분히 극복 가능한 상황입니다. 따라서 일을 이루려면 내가 먼저 행동하는 것이 중요합니다.<br><br> 만약 점의 대상이 사람이라면, 이는 내가 먼저 적극적으로 다가가면 충분히 원하는 결과물을 얻을 수 있는 상황입니다. 누군가와 갈등 중이라면 내가 승리할 수 있는 상황입니다. ";
    } else if (resultFuture.getAttribute("src") == "./pics/진.png") {
      explainResult.innerHTML =
        "이 일의 결과는 체력이 빨려 나가는 형상입니다<br><br> 따라서 고생스러운 상황이 이어질 것이고, 노력 대비 성과는 적을 것입니다. 점의 대상이 사람이라면, 이는 내가 일방적으로 상대방에게 호감을 가지고 있는 상황입니다. 누군가와 갈등 중이라면 이는 나의 패배를 의미합니다. <br><br>따라서 이 일의 결과는 안 좋으니 실행하지 않는 것이 좋습니다";
    } else if (resultFuture.getAttribute("src") == "./pics/손.png") {
      explainResult.innerHTML =
        "이 일의 결과는 체력이 빨려 나가는 형상입니다<br><br> 따라서 고생스러운 상황이 이어질 것이고, 노력 대비 성과는 적을 것입니다. 점의 대상이 사람이라면, 이는 내가 일방적으로 상대방에게 호감을 가지고 있는 상황입니다. 누군가와 갈등 중이라면 이는 나의 패배를 의미합니다. <br><br>따라서 이 일의 결과는 안 좋으니 실행하지 않는 것이 좋습니다";
    } else if (resultFuture.getAttribute("src") == "./pics/감.png") {
      explainResult.innerHTML =
        "이 일의 결과는 매우 좋습니다. <br><br> 점의 대상이 사람이라면 상대는 나와 같은 마음을 품고 있는 깊은 친구와 같습니다. 서로의 생각이 비슷하니 마음이 통하고 일이 잘 풀리게 됩니다. 누군가와 갈등 중이라면 이는 나의 승리를 의미합니다. <br><br> 점의 대상이 사람이 아니라면, 역시 점의 대상은 나에게 이로운 상황을 가져올 것입니다";
    } else if (resultFuture.getAttribute("src") == "./pics/간.png") {
      explainResult.innerHTML =
        "이 일의 결과는 매우 안 좋습니다 <br><br> 점의 대상이 사람이라면, 상대가 나를 싫어하거나 혹은 나를 공격하고 있는 상황입니다. 점의 대상이 사람이 아니라면, 해당 대상이 나에게 피해를 입힐 것을 의미합니다";
    } else {
      explainResult.innerHTML =
        "이 일의 결과는 매우 안 좋습니다 <br><br> 점의 대상이 사람이라면, 상대가 나를 싫어하거나 혹은 나를 공격하고 있는 상황입니다. 점의 대상이 사람이 아니라면, 해당 대상이 나에게 피해를 입힐 것을 의미합니다";
    }
  } else if (resultMe.getAttribute("src") == "./pics/간.png") {
    if (resultFuture.getAttribute("src") == "./pics/건.png") {
      explainResult.innerHTML =
        "이 일의 결과는 체력이 빨려 나가는 형상입니다<br><br> 따라서 고생스러운 상황이 이어질 것이고, 노력 대비 성과는 적을 것입니다. 점의 대상이 사람이라면, 이는 내가 일방적으로 상대방에게 호감을 가지고 있는 상황입니다. 누군가와 갈등 중이라면 이는 나의 패배를 의미합니다. <br><br>따라서 이 일의 결과는 안 좋으니 실행하지 않는 것이 좋습니다";
    } else if (resultFuture.getAttribute("src") == "./pics/태.png") {
      explainResult.innerHTML =
        "이 일의 결과는 체력이 빨려 나가는 형상입니다<br><br> 따라서 고생스러운 상황이 이어질 것이고, 노력 대비 성과는 적을 것입니다. 점의 대상이 사람이라면, 이는 내가 일방적으로 상대방에게 호감을 가지고 있는 상황입니다. 누군가와 갈등 중이라면 이는 나의 패배를 의미합니다. <br><br>따라서 이 일의 결과는 안 좋으니 실행하지 않는 것이 좋습니다";
    } else if (resultFuture.getAttribute("src") == "./pics/리.png") {
      explainResult.innerHTML =
        "이 일의 결과는 이보다 더 좋을 수 없습니다! <br><br> 점의 대상이 사람이라면 이는 상대방이 나를 적극적으로 도울 예정이거나, 나에게 호감이 갖게 될 것을 드러냅니다. 마치 상대방은 부모와 같이 나를 도울 것입니다. 누군가와 갈등 중이라면 이는 나의 승리를 의미합니다. <br><br> 점의 대상이 사람이 아니라면 점의 대상은 나에게 무척 이롭게 작용할 것입니다.";
    } else if (resultFuture.getAttribute("src") == "./pics/진.png") {
      explainResult.innerHTML =
        "이 일의 결과는 매우 안 좋습니다 <br><br> 점의 대상이 사람이라면, 상대가 나를 싫어하거나 혹은 나를 공격하고 있는 상황입니다. 점의 대상이 사람이 아니라면, 해당 대상이 나에게 피해를 입힐 것을 의미합니다";
    } else if (resultFuture.getAttribute("src") == "./pics/손.png") {
      explainResult.innerHTML =
        "이 일의 결과는 매우 안 좋습니다 <br><br> 점의 대상이 사람이라면, 상대가 나를 싫어하거나 혹은 나를 공격하고 있는 상황입니다. 점의 대상이 사람이 아니라면, 해당 대상이 나에게 피해를 입힐 것을 의미합니다";
    } else if (resultFuture.getAttribute("src") == "./pics/감.png") {
      explainResult.innerHTML =
        "이 일의 결과는 조금의 어려움은 있지만 헤쳐나갈 수 있는 상황입니다<br><br> 좋은 결과를 내기까지 일이 순조롭게 이루어지진 않고 약간의 장애물이 존재하지만, 노력을 통해 충분히 극복 가능한 상황입니다. 따라서 일을 이루려면 내가 먼저 행동하는 것이 중요합니다.<br><br> 만약 점의 대상이 사람이라면, 이는 내가 먼저 적극적으로 다가가면 충분히 원하는 결과물을 얻을 수 있는 상황입니다. 누군가와 갈등 중이라면 내가 승리할 수 있는 상황입니다. ";
    } else if (resultFuture.getAttribute("src") == "./pics/간.png") {
      explainResult.innerHTML =
        "이 일의 결과는 매우 좋습니다. <br><br> 점의 대상이 사람이라면 상대는 나와 같은 마음을 품고 있는 깊은 친구와 같습니다. 서로의 생각이 비슷하니 마음이 통하고 일이 잘 풀리게 됩니다. 누군가와 갈등 중이라면 이는 나의 승리를 의미합니다. <br><br> 점의 대상이 사람이 아니라면, 역시 점의 대상은 나에게 이로운 상황을 가져올 것입니다";
    } else {
      explainResult.innerHTML =
        "이 일의 결과는 매우 좋습니다. <br><br> 점의 대상이 사람이라면 상대는 나와 같은 마음을 품고 있는 깊은 친구와 같습니다. 서로의 생각이 비슷하니 마음이 통하고 일이 잘 풀리게 됩니다. 누군가와 갈등 중이라면 이는 나의 승리를 의미합니다. <br><br> 점의 대상이 사람이 아니라면, 역시 점의 대상은 나에게 이로운 상황을 가져올 것입니다";
    }
  } else if (resultMe.getAttribute("src") == "./pics/곤.png") {
    if (resultFuture.getAttribute("src") == "./pics/건.png") {
      explainResult.innerHTML =
        "이 일의 결과는 체력이 빨려 나가는 형상입니다<br><br> 따라서 고생스러운 상황이 이어질 것이고, 노력 대비 성과는 적을 것입니다. 점의 대상이 사람이라면, 이는 내가 일방적으로 상대방에게 호감을 가지고 있는 상황입니다. 누군가와 갈등 중이라면 이는 나의 패배를 의미합니다. <br><br>따라서 이 일의 결과는 안 좋으니 실행하지 않는 것이 좋습니다";
    } else if (resultFuture.getAttribute("src") == "./pics/태.png") {
      explainResult.innerHTML =
        "이 일의 결과는 체력이 빨려 나가는 형상입니다<br><br> 따라서 고생스러운 상황이 이어질 것이고, 노력 대비 성과는 적을 것입니다. 점의 대상이 사람이라면, 이는 내가 일방적으로 상대방에게 호감을 가지고 있는 상황입니다. 누군가와 갈등 중이라면 이는 나의 패배를 의미합니다. <br><br>따라서 이 일의 결과는 안 좋으니 실행하지 않는 것이 좋습니다";
    } else if (resultFuture.getAttribute("src") == "./pics/리.png") {
      explainResult.innerHTML =
        "이 일의 결과는 이보다 더 좋을 수 없습니다! <br><br> 점의 대상이 사람이라면 이는 상대방이 나를 적극적으로 도울 예정이거나, 나에게 호감이 갖게 될 것을 드러냅니다. 마치 상대방은 부모와 같이 나를 도울 것입니다. 누군가와 갈등 중이라면 이는 나의 승리를 의미합니다. <br><br> 점의 대상이 사람이 아니라면 점의 대상은 나에게 무척 이롭게 작용할 것입니다.";
    } else if (resultFuture.getAttribute("src") == "./pics/진.png") {
      explainResult.innerHTML =
        "이 일의 결과는 매우 안 좋습니다 <br><br> 점의 대상이 사람이라면, 상대가 나를 싫어하거나 혹은 나를 공격하고 있는 상황입니다. 점의 대상이 사람이 아니라면, 해당 대상이 나에게 피해를 입힐 것을 의미합니다";
    } else if (resultFuture.getAttribute("src") == "./pics/손.png") {
      explainResult.innerHTML =
        "이 일의 결과는 매우 안 좋습니다 <br><br> 점의 대상이 사람이라면, 상대가 나를 싫어하거나 혹은 나를 공격하고 있는 상황입니다. 점의 대상이 사람이 아니라면, 해당 대상이 나에게 피해를 입힐 것을 의미합니다";
    } else if (resultFuture.getAttribute("src") == "./pics/감.png") {
      explainResult.innerHTML =
        "이 일의 결과는 조금의 어려움은 있지만 헤쳐나갈 수 있는 상황입니다<br><br> 좋은 결과를 내기까지 일이 순조롭게 이루어지진 않고 약간의 장애물이 존재하지만, 노력을 통해 충분히 극복 가능한 상황입니다. 따라서 일을 이루려면 내가 먼저 행동하는 것이 중요합니다.<br><br> 만약 점의 대상이 사람이라면, 이는 내가 먼저 적극적으로 다가가면 충분히 원하는 결과물을 얻을 수 있는 상황입니다. 누군가와 갈등 중이라면 내가 승리할 수 있는 상황입니다. ";
    } else if (resultFuture.getAttribute("src") == "./pics/간.png") {
      explainResult.innerHTML =
        "이 일의 결과는 매우 좋습니다. <br><br> 점의 대상이 사람이라면 상대는 나와 같은 마음을 품고 있는 깊은 친구와 같습니다. 서로의 생각이 비슷하니 마음이 통하고 일이 잘 풀리게 됩니다. 누군가와 갈등 중이라면 이는 나의 승리를 의미합니다. <br><br> 점의 대상이 사람이 아니라면, 역시 점의 대상은 나에게 이로운 상황을 가져올 것입니다";
    } else {
      explainResult.innerHTML =
        "이 일의 결과는 매우 좋습니다. <br><br> 점의 대상이 사람이라면 상대는 나와 같은 마음을 품고 있는 깊은 친구와 같습니다. 서로의 생각이 비슷하니 마음이 통하고 일이 잘 풀리게 됩니다. 누군가와 갈등 중이라면 이는 나의 승리를 의미합니다. <br><br> 점의 대상이 사람이 아니라면, 역시 점의 대상은 나에게 이로운 상황을 가져올 것입니다";
    }
  }
}

function showFinalResult() {
  const finalResult = document.querySelector("#finalResult");
  const interpretation = document.querySelector("#interpretation");
  const mainResult = document.querySelector("#mainResult");
  const random = document.querySelector("#random");
  const information = document.querySelector("#information");

  finalResult.className = "container mt-6";
  interpretation.className = "has-text-centered mt-3";
  mainResult.className = "container mt-4";
  information.className = "container is-hidden";
  random.value = "점 다시 보기";
}

function showProMode() {
  const proMode = document.querySelector("#proMode");
  const proModeBtn = document.querySelector("#proModeBtn");

  if (proMode.className === "container is-hidden") {
    proMode.className = "";
    proModeBtn.value = "프로 모드 끄기";
  } else {
    proMode.className = "container is-hidden";
    proModeBtn.value = "프로 모드 열기";
  }
}
