import { getDistance } from "./game";

class Player {
  constructor(ctx, x, y, radius, velocity, team) {
    this.team = team;
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.velocity = velocity;
    this.colors();
    this.draw();
  }

  colors() {
    if (this.team === "A") {
      this.fill = "#FF0000";
      this.border = "#0000FF";
    } else {
      this.fill = "#FFFFFF";
      this.border = "#FF0000";
    }
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
    this.ctx.fillText(this.team, this.x, this.y + 10);

  }

  shoot(ball) {
    if (getDistance(this, ball)) {
        ball.velocity.x *= -1;

    }
  }

  computerPlayer(ball) {
    this.x += ball.velocity.x;
    this.y += ball.velocity.y;
  }

  onField(x, y) {
    if (this.x < x - 400 || this.x > x + 400) {
      this.velocity.x *= -1;
    }
    if (this.y < y - 200 || this.y > y + 200) {
      this.velocity.y *= -1;
    }
  }

  // moveComputer(ball, x, y) {
  //   if (this.velocity.x < 0) {
  //     this.velocity.x *= -1;
  //   }
  //   if (this.velocity.y < 0) {
  //     this.velocity.y *= -1;
  //   }
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
