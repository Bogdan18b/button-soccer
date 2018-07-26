import SoccerField from "./soccer_field";

let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

let canvasScore = document.getElementById("scoreCanvas");
let ctxBoard = canvasScore.getContext("2d");

let h = canvas.height;
let w = canvas.width;
let x = w / 2;
let y = h / 2;

let rand = Math.floor((Math.random() - 0.5) * 10);
let ballX = x + rand;
let ballY = y + rand;

let playerX = y + 40;
let playerY = y;

let playerTwoX = y + 120;
let playerTwoY = y;

let dx = 2;
let dy = 2.5;

let ballRadius = 3;
let playerRadius = 9;

let upPressed = false;
let downPressed = false;
let leftPressed = false;
let rightPressed = false;
let upPressed2 = false;
let downPressed2 = false;
let leftPressed2 = false;
let rightPressed2 = false;

let goalsPlayerOne = 0;
let goalsPlayerTwo = 0;


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

  const keyDownHandler = e => {
    e.preventDefault();
    if(e.keyCode === 87) {
        upPressed = true;
    }
    else if(e.keyCode === 83) {
        downPressed = true;
    }
    else if(e.keyCode === 65) {
        leftPressed = true;
    }
    else if(e.keyCode === 68) {
        rightPressed = true;
    }
    else if(e.keyCode === 38) {
        upPressed2 = true;
    }
    else if(e.keyCode === 40) {
        downPressed2 = true;
    }
    else if(e.keyCode === 37) {
        leftPressed2 = true;
    }
    else if(e.keyCode === 39) {
        rightPressed2 = true;
    }
};

const keyUpHandler = e => {
  e.preventDefault();
  switch (e.keyCode) {
    case 87:
      upPressed = false;
    case 83:
      downPressed = false;
    case 65:
      leftPressed = false;
    case 68:
      rightPressed = false;
    case 38:
      upPressed2 = false;
    case 40:
      downPressed2 = false;
    case 37:
      leftPressed2 = false;
    case 39:
      rightPressed2 = false;

  }
};

document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

const ballOnField = () => {
  if (((ballY + dy < 50 + ballRadius || ballY + dy > 90 + ballRadius) && ballX + dx > w - 20 - ballRadius) ||
    ((ballY + dy < 50 + ballRadius || ballY + dy > 90 + ballRadius) && ballX + dx < 20 + ballRadius)) {
     dx = -dx;
   }
   if (ballY + dy > h - ballRadius || ballY + dy < ballRadius) {
     dy = -dy;
     }
};

  const drawScore = (x, y) => {
      ctxBoard.font = "100px Arial bold";
      ctxBoard.fillStyle = "white";
      ctxBoard.fillText(x, 25, 100);
      ctxBoard.fillText(y, 225, 100);
  };

  const gameOver = () => {
    if (goalsPlayerOne === 5) {
      alert("you won player one");
      document.location.reload();
    } else if (goalsPlayerTwo === 5) {
      alert('player 2 won');
      document.location.reload();
    }
  };

  let keeperOneX = 35;
  let keeperTwoX = w - 35;
  let keeperY = y + 20;

  const moveKeepers = () => {
    if (keeperY !== y - 20) {
         keeperY--;
    }
    // else if (keeperY !== y + 20)
    //  {
    //   keeperY++;
    // }

  };

  const draw = () => {
    ctxBoard.clearRect(0, 0, w, h);
    ctx.clearRect(0, 0, w, h);
    drawScore(goalsPlayerOne, goalsPlayerTwo);
    SoccerField(ctx, h, w);
    drawBall();
    drawPlayer(playerX, playerY, "red", "blue");
    drawPlayer(playerTwoX, playerTwoY, "white", "red");
    drawPlayer(keeperOneX, keeperY, "red", "blue");
    drawPlayer(keeperTwoX, keeperY, "white", "red");
    score();
    ballOnField();
    gameOver();

    if (upPressed2 && playerTwoY > playerRadius + 5) {
        playerTwoY -= 3;
    } else if (downPressed2 && playerTwoY < h - playerRadius - 5) {
        playerTwoY += 3;
    } else if (leftPressed2 && playerTwoX > playerRadius + 5) {
        playerTwoX -= 3;
    } else if (rightPressed2 && playerTwoX < w - playerRadius - 5) {
        playerTwoX += 3;
    }

    if (upPressed && playerY > playerRadius + 5) {
        playerY -= 3;
    } else if (downPressed && playerY < h - playerRadius - 5) {
        playerY += 3;
    } else if(leftPressed && playerX > playerRadius + 5) {
        playerX -= 3;
    } else if(rightPressed && playerX < w - playerRadius - 5) {
        playerX += 3;
    }

    if (playerX < ballX + 5 && playerX > ballX - 5 && playerY < ballY + 5 && playerY > ballY - 5) {
      dx = -dx;
      console.log(`X : player-${playerX} ball-${ballX}`);
      console.log(`Y : player-${playerY} ball-${ballY}`);
    }
    if (playerTwoX < ballX + 5 && playerTwoX > ballX - 5 && playerTwoY < ballY + 5 && playerTwoY > ballY - 5) {
      dy = -dy;
    }
    if (keeperOneX < ballX + 5 && keeperOneX > ballX - 5 && keeperY < ballY + 5 && keeperY > ballY - 5) {
      dy = -dy;
    }
    if (keeperTwoX < ballX + 5 && keeperTwoX > ballX - 5 && keeperY < ballY + 5 && keeperY > ballY - 5) {
      dy = -dy;
    }
     moveKeepers();
     // if (keeperY >= y + 20) {
        // if (keeperY !== y + 20) {
          // keeperY++;
        // }
      // }
      ballX += dx;
      ballY += dy;
      // if (ballX + dx > w - 5 - ballRadius || ballX + dx < 5 + ballRadius) {
      //   // document.location.reload();
      //
      // }

      requestAnimationFrame(draw);

  };

  const score = () => {
    if (ballX > w - 3- ballRadius && ballY + dy > 50 + ballRadius && ballY + dy < 90 + ballRadius) {
      goalsPlayerOne++;
      ballX = x;
      ballY = y;
      // document.location.reload();
    } else if (ballY + dy > 50 + ballRadius && ballY + dy < 90 + ballRadius && ballX + dx < 3 + ballRadius) {
      goalsPlayerTwo++;
      ballX = x;
      ballY = y;
      // document.location.reload();
    }
  };

draw();
