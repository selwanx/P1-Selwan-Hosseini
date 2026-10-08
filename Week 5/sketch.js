let valorant;
let starss;
let valorantfont;
let minecraft;
let StartButton;
let showvragenScherm = 0;
let questions = [
  {
    question: "Wie hier is een duelist-type agent?",
    answers: ["Sage", "Jett", "Omen", "Viper"],
    correctAnswer: 1
  },
  {
    question: "Welke agent is een controller?",
    answers: ["Sage", "Jett", "Omen", "Viper"],
    correctAnswer: 2
  },
  {
    question: "Wat doen attackers met de spike?",
    answers: ["Ze planten hem", "Ze gooien hem weg", "Ze gebruiken hem als wapen", "Ze laten hem vallen"],
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
    question: "Welke agent kan een wall plaatsen die niet door vijanden wordt doorbroken?",
    answers: ["Sage", "Vyse", "Clove", "Neon"],
    correctAnswer: 1
  }
]

function setup() {
  createCanvas(800, 600);
  valorantfont = loadFont("Valorant Font.ttf")
  minecraft = loadFont("mac's Extended Minecraft.otf")
  StartButton = createButton("Start!")
  StartButton.position(280, 500)
  StartButton.size(260, 90)
  StartButton.style('background', '#ff4654')
  StartButton.mousePressed(showvragen)
  StartButton.style('font-size', '30px')
  StartButton.style('border-radius', '30px')
  StartButton.style('font-family', 'valorant')
  beginscherm()
}

function preload() {
  valorant = loadImage("valorant.png")
  starss = loadImage("starss.gif")
}

function showvragen() {
  showvragenScherm += 1
}

function draw() {
  fill("#ad87ff");
  if (showvragenScherm >= 1) {
    vragenscherm()
    textFont(valorantfont)
  }
}

function beginscherm() {
  background(valorant);
  textFont(valorantfont)
  fill("white")
  text("Valorant Chud Quiz", 125, 100)
  textSize(50)


}

function vragenscherm() {
  background(starss)
  strokeWeight(3)
  fill("#fbfcfd")
  rect(25, 450, 350, 100, 150)
  rect(420, 450, 350, 100, 150)
  rect(25, 335, 350, 100, 150)
  rect(420, 335, 350, 100, 150)
  rect(5, 2, 790, 65, 150)
  StartButton.hide()

  if (mouseX >= 25 && mouseX <= 375 && mouseY >= 450 && mouseY <= 550) {
    fill("#a4a3a3")
    rect(25, 450, 350, 100, 150)
  }
  if (mouseX >= 420 && mouseX <= 770 && mouseY >= 450 && mouseY <= 550) {
    fill("#a4a3a3")
    rect(420, 450, 350, 100, 150)
  }
  if (mouseX >= 25 && mouseX <= 375 && mouseY >= 335 && mouseY <= 435) {
    fill("#a4a3a3")
    rect(25, 335, 350, 100, 150)
  }
  if (mouseX >= 420 && mouseX <= 770 && mouseY >= 335 && mouseY <= 435) {
    fill("#a4a3a3")
    rect(420, 335, 350, 100, 150)
  }
}