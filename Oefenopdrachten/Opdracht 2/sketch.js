let rng = 0

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
let score = 100;
score = 1;
  let x = 100
  text(x, 20, 20)
  let greeting = "Hello World!"
  text(greeting, 20, 60)
  let a = 20
  let b = 10
  let optellen = a + b
  let aftrekken = a - b
  let vermenigvuldigen = a * b
  let delen = a / b
  text("optellen: " +  optellen, 20, 80)
  text("aftrekken: " +  aftrekken, 20, 100)
  text("vermenigvuldigen: " +  vermenigvuldigen, 20, 120)
  text("delen: " +  delen, 20, 140)

  text("rng: " + rng, 20, 160 )
}

function mousePressed() {
   rng = random(0, 1000)
    
  }
