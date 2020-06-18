let cnv;
let ball;
let paddle;
let gameOver = false;
let started = false;

const paddleSpace = 40;
const paddleHeight = 200;
const wallWidth = paddleSpace / 2;
let fgColor = [255];
let points = 0;
let highscore = localStorage.getItem('highscore') ? localStorage.getItem('highscore') : 0;
let readyToSpeedUp = false;

const resetButton = document.querySelector('.reset-btn');
resetButton.style.display = 'none';

function setup() {
  cnv = createCanvas(800, 600);
  ball = new Ball();
  paddle = new Paddle();
}

function draw() {
  if (!gameOver) {
    background(0);
    noStroke();
    fill(fgColor);
  
    // draw walls 
    rect(0, 0, width - paddleSpace, wallWidth);
    rect(0, 0, wallWidth, height);
    rect(0, height - wallWidth, width - paddleSpace, wallWidth);
  
    // display score
    textSize(64);
    textAlign(CENTER);
    text(points, width/2, 100);
    push();
    textSize(32);
    text(highscore, width/2, 140);
    pop();
    
    ball.show();
    ball.update();
  
    paddle.show();
    paddle.update();
    
    if (ball.hitsPaddle(paddle)) {
      ball.turnX();
      paddle.shrink();
      points++;
      if (points % 5 === 0) {
        readyToSpeedUp = true;
      }
    }
    
    if (readyToSpeedUp) {
      ball.speedUp();
      readyToSpeedUp = false;
    }

    if (!started) {
      textSize(32);
      text('Press space or click the mouse to start', width / 2, height / 2 - 50);
    }
  } else {
    resetButton.style.display = 'initial';
    text('GAME OVER', width / 2, height / 2 - 50);
  }
}

function keyPressed() {
  if (key == ' ') {
    startGame();
  }
}

function mousePressed() {
  startGame();
}

const changeColor = (arr) => {
  fgColor = arr;
}

const startGame = () => {
  ball.start();
  started = true;
}

const resetGame = () => {
  ball.reset();
  paddle.reset();
  if (points > highscore) {
    highscore = points;
    localStorage.setItem('highscore', highscore);
  }
  points = 0;
  gameOver = false;
  started = false;
  resetButton.style.display = 'none';
}

resetButton.addEventListener('click', resetGame);