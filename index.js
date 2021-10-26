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

let form = document.getElementsByTagName("form");
let submit = document.getElementById("submit");

let definitions = document.querySelectorAll("#left-side > div");
let wordsDisplay = document.getElementById("words-display");
let incorrect = document.getElementById("incorrect");
let starter = document.getElementById("starter");
let timer = document.getElementById("timer");
//only keys of randomlypickedoBjects

let correctCounter = 0;
let keys = [];
//inputs from form
let answersInputs = [];
//randomObjects
let randomlyPickedObjs = randomizer(words);
let levelCounter = 0;
let randomkeys;
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

  //Shuffle the array
  return result.sort(() => Math.random() - 0.5);
}

function definitionInserter() {
  randomkeys = randomizer(keys);
  for (let i = 0; i < definitions.length; i++) {
    definitions[i].innerHTML += " " + Object.values(randomlyPickedObjs[i]);
    // wordsDisplay.append(buttonMaker(randomkeys[i]));
    wordsDisplay.innerHTML += randomkeys[i] + " ";
  }
}
definitionInserter();
submit.addEventListener("click", compareAnswer);
function compareAnswer() {
  for (let i = 1; i <= 8; i++) {
    let answer = document.getElementById(`answer${i}`);
    answersInputs.push(answer.value);
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
  wordsDisplay.innerHTML = "";
  if (correctCounter > 0) {
    for (let i = 0; i < definitions.length; i++) {
      definitions[i].innerHTML = `<span>Def${i + 1}:<span> `;

      document.querySelector(`#answer${i}`);
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
let countTime = 0;
starter.addEventListener("click", timer);
function timer() {
  let time = setInterval(function () {
    timer.innerText = "Time: " + ++countTime;
    if (countTime === 30) {
      clearInterval(time);
    }
  }, 1000);
  section.removeEventListener("click", timer);
}
// function buttonMaker() {
//   let button = document.createElement("button");
//   for (let i = 0; i < randomkeys.length; i++) {
//     button.innerHTML = randomkeys[i];
//     wordsDisplay.append(button);
//   }
// }
// buttonMaker();
