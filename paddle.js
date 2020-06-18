class Paddle {
  constructor() {
    this.w = wallWidth;
    this.h = 200;
    this.minH = 50;
    this.pos = createVector(width - this.w, mouseY - this.h / 2);
  }

  show() {
    rect(this.pos.x, this.pos.y, this.w, this.h);
  }

  update() {
    let y = mouseY - this.h / 2;
    if (y < 0) {
      y = 0;
    } else if (y > height - this.h) {
      y = height - this.h;     
    }
      this.pos = createVector(width - this.w, y);
  }

  shrink = () => this.h > this.minH ? this.h -= 10 : this.h = this.minH;

  reset() {
    this.h = 100;
  }
}