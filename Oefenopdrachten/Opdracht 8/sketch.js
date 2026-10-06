let romancefont;

function setup() {
  createCanvas(800, 400);
  // laadt de font in de setup zodat deze beschikbaar is in de draw functie
  romancefont = loadFont("Retro Romance.otf")
}

function draw() {
  background("#5e9eff");
  fill("green")
  rect(0, 300, 800, 100)
  tekenHuis(100, 200)
  tekenHuis(300, 200)
  tekenHuis(500, 200)
  circ(50, 50, 50)
  rectangle(700, 200, 50, 50)
  luh(20, 10, 500, 10)
  text("Optellen: " + optellen(5, 10), 580, 20)
  text("Aftrekken: " + aftrekken(10, 5), 580, 40)
  text("Vermenigvuldigen: " + vermenigvuldigen(5, 10), 580, 60)
  text("Delen: " + delen(10, 5), 580, 80)
}

// tekent een huis op de gegeven x en y coordinaten
function tekenHuis(x, y) {
  fill("black")
  rect(x, y, 100, 100)
  fill("grey")
  triangle(x, y, x + 50, y - 50, x + 100, y)
  fill("grey")
  rect(x + 10, y + 50, 35, 50)
  fill("#b0f2ff")
  rect(x + 65, y + 30, 20, 20)
  ceyra(50, 0)
}

// tekent een cirkel op de gegeven x en y coordinaten met de gegeven grootte
function circ(x, y, s) {
  fill("#fffd87")
  circle(x, y, s)
}
// tekent een rechthoek op de gegeven x en y coordinaten met de gegeven breedte en hoogte
function rectangle(x, y, w, h) {
  fill("black")
  rect(x, y, w, h)
}
// tekent een lijn van de gegeven x1 y1 naar x2 y2
function luh(x1, y1, x2, y2) {
  fill("black")
  line(x1, y1, x2, y2)
}
  
// tekent tekst op de gegeven x en y coordinaten met de gegeven grootte en kleur
function ceyra(size1, color1) {
  textSize(size1)
  fill(color1)
  textFont(romancefont)
  text("Ceyraaaa!", 150, 80)
}

// rekensommen
function optellen(a, b) {
  textSize(20)
  return a + b;
}

function aftrekken(a, b) {
  textSize(20)
  return a - b;
}

function vermenigvuldigen(a, b) {
  textSize(20)
  return a * b;
}

function delen(a, b) {
  textSize(20)
  return a / b;
}
