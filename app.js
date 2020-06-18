let cnv;
let ball;
let paddle;

const paddleSpace = 40;
const wallWidth = paddleSpace / 2;
let fgColor = [255];
let points = 0;
let highscore = 0;

function setup() {
  cnv = createCanvas(800, 600);
  ball = new Ball();
  paddle = new Paddle();
}

function draw() {
  background(0);
  noStroke();
  fill(fgColor);

  // draw walls 
  rect(0, 0, width - paddleSpace, wallWidth);
  rect(0, 0, wallWidth, height);
  rect(0, height - wallWidth, width - paddleSpace, wallWidth);

  // display score
  text(points, 100, 100)

  ball.show();
  ball.update();

  paddle.show();
  paddle.update();

  if (ball.hitsPaddle(paddle)) {
    ball.turnX();
    paddle.shrink();
    points++;
  }
}

const changeColor = (arr) => {
  fgColor = arr;
}

const resetGame = () => {
  ball.reset();
  paddle.reset();
  highscore = points > highscore ? points : highscore;
  points = 0;
}