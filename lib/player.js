class Player {
  constructor(ctx, x, y, radius, fill, border, velocity) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.fill = fill;
    this.border = border;
    this.velocity = velocity;
    this.draw();
  }

  draw() {
    let ctx = this.ctx;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
    ctx.fillStyle = this.fill;
    ctx.fill();
    ctx.lineWidth = 3;
    ctx.strokeStyle = this.border;
    ctx.stroke();
    ctx.closePath();
  }

  moveGoalkeeper(y) {
    if (this.y > y + 20 || this.y < y - 20) {
      this.velocity.x = -this.velocity.x;
    }
  }
}

export default Player;
