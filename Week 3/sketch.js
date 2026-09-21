let blockA; 
let blockB;
let blockC;
let blockD;
let blockE;
let blockF;
let blockG;
let blockH;
let blockI;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(150);

fill("black")
rect(75, 75, 240, 240, 15)
fill("white")

if (blockA == 0) {
  fill("white")
  rect(80, 80, 70, 70, 15)
}
if (blockB == 0) {
  fill("white")     
  rect(160, 80, 70, 70, 15)
}
if (blockC == 0) {
  fill("white")
  rect(240, 80, 70, 70, 15)
}
if (blockD == 0) {
  fill("white")
  rect(80, 160, 70, 70, 15)
}
if (blockE == 0) {
  fill("white")
  rect(160, 160, 70, 70, 15)
}
if (blockF == 0) {
  fill("white")
  rect(240, 160, 70, 70, 15)
}
if (blockG == 0) {
  fill("white")
  rect(80, 240, 70, 70, 15)
}
if (blockH == 0) {
  fill("white")
  rect(160, 240, 70, 70, 15)
}
if (blockI == 0) {
  fill("white")
  rect(240, 240, 70, 70, 15)
}

}

function keyPressed() {
  if (keyCode == ENTER) {
    blockA = 0
    blockB = 0
    blockC = 0
    blockD = 0
    blockE = 0
    blockF = 0
    blockG = 0
    blockH = 0
    blockI = 0
}
}