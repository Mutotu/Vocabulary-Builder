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
  { antithesis: "exact opposite" },
  { apocryphal: "being of questionable authenticity" },
  { approbation: "official acceptance or agreement" },
  { arbitrary: "based on or subject to individual discretion or preference" },
  { arboreal: "of or relating to or formed by trees" },
  { arcane: "requiring secret or mysterious knowledge" },
  { archetypal: "of an original type after which other things are patterned" },
  { arrogate: "seize and take control without authority" },
  { ascetic: "someone who practices self denial as a spiritual discipline" },
  { aspersion: "a disparaging remark" },
  { assiduous: "marked by care and persistent effort" },
  { atrophy: "a decrease in size of an organ caused by disease or disuse" },
  { bane: "something causing misery or death" },
  { bashful: "self-consciously timid" },
  { beguile: "influence by slyness" },
  { bereft: "lacking or deprived of something" },
  { blandishment: "flattery intended to persuade" },
  { bilk: "cheat somebody out of what is due, especially money" },
  { bombastic: "ostentatiously lofty in style" },
  { cajole: "influence or urge by gentle urging, caressing, or flattering" },
];
////
///
//////

/////////
///
////
let distance = document.getElementById("distance");
let form = document.getElementsByTagName("form");
let submit = document.getElementById("submit");
let chances = document.getElementById("level");
let definitions = document.querySelectorAll("#left-side > div");
let wordsDisplay = document.getElementById("words-display");
let incorrect = document.getElementById("incorrect");
let starter = document.getElementById("starter");
let timer = document.getElementById("timer");
let next = document.getElementById("next");
let replay = document.getElementById("replay");
//only keys of randomlypickedoBjects
let targets = document.getElementsByClassName("drop-targets");
//counting the correct answers
let correctCounter = 0;
let answersInputs = [];
// function init() {
correctCounter = 0;
///keys of objects from randomlypickedobjects
let keys = [];
//answers from user
answersInputs = [];
//randomObjects
let randomlyPickedObjs = randomizer(words);
///missing
let chance = 2;
///shuffeling the keys
let randomkeys = randomizer(keys);
console.log(randomlyPickedObjs);
let wrongCollector = [];
///draggable
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

/// supoosedly refresh the variables
function wait() {
  randomkeys = [];
  correctCounter = 0;
  keys = [];
  answersInputs = [];
  randomlyPickedObjs = randomizer(words);
  // levelCounter = 0;
  keyExtract();
  definitionInserter();
  buttonInserter();
}

////storing the keys of randomlypicedobjs to keys variable
function keyExtract() {
  for (let i of randomlyPickedObjs) {
    for (let key in i) {
      keys.push(key);
    }
  }

  return keys;
}
keyExtract();

///to get random data//find the lionk
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

///places the definitions (values from randomlypiskcedObjs)
function definitionInserter() {
  randomkeys = randomizer(keys);
  for (let i = 0; i < definitions.length; i++) {
    definitions[i].innerHTML += Object.values(randomlyPickedObjs[i]);
  }
}

function buttonInserter() {
  for (let i = 0; i < randomkeys.length; i++) {
    buttonMaker(randomkeys[i], i);
  }
}

//////////////////////
submit.addEventListener("click", getUserAnswers);
///getting user answers
function getUserAnswers() {
  starter.setAttribute("disabled", true);

  countTime = 1;
  for (let i = 0; i < targets.length; i++) {
    let answer = targets[i];
    if (answer.firstChild) {
      answersInputs.push(answer.firstChild.innerText);
    } else {
      answersInputs.push("empty");
    }
  }
  // console.log(answersInputs);
  checkAnswer();
  noMonster();
}
///supposedly compare user answers with corrct answers
function checkAnswer() {
  for (let i = 0; i < randomlyPickedObjs.length; i++) {
    for (let key in randomlyPickedObjs[i]) {
      if (key === answersInputs[i]) {
        correctCounter++;

        if (targets[i].firstChild) {
          targets[i].firstChild.style.backgroundColor = "green";
        }
      } else {
        if (targets[i].firstChild) {
          targets[i].firstChild.style.backgroundColor = "red";
          wrongCollector.push(targets[i].firstChild.innerText);
        }
      }
    }
  }
}

function answerCleaner() {
  for (let i = 0; i < targets.length; i++) {
    let answer = targets[i];
    if (answer.firstChild) {
      answer.firstChild.remove();
      // console.log(answer.firstChild);
    }
  }
}
next.addEventListener("click", nextLevel);

///supposedly go to the next game
function nextLevel() {
  timing();
  countTime = 30;
  submit.removeAttribute("disabled");
  console.log(countTime);
  answerCleaner();
  while (wordsDisplay.firstChild) {
    wordsDisplay.firstChild.remove();
  }

  for (let i = 0; i < definitions.length; i++) {
    definitions[i].innerHTML = `<span>Def ${i + 1}: </span>`;
  }
  wait();
  // console.log(randomkeys);
  // console.log(randomlyPickedObjs);
}

///createds buttom with drag attributes
function buttonMaker(a, i) {
  let button = document.createElement("button");

  button.innerHTML = a;
  button.style.margin = "4px";
  button.setAttribute("draggable", true);
  button.setAttribute("id", i);
  // button.addEventListener("drag", function (evt) {});
  button.addEventListener("dragstart", function (ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  });
  wordsDisplay.append(button);
}
function distanceAdjuster() {
  //   distance.style.height = "0px";
  //   //   distance.style.height = `${chance + 125}px`;
  if (chance === 1) {
    distance.style.height = "100px";
  } else if (chance === 0) {
    distance.style.height = "0px";
    document
      .getElementById("monster")
      .firstChild.setAttribute("src", "Cookie.gif");
    document.getElementById("intro").innerText = "Learn your words! lol";
    document.getElementById("kid").firstChild.remove();
    let buttons = document.querySelectorAll("button");
    for (let i of buttons) {
      if (i.id === "replay") {
        // console.log(replay);
        continue;
      } else {
        i.setAttribute("disabled", true);
        console.log("rest");
      }
    }
  }
}
function noMonster() {
  if (correctCounter > 7) {
    document
      .getElementById("monster")
      .firstChild.setAttribute("src", "giphy3.gif");
    document.getElementById("kid").firstChild.remove();
  } else if (correctCounter > 15) {
    document.getElementById("monster").firstChild.style.height = "100px";
    document.getElementById("monster").firstChild.style.width = "100px";
  }
}

///make a study sheet
function practice() {
  let result = {};
  for (let i = 0; i < words.length; i++) {
    if (words[i]) {
    }
  }

  console.log(result);
  return result;
}
////timing the game
let countTime = 30;
starter.addEventListener("click", timing);
function timing() {
  incorrect.innerHTML = "Time is moving!!";
  definitionInserter();
  buttonInserter();
  starter.setAttribute("disabled", true);
  let time = setInterval(function () {
    timer.innerText = "Time: " + --countTime;

    if (countTime === 0) {
      let wrongDisplay = document.getElementById("wrong-display");

      //   wrongDisplay.innerHTML = wrongCollector;
      for (let i of wrongCollector) {
        // console.log("wrong");
        wrongDisplay.innerHTML += i + "\n,";
      }
      submit.setAttribute("disabled", true);
      clearInterval(time);
      incorrect.innerHTML = `You got ${correctCounter} definitons!`;
      if (correctCounter > 3) {
        chances.innerHTML = `Your attempts=> ${chance}`;
      } else {
        chance--;
        chances.innerHTML = `Your attempts=> ${chance}`;
        distanceAdjuster();

        // console.log("practice");
      }
    }
  }, 1000);
}

replay.addEventListener("click", () => window.location.reload());
