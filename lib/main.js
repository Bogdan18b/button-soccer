import SoccerField from "./soccer_field";
import { keyUpHandler,keyDownHandler, upPressed, downPressed, leftPressed, rightPressed, upPressed2, downPressed2, leftPressed2, rightPressed2 } from "./events_util";
import { drawScore, gameOver, drawBall, drawPlayer } from "./game.js";

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

let dx = 1.5;
let dy = 2.5;
let dz = 0.5;

let ballRadius = 3;
let playerRadius = 8;

let goalsPlayerOne = 0;
let goalsPlayerTwo = 0;

const playAgain = () => {
  document.location.reload();
};

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.getElementById("reset").addEventListener("click", playAgain);


const playerMove = () => {
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
};

const getDistance = (x1, y1, x2, y2) => {
  let xDistance = x2 - x1;
  let yDistance = y2 - y1;

  return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
};

const ballOnField = () => {
  if (((ballY + dy < 50 + ballRadius || ballY + dy > 90 + ballRadius) && ballX + dx > w - 20 - ballRadius) ||
    ((ballY + dy < 50 + ballRadius || ballY + dy > 90 + ballRadius) && ballX + dx < 20 + ballRadius)) {
     dx = -dx;
   }
   if (ballY + dy > h - ballRadius || ballY + dy < ballRadius) {
     dy = -dy;
     }
};

  let keeperOneX = 35;
  let keeperTwoX = w - 35;
  let keeperY = y - 20;

  const moveKeepers = () => {
    if (keeperY > y + 20 || keeperY < y - 20) {
      dz = -dz;
    }
  };

  const score = () => {
    if (ballX > w - 10 - ballRadius && ballY + dy > 50 + ballRadius && ballY + dy < 90 + ballRadius) {
      goalsPlayerOne++;
      ballX = x + rand;
      ballY = y + rand;
    } else if (ballY + dy > 50 + ballRadius && ballY + dy < 90 + ballRadius && ballX + dx < 10 + ballRadius) {
      goalsPlayerTwo++;
      ballX = x + rand;
      ballY = y + rand;
    }
  };

  const draw = () => {

    ctxBoard.clearRect(0, 0, w, h);
    ctx.clearRect(0, 0, w, h);
    drawScore(ctxBoard, goalsPlayerOne, goalsPlayerTwo);
    SoccerField(ctx, h, w);
    drawBall(ctx, ballX, ballY, ballRadius);
    drawPlayer(ctx, playerX, playerY, playerRadius, "#FF0000", "#0000FF");
    drawPlayer(ctx, playerTwoX, playerTwoY, playerRadius, "#FFFFFF", "#FF0000");
    drawPlayer(ctx, keeperOneX, keeperY, playerRadius, "#FF0000", "#0000FF");
    drawPlayer(ctx, keeperTwoX, keeperY, playerRadius, "#FFFFFF", "#FF0000");
    ballOnField();
    playerMove();
    score();
    gameOver(goalsPlayerOne, goalsPlayerTwo);

    if (getDistance(playerX, playerY, ballX, ballY) < playerRadius + ballRadius) {
      dx = -dx;
      dy = -dy;
    }
    if (getDistance(playerTwoX, playerTwoY, ballX, ballY) < playerRadius + ballRadius) {
      dy = -dy;
      dx = -dx;
    }
    if (getDistance(keeperOneX, keeperY, ballX, ballY) < playerRadius + ballRadius) {
      dy = -dy;
    }
    if (getDistance(keeperTwoX, keeperY, ballX, ballY) < playerRadius + ballRadius) {
      dy = -dy;
    }
    if (getDistance(keeperTwoX, keeperY, playerX, playerY) < 2 * playerRadius) {
      playerX -= 15;
    }
    if (getDistance(keeperOneX, keeperY, playerX, playerY) < 2 * playerRadius) {
      playerX += 5;
    }
    if (getDistance(keeperTwoX, keeperY, playerTwoX, playerTwoY) < 2 * playerRadius) {
      playerTwoX -= 5;
    }
    if (getDistance(keeperOneX, keeperY, playerTwoX, playerTwoY) < 2 * playerRadius) {
      playerTwoX += 15;
    }
    if (getDistance(playerX, playerY, playerTwoX, playerTwoY) < 2 * playerRadius) {
      playerTwoX += 5;
      playerX -= 5;
    }

     moveKeepers();
      ballX += dx;
      ballY += dy;
      keeperY += dz;

      requestAnimationFrame(draw);

  };

draw();
