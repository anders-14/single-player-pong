class Paddle {
  constructor() {
    this.w = wallWidth;
    this.h = 100;
    this.pos = createVector(width - this.w, mouseY - this.h / 2);
  }

  show() {
    push();
    noStroke();
    fill(fgColor);
    rect(this.pos.x, this.pos.y, this.w, this.h);
    pop();
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
}