class Ball {
  constructor() {
    this.r = 16;
    this.d = this.r * 2;
    this.pos = createVector(width - this.r - paddleSpace, height / 2);
    this.vel = createVector(-3, -3);
  }

  show() {
    push();
    noStroke();
    fill(fgColor);
    circle(this.pos.x, this.pos.y, this.d);
    pop();
  }

  update() {
    const edge = this.edges();
    if (edge === 1) {
      this.vel.x *= -1;
    } else if (edge === 2) {
      this.vel.y *= -1;
    } else if (edge === 0) {
      this.vel.x = 0;
      this.vel.y = 0;
    }
    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;
  }

  edges() {
    if (this.pos.x - this.r <= wallWidth) {
      return 1;
    } else if (this.pos.y - this.r <= wallWidth || this.pos.y + this.r >= height - wallWidth && this.pos.x <= width - paddleSpace) {
      return 2;
    } else if (this.pos.x + this.r >= width) {
      return 0;
    }
  }
}