class Ball {
  constructor(ctx, x, y, radius, velocity) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.velocity = velocity;
    this.draw();
  }

  draw() {
    let ctx = this.ctx;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();
  }

  onField(w, h) {
    if (((this.y - this.radius < h/2 - 100 || this.y + this.radius > h/2 + 100) && this.x + this.radius > w - 50) ||
      ((this.y - this.radius < h/2 - 100 || this.y + this.radius > h/2 + 100) && this.x - this.radius < 50)) {
       this.velocity.x *= -1;
     }
     if (this.y + this.radius > h || this.y - this.radius < 0) {
       this.velocity.y *= -1;
      }
  }

  score(fieldWidth) {
    if (this.x + this.radius > fieldWidth - 50 && this.y + this.radius > 200 && this.y - this.radius < 400) {
      return 1;
    } else if (this.x - this.radius < 50 && this.y + this.radius > 200 && this.y - this.radius < 400) {
      return 2;
    }
  }


}

export default Ball;
