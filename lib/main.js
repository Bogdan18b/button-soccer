let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

let h = canvas.height;
let w = canvas.width;
let x = w / 2;
let y = h / 2;

let rand = Math.floor((Math.random() - 0.5) * 10);
let ballX = x + rand;
let ballY = y + rand;

let playerX = 50;
let playerY = 50;

let playerTwoX = 250;
let playerTwoY = 50;

let dx = 2;
let dy = 2;

let ballRadius = 3;
let playerRadius = 9;

let upPressed = false;
let downPressed = false;
let leftPressed = false;
let rightPressed = false;

const soccerField = () => {

  ctx.beginPath(); // center line
    ctx.moveTo(x, 0);
    ctx.lineTo(x, 600);
    ctx.lineWidth = 2;
    ctx.strokeStyle = "white";
    ctx.stroke();

  ctx.beginPath(); // left side line
    ctx.moveTo(20, 0);
    ctx.lineTo(20, 600);
    ctx.lineWidth = 2;
    ctx.strokeStyle = "white";
    ctx.stroke();

  ctx.beginPath(); // top line
    ctx.moveTo(20, 1);
    ctx.lineTo(w - 20, 1);
    ctx.lineWidth = 2;
    ctx.strokeStyle = "white";
    ctx.stroke();

  ctx.beginPath(); // bottom line
    ctx.moveTo(20, h - 1);
    ctx.lineTo(w - 20, h - 1);
    ctx.lineWidth = 2;
    ctx.strokeStyle = "white";
    ctx.stroke();

  ctx.beginPath(); // right side line
    ctx.moveTo(w - 20, 0);
    ctx.lineTo(w - 20, 600);
    ctx.lineWidth = 2;
    ctx.strokeStyle = "white";
    ctx.stroke();

  ctx.beginPath(); // 16 yard left side line
    ctx.moveTo(20, y - 51);
    ctx.lineTo(71, y - 51);
    ctx.lineTo(71, y + 51);
    ctx.lineTo(20, y + 51);
    ctx.strokeStyle = "white";
    ctx.stroke();

  ctx.beginPath();  // 6 yard left side line
    ctx.moveTo(20, y - 27);
    ctx.lineTo(37, y - 27);
    ctx.lineTo(37, y + 27);
    ctx.lineTo(20, y + 27);
    ctx.strokeStyle = "white";
    ctx.stroke();

  ctx.beginPath();  // 16 yard right side line
    ctx.moveTo(w - 20, y - 51);
    ctx.lineTo(w - 71, y - 51);
    ctx.lineTo(w - 71, y + 51);
    ctx.lineTo(w - 20, y + 51);
    ctx.strokeStyle = "white";
    ctx.stroke();

  ctx.beginPath(); // 6 yard right side line
    ctx.moveTo(w - 20, y - 27);
    ctx.lineTo(w - 37, y - 27);
    ctx.lineTo(w - 37, y + 27);
    ctx.lineTo(w - 20, y + 27);
    ctx.strokeStyle = "white";
    ctx.stroke();

    ctx.beginPath(); // center field circle
    ctx.arc(x, y, 20, 0, Math.PI * 2, false);
    ctx.strokeStyle = "white";
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath(); // left side semicircle
    ctx.arc(x - 80, y, 20, Math.PI * 1.5, Math.PI/2, false);
    ctx.strokeStyle = "white";
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath(); // right side semicircle
    ctx.arc(w - 70, y, 20, Math.PI / 2, Math.PI * 1.5, false);
    ctx.strokeStyle = "white";
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath(); // small center field circle
    ctx.arc(x, y, 2, 0, Math.PI * 2, false);
    ctx.strokeStyle = "white";
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath(); // small left side circle
    ctx.arc(50, y, 2, 0, Math.PI * 2, false);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath(); // small right side circle
    ctx.arc(w - 50, y, 2, 0, Math.PI * 2, false);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(1, y - 20, 19, 40); //left goal
    ctx.strokeStyle = "white";
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(w - 20, y - 20, 19, 40); //right goal
    ctx.strokeStyle = "white";
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(0, 0, 19, y - 21); // left top side
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(0, y + 21, 19, y - 21); // left bottom side
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(w - 19, 0, 19, y - 21); // right top side
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(w - 19, y + 21, 19, y - 21); // right bottom side
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();

};

  const drawBall = () => {
      ctx.beginPath();
      ctx.arc(ballX, ballY, ballRadius, 0, Math.PI*2);
      ctx.fillStyle = "black";
      ctx.fill();
      ctx.closePath();
  };

  const drawPlayer = (x, y, fill, border) => {
      ctx.beginPath();
      ctx.arc(x, y, playerRadius, 0, Math.PI*2);
      ctx.fillStyle = fill;
      ctx.fill();
      ctx.strokeStyle = border;
      ctx.stroke();
      ctx.closePath();
  };

  document.addEventListener("keydown", keyDownHandler, false);
  document.addEventListener("keyup", keyUpHandler, false);

  function keyDownHandler(e) {
    if(e.keyCode == 87) {
        upPressed = true;
    }
    else if(e.keyCode == 83) {
        downPressed = true;
    }
    else if(e.keyCode == 65) {
        leftPressed = true;
    }
    else if(e.keyCode == 68) {
        rightPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.keyCode == 87) {
        upPressed = false;
    }
    else if(e.keyCode == 83) {
        downPressed = false;
    }
    else if(e.keyCode == 65) {
        leftPressed = false;
    }
    else if(e.keyCode == 68) {
        rightPressed = false;
    }
}

  function draw() {
      ctx.clearRect(0, 0, w, h);
      soccerField();
      drawBall();
      drawPlayer(playerX, playerY, "red", "blue");
      drawPlayer(playerTwoX, playerTwoY, "white", "red");

     if (ballX + dx > w - 20 - ballRadius || ballX + dx < 20 + ballRadius) {
        dx = -dx;
      }

      if (ballY + dy > h - ballRadius || ballY + dy < ballRadius) {
        dy = -dy;
        }

      if(upPressed && playerY > playerRadius + 5) {
          playerY -= 3;
      }
      else if(downPressed && playerY < h - playerRadius - 5) {
          playerY += 3;
      }
      else if(leftPressed && playerX > playerRadius + 5) {
          playerX -= 3;
      }
      else if(rightPressed && playerX < w - playerRadius - 5) {
          playerX += 3;
      }

      if (playerX < ballX + 5 && playerX > ballX - 5 && playerY < ballY + 5 && playerY > ballY - 5) {
        dx = -dx;
        console.log(`X : player-${playerX} ball-${ballX}`);
        console.log(`Y : player-${playerY} ball-${ballY}`);
      }

        ballX += dx;
        ballY += dy;

        requestAnimationFrame(draw);

  }

draw();
