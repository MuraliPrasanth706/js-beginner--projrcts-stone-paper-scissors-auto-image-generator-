//challenge 1: age i days;
function ageindays() {
  var present = prompt("Eneter the year you born.....");
  var year = prompt("Enetr this year to find age");
  let peryear = 365;
  let indayss = (year - present) * peryear;
  var h1 = document.createElement("h1");
  var textarea = document.createTextNode("Your are  " + indayss + " old");
  h1.setAttribute("id", "ageindays");
  h1.appendChild(textarea);
  document.getElementById("flex-box-result").appendChild(h1);
}
function reset() {
  document.getElementById("ageindays").remove();
}
//challenge 2: cat generator
function generateCat() {
  var img = document.createElement("img");
  var div = document.getElementById("flex-cat");
  img.src = "https://c.tenor.com/GTcT7HODLRgAAAAM/smiling-cat-creepy-cat.gif";
  div.appendChild(img);
}

//challenge-3 RPS
function rpsgame(yourChoice) {
  console.log(yourChoice);
  var humanChoice, botChoice;
  humanChoice = yourChoice.id;
  botChoice = numbertoChoice(randomrps());
  console.log("computer Choice:", botChoice);
  result = decideWinner(humanChoice, botChoice);
  console.log(result);
  message = finalMessage(result);
  console.log(message);
  rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randomrps() {
  return Math.floor(Math.random() * 3);
}
function numbertoChoice(number) {
  return ["rock", "paper", "scissors"][number];
}
function decideWinner(yourChoice, computerChoice) {
  var rpsDatabase = {
    rock: { scissors: 1, rock: 0.5, paper: 0 },
    paper: { rock: 1, paper: 0.5, scissors: 0 },
    scissors: { paper: 1, scissors: 0.5, rock: 0 },
  };
  var yourScore = rpsDatabase[yourChoice][computerChoice];
  var computerScore = rpsDatabase[computerChoice][yourChoice];
  return [yourScore, computerScore];
}
function finalMessage([yourScore, computerScore]) {
  if (yourScore == 0) {
    return { message: "you lost", color: "red" };
  } else if (yourScore == 0.5) {
    return { message: "you tied", color: "yellow" };
  } else {
    return { message: "you won", color: "green" };
  }
}
function rpsFrontEnd(humanimageChoice, botimageChoice, finalMessage) {
  var imageDatabase = {
    rock: document.getElementById("rock").src,
    paper: document.getElementById("paper").src,
    scissors: document.getElementById("scissors").src,
  };
  document.getElementById("rock").remove();
  document.getElementById("paper").remove();
  document.getElementById("scissors").remove();

  var humandiv = document.createElement("div");
  var botdiv = document.createElement("div");
  var messagediv = document.createElement("div");

  humandiv.innerHTML =
    "<img src= ' " +
    imageDatabase[humanimageChoice] +
    "' heigth =150 width=150 style='box-shadow:0px 10px 50px rgba(37,50,233,13);'>";
  messagediv.innerHTML =
    "<h1 style = 'color :" +
    finalMessage["color"] +
    "; font-size: 60px;padding:30px; '>" +
    finalMessage["message"] +
    "</h1>";
  botdiv.innerHTML =
    "<img src= ' " +
    imageDatabase[botimageChoice] +
    "' heigth =150 width=150 style='box-shadow:0px 10px 50px rgba(243,38,24,1);'>";

  document.getElementById("flex-box-rps-div").appendChild(humandiv);
  document.getElementById("flex-box-rps-div").appendChild(messagediv);
  document.getElementById("flex-box-rps-div").appendChild(botdiv);
}

//challenge-4 chage color of th button
var all_buttons = document.getElementsByTagName("button");
var copyAllButtons = {};
for (let i = 0; i < all_buttons.length; i++) {
  copyAllButtons.push(all_buttons[i].classList[1]);
}

function buttonColorChange(buttonThis) {
  if (buttonThis.value == "red") {
    buttonsRed();
  } else if (buttonThis.value == "green") {
    buttonsGreen();
  } else if (buttonThis.value == "reset") {
    buttonColorReset();
  } else if (buttonThis.value == "random") {
    randomColors();
  }
}

function buttonsRed() {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add("btn-danger");
  }
}
function buttonsGreen() {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add("btn-success");
  }
}

function buttonColorReset() {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(copyAllButtons[i]);
  }
}
function randomColors() {
  let choices = ["btn-primary", "btn-danger", "btn-succes", "btn-warning"];
  for (let i = 0; i < all_buttons.length; i++) {
    let randomNumber = Math.floor(Math.random() * 4);
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(choices[randomNumber]);
  }
}
