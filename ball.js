class Ball {
  constructor() {
    this.r = 16;
    this.d = this.r * 2;
    this.pos = createVector(width - this.r - paddleSpace, height / 2);
    this.vel = createVector(0, 0);
  }

  show() {
    circle(this.pos.x, this.pos.y, this.d);
  }

  update() {
    if (this.leftEdge()) this.turnX();
    else if (this.topEdge() || this.bottomEdge()) this.turnY();
    else if (this.rightEdge()) {
      gameOver = true;
    }
    this.applyForce();
  }

  start() {
    if (!started) {
      this.vel.x = -5;
      this.vel.y = Math.random() < 0.5 ? -5 : 5;
    }
  }

  applyForce() {
    this.pos.add(this.vel);
  }

  leftEdge = () => this.pos.x - this.r <= wallWidth;
  rightEdge = () => this.pos.x + this.r >= width; 
  topEdge = () => this.pos.y - this.r <= wallWidth;
  bottomEdge = () => this.pos.y + this.r >= height - wallWidth;

  turnX = () => this.vel.x *= -1;
  turnY = () => this.vel.y *= -1;
  
  speedUp() {
    this.vel.x += this.vel.x < 0 ? -1 : this.vel.x > 0 ? 1 : 0;
    this.vel.y += this.vel.y < 0 ? -1 : this.vel.y > 0 ? 1 : 0;
  }

  hitsPaddle(paddle) {
    if (this.pos.y < paddle.pos.y || this.pos.y > paddle.pos.y + paddle.h) return false;
    if (this.pos.x + this.r >= paddle.pos.x) return true;
  }

  reset() {
    this.pos = createVector(width - this.r - paddleSpace, height / 2);
    this.vel = createVector(0, 0);
    this.started = false;
  }

}