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

let dx = 2;
let dy = 2.5;
let dz = 0.5;

let ballRadius = 3;
let playerRadius = 9;


let goalsPlayerOne = 0;
let goalsPlayerTwo = 0;


document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.getElementById("reset").addEventListener("click", () => {document.location.reload();});

const playerShooting = () => {
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
    if (ballX > w - 6 - ballRadius && ballY + dy > 50 + ballRadius && ballY + dy < 90 + ballRadius) {
      goalsPlayerOne++;
      ballX = x;
      ballY = y;
    } else if (ballY + dy > 50 + ballRadius && ballY + dy < 90 + ballRadius && ballX + dx < 6 + ballRadius) {
      goalsPlayerTwo++;
      ballX = x;
      ballY = y;
    }
  };

  const draw = () => {
    ctxBoard.clearRect(0, 0, w, h);
    ctx.clearRect(0, 0, w, h);
    drawScore(ctxBoard, goalsPlayerOne, goalsPlayerTwo);
    SoccerField(ctx, h, w);
    drawBall(ctx, ballX, ballY, ballRadius);
    drawPlayer(ctx, playerX, playerY, playerRadius, "red", "blue");
    drawPlayer(ctx, playerTwoX, playerTwoY, playerRadius, "white", "red");
    drawPlayer(ctx, keeperOneX, keeperY, playerRadius, "red", "blue");
    drawPlayer(ctx, keeperTwoX, keeperY, playerRadius, "white", "red");
    score();
    ballOnField();
    gameOver(goalsPlayerOne, goalsPlayerTwo);

    playerShooting();

    if (playerX < ballX + 10 && playerX > ballX - 10 && playerY < ballY + 10 && playerY > ballY - 10) {
      dx = -dx;
      console.log(`X : player-${playerX} ball-${ballX}`);
      console.log(`Y : player-${playerY} ball-${ballY}`);
    }
    if (playerTwoX < ballX + 5 && playerTwoX > ballX - 5 && playerTwoY < ballY + 5 && playerTwoY > ballY - 5) {
      dy = -dy;
      console.log(`X : player-${playerTwoX} ball-${ballX}`);
      console.log(`Y : player-${playerTwoY} ball-${ballY}`);
    }
    if (keeperOneX < ballX + 5 && keeperOneX > ballX - 5 && keeperY < ballY + 5 && keeperY > ballY - 5) {
      dy = -dy;
    }
    if (keeperTwoX < ballX + 5 && keeperTwoX > ballX - 5 && keeperY < ballY + 5 && keeperY > ballY - 5) {
      dy = -dy;
    }
     moveKeepers();
      ballX += dx;
      ballY += dy;
      keeperY += dz;

      requestAnimationFrame(draw);

  };

draw();
