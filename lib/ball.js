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
    if (((this.y + this.velocity.y < 50 + this.radius || this.y + this.velocity.y > 90 + this.radius) && this.x + this.velocity.x > w - 20 - this.radius) ||
      ((this.y + this.velocity.y < 50 + this.radius || this.y + this.velocity.y > 90 + this.radius) && this.x + this.velocity.x < 20 + this.radius)) {
       this.velocity.x = -this.velocity.x;
     }
     if (this.y + this.velocity.y > h - this.radius || this.y + this.velocity.y < this.radius) {
       this.velocity.y = -this.velocity.y;
       }
  }


}

export default Ball;
