"use strict";
////////////////////////
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
  { ambivalent: "uncertain or unable to decide about what course to follow" },
  { amenable: "disposed or willing to comply" },
  { amorphous: "having no definite form or distinct shape" },
  { anachronistic: "chronologically misplaced" },
  { anathema: "a formal ecclesiastical curse accompanied by excommunication" },
  { annex: "attach to" },
  { antediluvian: "of or relating to the period before the biblical flood" },
  { antiseptic: "thoroughly clean and free of disease-causing organisms" },
  { apathetic: "showing little or no emotion or animation" },
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
  { callous: "emotionally hardened" },
  { calumny: "a false accusation of an offense" },
  { camaraderie: "the quality of affording easy familiarity and sociability" },
  { candor: "the quality of being honest and straightforward" },
  { capitulate: "surrender under agreed conditions" },
  { carouse: "engage in boisterous, drunken merrymaking" },
  { carp: "any of various freshwater fish of the family Cyprinidae" },
  { caucus: "meet to select a candidate or promote a policy" },
  { cavort: "play boisterously" },
  { circumlocution: "an indirect way of expressing something" },
  { circumscribe: "draw a geometric figure around another figure" },
  { circumvent: "surround so as to force to give up" },
  { clamor: "utter or proclaim insistently and noisily" },
  { cleave: "separate or cut with a tool, such as a sharp instrument" },
  { cobbler: "a person who makes or repairs shoes" },
  { cogent: "powerfully persuasive" },
  { cognizant: "having or showing knowledge or understanding or realization" },
  { commensurate: "corresponding in size or degree or extent" },
  { complement: "something added to embellish or make perfect" },
  { compunction: "a feeling of deep regret, usually for some misdeed" },
  { concomitant: "following or accompanying as a consequence" },
  { conduit: "a passage through which water or electric wires can pass" },
  { conflagration: "a very intense and uncontrolled fire" },
  { congruity: "the quality of agreeing; being suitable and appropriate" },
  { connive: "form intrigues (for) in an underhand manner" },
  { consign: "give over to another for care or safekeeping" },
  { constituent: "one of the individual parts making up a composite entity" },
  { construe: "make sense of; assign a meaning to" },
  { contusion: "an injury in which the skin is not broken" },
  { contrite: "feeling or expressing pain or sorrow for sins or offenses" },
  { contentious: "showing an inclination to disagree" },
  { contravene: "go against, as of rules and laws" },
  { convivial: "occupied with or fond of the pleasures of good company" },
  { corpulence: "the property of excessive fatness" },
  { covet: "wish, long, or crave for" },
  { cupidity: "extreme greed for material wealth" },
  { dearth: "an insufficient quantity or number" },
  { debacle: "a sudden and complete disaster" },
  { debauch: "a wild gathering involving excessive drinking" },
  { debunk: "expose while ridiculing" },
  { defunct: "no longer in force or use; inactive" },
  { demagogue: "a leader who seeks support by appealing to popular passions" },
  { denigrate: "attack the good name and reputation of someone" },
  { derivative: "a compound obtained from another compound" },
  { despot: "a cruel and oppressive dictator" },
  { diaphanous: "so thin as to transmit light" },
  { didactic: "instructive, especially excessively" },
  { dirge: "a song or hymn of mourning as a memorial to a dead person" },
  { disaffected: "discontented as toward authority" },
  { discomfit: "cause to lose onen's composure" },
  { disparate: "fundamentally different or distinct in quality or kind" },
  { dispel: "cause to separate and go in different directions" },
  { disrepute: "the state of being held in low esteem" },
  { divisive: "causing or characterized by disagreement or disunity" },
  { dogmatic: "pertaining to a code of beliefs accepted as authoritative" },
  { dour: "showing a brooding ill humor" },
  { duplicity: "the act of deceiving or acting in bad faith" },
  { duress: "compulsory force or threat" },
  { eclectic: "selecting what seems best of various styles or ideas" },
  { edict: "a formal or authoritative proclamation" },
  { ebullient: "joyously unrestrained" },
  { egregious: "conspicuously and outrageously bad or reprehensible" },
  { elegy: "a mournful poem; a lament for the dead" },
  { elicit: "call forth, as an emotion, feeling, or response" },
  { embezzlement: "the fraudulent appropriation of funds or property" },
  { emend: "make corrections to" },
  { emollient: "a substance with a soothing effect when applied to the skin" },
  { empirical: "derived from experiment and observation rather than theory" },
  { emulate: "strive to equal or match, especially by imitating" },
  { enervate: "weaken physically, mentally, or morally" },
  { enfranchise: "grant freedom to, as from slavery or servitude" },
  { engender: "call forth" },
  { ephemeral: "anything short-lived, as an insect that lives only for a day" },
  { epistolary: "written in the form of letters or correspondence" },
  { equanimity: "steadiness of mind under stress" },
  { equivocal: "open to two or more interpretations" },
  { espouse: "choose and follow a theory, idea, policy, etc." },
  { evanescent: "short-lived; tending to vanish or disappear" },
  { evince: "give expression to" },
  { exacerbate: "make worse" },

  { exhort: "spur on or encourage especially by cheers and shouts" },
  { execrable: "unequivocally detestable" },
  { exigent: "demanding immediate attention" },
  { expedient: "appropriate to a purpose" },
  { expiate: "make amends for" },
  { expunge: "remove by erasing or crossing out or as if by drawing a line" },
  { extraneous: "not belonging to that in which it is contained" },
  { extol: "praise, glorify, or honor" },
  { extant: "still in existence; not extinct or destroyed or lost" },
  { expurgate: "edit by omitting or modifying parts considered indelicate" },
  { fallacious: "containing or based on incorrect reasoning" },
  { fatuous: "devoid of intelligence" },
  { fetter: "a shackle for the ankles or feet" },
  { flagrant: "conspicuously and outrageously bad or reprehensible" },
  { foil: "hinder or prevent, as an effort, plan, or desire" },
  { forbearance: "good-natured tolerance of delay or incompetence" },
  { fortuitous: "lucky; occurring by happy chance" },
  { fractious: "easily irritated or annoyed" },
  { garrulous: "full of trivial conversation" },
  { gourmand: "a person who is devoted to eating and drinking to excess" },
  { grandiloquent: "lofty in style" },
  { gratuitous: "unnecessary and unwarranted" },
  { hapless: "unfortunate and deserving pity" },
  { hegemony: "the dominance or leadership of one social group over others" },
  { heterogenous: "consisting of elements that are not of the same kind" },
  { iconoclast: "someone who attacks cherished ideas or institutions" },
  { idiosyncratic: "peculiar to the individual" },
  { impecunious: "not having enough money to pay for necessities" },
  { impetuous: "characterized by undue haste and lack of thought" },
  { impinge: "infringe upon" },
  { impute: "attribute or credit to" },
  { inane: "devoid of intelligence" },
  { inchoate: "only partly in existence; imperfectly formed" },
  { incontrovertible: "impossible to deny or disprove" },
  { incumbent: "necessary as a duty or responsibility; morally binding" },
  { inexorable: "impossible to prevent, resist, or stop" },
  { inimical: "tending to obstruct or cause harm" },
  { injunction: "a judicial remedy to prohibit a party from doing something" },
  { inoculate: "inject or treat with the germ of a disease to render immune" },
  { insidious: "working or spreading in a hidden and usually injurious way" },
  { instigate: "provoke or stir up" },
  { insurgent: "in opposition to a civil authority or government" },
  { interlocutor: "a person who takes part in a conversation" },

  { intimation: "a slight suggestion or vague understanding" },
  { inure: "cause to accept or become hardened to" },
  { invective: "abusive language used to express blame or censure" },
  { intransigent: "impervious to pleas, persuasion, requests, or reason" },
  { inveterate: "habitual" },
  { irreverence: "a mental attitude showing lack of due respect" },
  { knell: "the sound of a bell rung slowly to announce a death" },
  { laconic: "brief and to the point" },
  { largesse: "liberality in bestowing gifts" },
  { legerdemain: "an illusory feat" },
  { libertarian: "an advocate of freedom of thought and speech" },
  { licentious: "lacking moral discipline" },
  { linchpin: "a central cohesive source of support and stability" },
  { litigant: "a party to a lawsuit" },
  { maelstrom: "a powerful circular current of water" },
  { maudlin: "effusively or insincerely emotional" },
  { maverick: "someone who exhibits independence in thought and action" },
  { mawkish: "effusively or insincerely emotional" },
  { maxim: "a saying that is widely accepted on its own merits" },
  { mendacious: "given to lying" },
  { modicum: "a small or moderate or token amount" },
  { morass: "a soft wet area of low-lying land that sinks underfoot" },
  { mores: "the conventions embodying the fundamental values of a group" },
  { munificent: "very generous" },
  { multifarious: "having many aspects" },
  { nadir: "the lowest point of anything" },
  { negligent: "characterized by undue lack of attention or concern" },

  { neophyte: "any new participant in some activity" },
  { noisome: "offensively malodorous" },
  { noxious: "injurious to physical or mental health" },
  { obdurate: "stubbornly persistent in wrongdoing" },
  { obfuscate: "make obscure or unclear" },
  { obstreperous: "noisily and stubbornly defiant" },
  { officious: "intrusive in a meddling or offensive manner" },
  { onerous: "burdensome or difficult to endure" },
  { ostensible: "appearing as such but not necessarily so" },
  { ostracism: "the act of excluding someone from society by general consent" },
  { palliate: "lessen or to try to lessen the seriousness or extent of" },
  { panacea: "hypothetical remedy for all ills or diseases" },
  { paradigm: "a standard or typical example" },
  { pariah: "a person who is rejected from society or home" },
  { partisan: "a fervent and even militant proponent of something" },
  { paucity: "an insufficient quantity or number" },
  { pejorative: "expressing disapproval" },
  { pellucid: "transparently clear; easily understandable" },
  { penchant: "a strong liking or preference" },
  { penurious: "excessively unwilling to spend" },
  { pert: "characterized by a lightly saucy or impudent quality" },
  { pernicious: "exceedingly harmful" },
  { pertinacious: "stubbornly unyielding" },
  { phlegmatic: "showing little emotion" },
  { philanthropic: "of or relating to charitable giving" },
  { pithy: "concise and full of meaning" },
  { platitude: "a trite or obvious remark" },
  { plaudit: "enthusiastic approval" },

  { plenitude: "a full supply" },
  { plethora: "extreme excess" },
  { portent: "a sign of something about to happen" },
  { potentate: "a powerful ruler, especially one who is unconstrained by law" },
  { preclude: "make impossible, especially beforehand" },
  { predilection: "a predisposition in favor of something" },
  { preponderance: "exceeding in heaviness; having greater weight" },
  { presage: "a foreboding about what is about to happen" },
  { probity: "complete and confirmed integrity" },
  { proclivity: "a natural inclination" },
  { profligate: "unrestrained by convention or morality" },
  { promulgate: "state or announce" },
  { proscribe: "command against" },
  { protean: "taking on different forms" },
  { prurient: "characterized by lust" },
  { puerile: "displaying or suggesting a lack of maturity" },
  { pugnacious: "ready and able to resort to force or violence" },
  { pulchritude: "physical beauty, especially of a woman" },
  { punctilious: "marked by precise accordance with details" },
  { quaint: "attractively old-fashioned" },
  { quixotic: "not sensible about practical matters" },
  { quandary: "state of uncertainty in a choice between unfavorable options" },
  { recalcitrant: "stubbornly resistant to authority or control" },
  { redoubtable: "inspiring fear" },
  { relegate: "assign to a lower position" },
  { remiss: "failing in what duty requires" },
  { reprieve: "postpone the punishment of a convicted criminal" },

  { reprobate: "a person without moral scruples" },
  { rescind: "cancel officially" },
  { requisition: "an authoritative demand" },
  { rife: "excessively abundant" },
  { sanctimonious: "excessively or hypocritically pious" },
  { sanguine: "confidently optimistic and cheerful" },
  { scurrilous: "expressing offensive, insulting, or scandalous criticism" },
  { semaphore: "an apparatus for visual signaling" },
  { serendipity: "good luck in making unexpected and fortunate discoveries" },
  { sobriety: "the state of being unaffected or not intoxicated by alcohol" },
  { solicitous: "full of anxiety and concern" },
  { solipsism: "the philosophical theory that the self is all that exists" },
  { spurious: "plausible but false" },
  { staid: "characterized by dignity and propriety" },
  { stolid: "having or revealing little emotion or sensibility" },
  { subjugate: "make subservient; force to submit or subdue" },
  { surfeit: "indulge (one's appetite) to satiety" },
  { surreptitious: "marked by quiet and caution and secrecy" },
  { swarthy: "naturally having skin of a dark color" },
  { tangential: "of superficial relevance if any" },
  { tome: "a large and scholarly book" },
  { toady: "a person who tries to please someone to gain an advantage" },
  { torpid: "in a condition of biological rest or suspended animation" },
  { travesty: "a composition that imitates or misrepresents a style" },
  { trenchant: "having keenness and forcefulness and penetration in thought" },
  { trite: "repeated too often; overfamiliar through overuse" },
  { truculent: "defiantly aggressive" },
  { turpitude: "a corrupt or depraved or degenerate act or practice" },
  { ubiquitous: "being present everywhere at once" },
  { umbrage: "a feeling of anger caused by being offended" },
  { upbraid: "express criticism towards" },
  { utilitarian: "having a useful function" },
  { veracity: "unwillingness to tell lies" },
  { vestige: "an indication that something has been present" },
  { vicissitude: "a variation in circumstances or fortune" },
  { vilify: "spread negative information about" },
  { virtuoso: "someone who is dazzlingly skilled in any field" },
  { vitriolic: "harsh, bitter, or malicious in tone" },
  { vituperate: "spread negative information about" },
  { vociferous: "conspicuously and offensively loud" },
  { wanton: "a lewd or immoral person" },
  { winsome: "charming in a childlike or naive way" },
  { yoke: "join with stable gear, as two draft animals" },
  { zephyr: "a slight wind" },
  { wily: "marked by skill in deception" },
  { tirade: "a speech of violent denunciation" },
];
///
//////

let wrongDisplay = document.getElementById("wrong-display");
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
let correctAll = 0;
// console.log(correctAll);
let answersInputs = [];
// function init() {
// correctCounter = 0;
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
function disableBegining() {
  submit.setAttribute("disabled", true);
  next.setAttribute("disabled", true);
}
disableBegining();
function correctAdder() {
  correctAll += correctCounter;
}

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
///  refresh the variables
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

function getUserAnswers() {
  wrongDisplay.innerHTML = "";
  starter.setAttribute("disabled", true);
  next.removeAttribute("disabled");
  countTime = 1;
  for (let i = 0; i < targets.length; i++) {
    let answer = targets[i];
    if (answer.firstChild) {
      answersInputs.push(answer.firstChild.innerText);
    } else {
      answersInputs.push("empty");
    }
  }

  checkAnswer();
  noMonster();
  correctAdder();
  document.getElementById(
    "totalCorrect"
  ).innerHTML = `Your total correct => ${correctAll}`;
}

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
    }
  }
}
next.addEventListener("click", nextLevel);

function nextLevel() {
  next.setAttribute("disabled", true);
  timing();
  countTime = 30;
  countTime = 31;
  submit.removeAttribute("disabled");
  // console.log(countTime);
  answerCleaner();
  while (wordsDisplay.firstChild) {
    wordsDisplay.firstChild.remove();
  }
  for (let i = 0; i < definitions.length; i++) {
    definitions[i].innerHTML = `<span>Def ${i + 1}: </span>`;
  }
  wait();
}
///createds buttom with drag attributes
function buttonMaker(a, i) {
  let button = document.createElement("button");
  button.innerHTML = a;
  button.style.margin = "4px";
  button.setAttribute("draggable", true);
  button.setAttribute("id", i);

  button.addEventListener("dragstart", function (ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  });
  wordsDisplay.append(button);
}

///////////
function distanceAdjuster() {
  if (chance === 1) {
    document.getElementById("monster").firstChild.style.height = "250px";
    document.getElementById("monster").firstChild.style.height = "300px";
    document.getElementById("kid").firstChild.style.height = "80px";
  } else if (chance === 0) {
    nomnom();
    document
      .getElementById("monster")
      .firstChild.setAttribute("src", "Cookie.gif");
    document.getElementById("intro").innerText = "Learn your words! lol";
    document.getElementById("kid-img").remove();
    let buttons = document.querySelectorAll("button");
    for (let i of buttons) {
      if (i.id === "replay") {
        continue;
      } else {
        i.setAttribute("disabled", true);
      }
    }
  }
}
function noMonster() {
  if (correctAll > 15) {
    document
      .getElementById("monster")
      .firstChild.setAttribute("src", "giphy3.gif");
    document.getElementById("kid-img").remove();
  } else if (correctAll > 7) {
    document.getElementById("monster").firstChild.style.height = "100px";
    document.getElementById("monster").firstChild.style.width = "100px";
    if (correctCounter < 4) {
      document
        .getElementById("monster")
        .firstChild.setAttribute("src", "Cookie.gif");
    }
  }
}

function omnius() {
  let audio = new Audio("omnius.wav");
  audio.play();
}
function nomnom() {
  let audio = new Audio("nomnom.mp3");
  audio.play();
}
////timing the game
let countTime = 30;
starter.addEventListener("click", timing);
function timing() {
  submit.removeAttribute("disabled");
  incorrect.innerHTML = "Time is moving!!";
  definitionInserter();
  buttonInserter();
  starter.setAttribute("disabled", true);
  let time = setInterval(function () {
    timer.innerText = "Time: " + --countTime;

    omnius();
    if (countTime === 0) {
      for (let i of wrongCollector) {
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
      }
    }
  }, 1000);
}

replay.addEventListener("click", () => window.location.reload());
