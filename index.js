// let module = await import("/modules.js");
var words = [
  { abject: "of the most contemptible kind" },
  { aberration: "a state or condition markedly different from the norm" },
  { abjure: "formally reject or disavow a formerly held belief" },
  { abnegation: "the denial and rejection of a doctrine or belief" },
  { abrogate: "revoke formally" },
  { abscond: "run away, often taking something or somebody along" },
  { abstruse: "difficult to understand" },
  { accede: "yield to another's wish or opinion" },
  { accost: "approach and speak to someone aggressively or insistently" },
  { accretion: "an increase by natural growth or addition" },
  { acumen: "shrewdness shown by keen insight" },
  { adamant: "insistent; unwilling to change one's mind or opinion" },
  { admonish: "scold or reprimand; take to task" },
  { adumbrate: "describe roughly or give the main points or summary of" },

  { adverse: "in an opposing direction" },
  { advocate: "a person who pleads for a person, cause, or idea" },
  { affluent: "having an abundant supply of money or possessions of value" },
  { aggrandize: "embellish; increase the scope, power, or importance of" },
  { alacrity: "liveliness and eagerness" },
  { alias: "a name that has been assumed temporarily" },
];

document.body.addEventListener("click", (e) => console.log(e));
let chances = 0;
let form = document.getElementsByTagName("form");
let submit = document.getElementById("submit");

let definitions = document.querySelectorAll("#left-side > div");
let wordsDisplay = document.getElementById("words-display");
let incorrect = document.getElementById("incorrect");
let starter = document.getElementById("starter");
let timer = document.getElementById("timer");
//only keys of randomlypickedoBjects
let targets = document.getElementsByClassName("drop-targets");
let correctCounter;
function init() {
  correctCounter = 0;
  let keys = [];
  //inputs from form
  let answersInputs = [];
  //randomObjects
  let randomlyPickedObjs = randomizer(words);
  let levelCounter = 0;
  let randomkeys;
  console.log(randomlyPickedObjs);
  function dropCreater() {
    for (let i of targets) {
      i.addEventListener("dragover", function (ev) {
        ev.preventDefault();
      });
      i.addEventListener("drop", (ev) => {
        ev.preventDefault();

        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
      });
    }
  }
  dropCreater();

  function wait() {
    randomkeys = randomizer(keys);
    correctCounter = 0;
    keys = [];
    answersInputs = [];
    randomlyPickedObjs = randomizer(words);
    levelCounter = 0;
    keyExtract();
    definitionInserter();
  }

  function keyExtract() {
    for (let i of randomlyPickedObjs) {
      // console.log(i);
      for (let key in i) {
        keys.push(key);
      }
    }

    return keys;
  }
  keyExtract();

  function randomizer(array) {
    let counter = 8;
    let random = 0;
    let result = [];
    while (counter--) {
      random = Math.floor(Math.random() * (counter + 1));
      result.push(array[random]);
      array.splice(random, 1);
    }

    return result.sort(() => Math.random() - 0.5);
  }

  function definitionInserter() {
    randomkeys = randomizer(keys);
    for (let i = 0; i < definitions.length; i++) {
      definitions[i].innerHTML += " " + Object.values(randomlyPickedObjs[i]);

      buttonMaker(randomkeys[i], i);
    }
  }

  definitionInserter();
  submit.addEventListener("click", compareAnswer);
  function compareAnswer() {
    for (let i = 1; i <= 8; i++) {
      let answer = document.getElementById(`answer${i}`);
      console.log(answer);
    }
    checkAnswer();
  }

  function checkAnswer() {
    for (let i = 0; i < randomlyPickedObjs.length; i++) {
      for (let key in randomlyPickedObjs[i]) {
        if (key === answersInputs[i]) {
          correctCounter++;
          levelCounter++;
        }
      }
    }
    nextLevel();
  }
  function nextLevel() {
    console.log(correctCounter);

    if (correctCounter > 0) {
      for (let i = 0; i < definitions.length; i++) {
        definitions[i].innerHTML = `<span>Def${i + 1}:<span> `;

        document.querySelector(`#answer${i}`).value = " ";
      }
      wait();
    } else {
      for (let i = 0; i < definitions.length; i++) {
        definitions[i].innerHTML = `<span>Def${i + 1}:<span> `;

        document.querySelector(`#answer${i}`);
      }
      wait();
    }
  }
  function buttonMaker(a, i) {
    let button = document.createElement("button");

    button.innerHTML = a;

    button.setAttribute("draggable", true);
    button.setAttribute("id", i);
    button.addEventListener("drag", function (evt) {});
    button.addEventListener("dragstart", function (ev) {
      ev.dataTransfer.setData("text", ev.target.id);
    });
    wordsDisplay.append(button);
  }
}

let countTime = 0;
starter.addEventListener("click", timing);
function timing() {
  init();
  let time = setInterval(function () {
    timer.innerText = "Time: " + ++countTime;
    if (countTime === 30 || correctCounter < 4) {
      clearInterval(time);
      incorrect.innerHTML = "You're late";
    }
    if (correctCounter > 4) {
      clearInterval(time);
      countTime = 0;
      ///add refrefh
    }
  }, 1000);
}
