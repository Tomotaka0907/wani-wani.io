"use strict";

const button = document.getElementById("button");

const number = document.getElementById("number");

const output = document.getElementById("output");

const reset = document.getElementById("reset");

function releaseGoters() {
  let numsGoter = Number(number.value);
  let goters = "";
  for (let i = 0; i < numsGoter; i++) {
    goters += "🐊";
  }

  output.innerText = goters;
  randomCharactor("pyonpyon");
}

releaseGoters();

button.addEventListener("click", releaseGoters);

function resetGoters() {
  // console.log("リセットボタンが！");
  let numsGoter = output.innerText.length;
  let goters = "";
  for (let i = 0; i < numsGoter; i++) {
    goters += " ";
  }
  output.innerText = "";
  number.value = "";
}

reset.addEventListener("click", resetGoters);

//     output.innerText = "🐊";
//     for (let i = 0; i <= number.value ; i++) {
//         output.innerText += "🐊";
//     }
// }

//////////

const inputText = document.getElementById("inputText");
inputText.addEventListener("keyup", keyUp, false);

/////////////////////////////////////////////////////////////////////////

function randomCharactor(c) {
  //跳ねさせる要素をすべて取得
  let randomChar = document.getElementsByClassName(c);
  console.log(randomChar);
  //for で総当たり
  for (let i = 0; i < randomChar.length; i++) {
    //クロージャー
    (function (i) {
      //i 番目の要素、テキスト内容、文字列の長さを取得
      let randomCharI = randomChar[i];
      let randomCharIText = randomCharI.textContent;
      let randomCharLength = randomCharIText.length;

      //何番目の文字を跳ねさせるかをランダムで決める
      let Num = ~~(Math.random() * randomCharLength);

      //跳ねさせる文字を span タグで囲む、それ以外の文字と合わせて再び文字列を作る
      let newRandomChar =
        randomCharIText.substring(0, Num) +
        `<span>` +
        // "<span style='background-color: '>" +
        randomCharIText.charAt(Num) +
        "</span>" +
        randomCharIText.substring(Num + 1, randomCharLength);
      randomCharI.innerHTML = newRandomChar;

      //アニメーションが終わったら再び関数を動作させる
      document.getElementsByClassName(c)[0].children[0].addEventListener(
        "animationend",
        function () {
          randomCharactor(c);
        },
        false
      );
    })(i);
  }
}

//カラフルCSS？
function getRandomColor() {
  let colorList = [/*"red", "green", "blue", "yellow", "pink"*/];
  return colorList[Math.floor(Math.random() * colorList.length)];
}

