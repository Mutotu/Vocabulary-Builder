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

let body = document.body;
body.addEventListener("click", (evt) => console.log(evt));
let form = document.getElementsByTagName("form");
let submit = document.getElementById("submit");
/////comparing

let answers = [];

function stringcleaner(str) {
  return str.toLowerCase();
}
