let cnv;
let ball;
let paddle;

const paddleSpace = 40;
const wallWidth = paddleSpace / 2;
const fgColor = 255;

function setup() {
  cnv = createCanvas(800, 600);
  ball = new Ball();
  paddle = new Paddle();
}

function draw() {
  background(0);

  // draw walls 
  push();
  noStroke();
  fill(fgColor);
  rect(0, 0, width - paddleSpace, wallWidth);
  rect(0, 0, wallWidth, height);
  rect(0, height - wallWidth, width - paddleSpace, wallWidth);
  pop();

  ball.show();
  ball.update();

  paddle.show();
  paddle.update();
}