let colors = [];
let posS = []
let activeS = 0

function setup() {
  createCanvas(800, 600);
  for (let i = 0; i < 20; i++) {
    colors.push([random(255), random(255), random(255)])
    posS.push([random(800), random(600)])
  }
}

function draw() {
  background("#8c5eff");
  for (let i = 0; i < 20; i++) {
  fill(colors[i])
  }
}
