
let valorant;
let starss;
let valorantfont;
let minecraft;
let correct;
let wrong;
let StartButton;

let showvragenScherm = 0;
let currentQuestion = 0;
let score = 0;
let quizFinished = false;
let answered = false;
let answerButtons = [];
let feedback = "";
let answerImage = null;

let posAnswer = [
  { x: 135, y: 355 }, { x: 535, y: 355 },
  { x: 135, y: 475 }, { x: 535, y: 475 }
];

let questions = [
  {
    question: "Wie hier is een duelist-type agent?",
    answers: ["Sage", "Jett", "Omen", "Viper"],
    correctAnswer: 1
  },
  {
    question: "Welke agent is een controller?",
    answers: ["Sage", "Jett", "Chamber", "Viper"],
    correctAnswer: 3
  },
  {
    question: "Wat doen attackers met de spike?",
    answers: ["Planten", "Spiken", "Defusen", "Gooien"],
    correctAnswer: 0
  },
  {
    question: "Wat is Sage haar ultimate?",
    answers: ["Healing Orb", "Barrier Orb", "Resurrection", "Slow Orb"],
    correctAnswer: 2
  },
  {
    question: "Wat doet Iso zijn ultimate?",
    answers: ["Hij gooit een molotov", "Hij gooit een rookbom", "Hij dwingt je in een 1v1", "Hij gooit een spike"],
    correctAnswer: 2
  },
  {
    question: "Wat is de hoogste rank in Valorant?",
    answers: ["Iron", "Diamond", "Immortal", "Radiant"],
    correctAnswer: 3
  },
  {
    question: "Hoeveel agents zijn er in Valorant?",
    answers: ["16", "20", "21", "29"],
    correctAnswer: 3
  },
  {
    question: "Welke agent heeft een ability genaamd 'Tailwind'?",
    answers: ["Jett", "Raze", "Sage", "Phoenix"],
    correctAnswer: 0
  },
  {
    question: "Welke van deze agents heeft een flash ability?",
    answers: ["Reyna", "Kayo", "Viper", "Omen"],
    correctAnswer: 1
  },
  {
    question: "Welke agent heeft een onbreekbare wall ability?",
    answers: ["Sage", "Vyse", "Clove", "Neon"],
    correctAnswer: 1
  }
];

function preload() {
  valorant = loadImage("valorant.png");
  starss = loadImage("starss.gif");
  valorantfont = loadFont("Valorant Font.ttf");
  minecraft = loadFont("mac's Extended Minecraft.otf");
  correct = loadImage("correct.gif");
  wrong = loadImage("wrong.png");
}

function setup() {
  createCanvas(800, 600);

  StartButton = createButton("Start!");
  StartButton.position(280, 500);
  StartButton.size(260, 90);
  StartButton.style("background", "#ff4654");
  StartButton.style("color", "white");
  StartButton.style("font-size", "30px");
  StartButton.style("border-radius", "30px");
  StartButton.style("font-family", "valorant");
  StartButton.mousePressed(showvragen);

  beginscherm();
}

function draw() {
  if (showvragenScherm == 0) {
    beginscherm();
  } else {
    vragenscherm();
  }
}

function showvragen() {
  showvragenScherm = 1;
  currentQuestion = 0;
  score = 0;
  quizFinished = false;
  answered = false;
  feedback = "";
  answerImage = null;

  for (let button of answerButtons) {
    button.remove();
  }

  answerButtons = [];
  StartButton.hide();
  makeanswerButton();
}

function keyPressed() {
  if (quizFinished && keyCode == 32) {
    showvragen();
  }
}

function makeanswerButton() {
  let answers = questions[currentQuestion].answers;

  for (let i = 0; i < answers.length; i++) {
    let answerButton = createButton(answers[i]);

    answerButton.size(150, 68);
    answerButton.position(posAnswer[i].x, posAnswer[i].y);
    answerButton.style("background", "transparent");
    answerButton.style("color", "black");
    answerButton.style("border", "none");
    answerButton.style("font-size", "25px");
    answerButton.style("cursor", "pointer");
    answerButton.mousePressed(function () {
      checkAnswer(i);
    });

    answerButtons.push(answerButton);
  }
}

function checkAnswer(chosenAnswer) {
  if (answered || quizFinished) return;

  answered = true;

  if (chosenAnswer == questions[currentQuestion].correctAnswer) {
    score++;
    feedback = "Correct!";
    answerImage = correct;
  } else {
    feedback = "Wrong!";
    answerImage = wrong;
  }

  for (let button of answerButtons) {
    button.remove();
  }

  answerButtons = [];
  currentQuestion++;

  if (currentQuestion >= questions.length) {
    quizFinished = true;
  } else {
    answered = false;
    makeanswerButton();
  }
}

function beginscherm() {
  background(valorant);
  fill("white");
  textFont(valorantfont);
  textSize(50);
  textAlign(CENTER, CENTER);
  text("Valorant Chud Quiz", width / 2, 100);
}

function vragenscherm() {
  background(starss);

  if (quizFinished) {
    fill("white");
    textFont(valorantfont);
    textAlign(CENTER, CENTER);
    textSize(40);
    text("Quiz AF!", width / 2, 200);
    textSize(25);
    text("Score: " + score + " / " + questions.length, width / 2, 270);
    textSize(20);
    text("Jij bent een echte chud!", width / 2, 320);
    textSize(18);
    text("Druk op SPATIE om opnieuw te starten", width / 2, 370);
    return;

  }


  strokeWeight(3);
  fill("#fbfcfd");
  rect(25, 450, 350, 100, 150);
  rect(420, 450, 350, 100, 150);
  rect(25, 335, 350, 100, 150);
  rect(420, 335, 350, 100, 150);
  rect(5, 2, 790, 65, 150);

  fill("black");
  textFont(minecraft);
  textSize(25);
  textAlign(CENTER, CENTER);
  text(questions[currentQuestion].question, width / 2, 35);

  // foto ding met super coole kat
  if (answerImage != null) {
    imageMode(CENTER);
    image(answerImage, width / 2, 220, 150, 100);
    imageMode(CORNER);

    fill("white");
    textSize(20);
    text(feedback, width / 2, 305);
  }

  fill("white");
  textSize(18);
  text("Score: " + score, width / 2, 90);

  // hover
  if (mouseX >= 25 && mouseX <= 375 && mouseY >= 450 && mouseY <= 550) {
    fill("#a4a3a3");
    rect(25, 450, 350, 100, 150);
  }

  if (mouseX >= 420 && mouseX <= 770 && mouseY >= 450 && mouseY <= 550) {
    fill("#a4a3a3");
    rect(420, 450, 350, 100, 150);
  }

  if (mouseX >= 25 && mouseX <= 375 && mouseY >= 335 && mouseY <= 435) {
    fill("#a4a3a3");
    rect(25, 335, 350, 100, 150);
  }

  if (mouseX >= 420 && mouseX <= 770 && mouseY >= 335 && mouseY <= 435) {
    fill("#a4a3a3");
    rect(420, 335, 350, 100, 150);
  }
}
