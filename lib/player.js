import { getDistance } from "./game";

class Player {
  constructor(ctx, x, y, radius, fill, border, velocity, num) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.fill = fill;
    this.border = border;
    this.velocity = velocity;
    this.num = num;
    this.draw();
  }

  draw() {
    let ctx = this.ctx;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
    ctx.fillStyle = this.fill;
    ctx.fill();
    ctx.lineWidth = 15;
    ctx.strokeStyle = this.border;
    ctx.stroke();
    this.number();
    ctx.closePath();
  }

  number() {
    this.ctx.font = 'bold 30px arial';
    this.ctx.fillStyle = 'navy';
    this.ctx.textAlign = 'center';
    this.ctx.fillText(this.num, this.x, this.y + 10);

  }

  shoot(ball) {
    if (getDistance( this.x, this.y, this.radius, ball.x, ball.y, ball.radius)) {
      ball.velocity.x = - ball.velocity.x;
      // console.log(`x: ${this.x}--- y: ${this.y}`);
    }
  }

  computerPlayer(ball) {
    this.x += ball.velocity.x;
    this.y += ball.velocity.y;
  }

  onField(w, h) {
    if (this.x + this.velocity.x < this.radius || this.x + this.velocity.x > w - this.radius) {
      this.velocity.x = -this.velocity.x;
    }
    if (this.y + this.velocity.y > h - this.radius || this.y + this.velocity.y < this.radius) {
      this.velocity.y = -this.velocity.y;
    }
  }

  // moveComputer(ball, x, y) {
  //   if (ball.x < x && ball.y < y) {
  //     this.x -= this.velocity.x;
  //     this.y -= this.velocity.y;
  //   } else if (ball.x < x && ball.y > y) {
  //     this.x -= this.velocity.x;
  //     this.y += this.velocity.y;
  //   } else if (ball.x > x && ball.y < y) {
  //     this.x += this.velocity.x;
  //     this.y -= this.velocity.y;
  //   } else if (ball.x > x && ball.y > y) {
  //     this.x += this.velocity.x;
  //     this.y += this.velocity.y;
  //   }
  // }
}

export default Player;
