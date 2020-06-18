class Ball {
  constructor() {
    this.r = 16;
    this.d = this.r * 2;
    this.pos = createVector(width - this.r - paddleSpace, height / 2);
    this.vel = createVector(random(3, 5) * -1, random(3, 5));
  }

  show() {
    circle(this.pos.x, this.pos.y, this.d);
  }

  update() {
    if (this.leftEdge()) this.turnX();
    else if (this.topEdge() || this.bottomEdge()) this.turnY();
    else if (this.rightEdge()) {
      this.removeVel();
      changeColor([255, 0, 0]);
    }
    this.applyForce();
  }

  applyForce() {
    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;
  }

  leftEdge = () => this.pos.x - this.r <= wallWidth;
  rightEdge = () => this.pos.x + this.r >= width; 
  topEdge = () => this.pos.y - this.r <= wallWidth;
  bottomEdge = () => this.pos.y + this.r >= height - wallWidth;

  turnX = () => this.vel.x *= -1;
  turnY = () => this.vel.y *= -1;
  removeVel = () => {
    this.vel.x = this.vel.y = 0;
  }

  hitsPaddle(paddle) {
    if (this.pos.y < paddle.pos.y || this.pos.y > paddle.pos.y + paddle.h) return false;
    if (this.pos.x + this.r >= paddle.pos.x) return true;
  }

  reset() {
    this.pos.x = width - this.r - paddleSpace;
    this.pos.y = height / 2;
    this.vel.x = random(3, 5) * -1;
    this.vel.y = random(3, 5);
  }

}