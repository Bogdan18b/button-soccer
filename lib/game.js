export const drawBall = (ctx, x, y, radius) => {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI*2);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.closePath();
};

export const drawPlayer = (ctx, x, y, radius, fill, border) => {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI*2);
  ctx.fillStyle = fill;
  ctx.fill();
  ctx.lineWidth = 3;
  ctx.strokeStyle = border;
  ctx.stroke();
  ctx.closePath();
};

export const drawScore = (ctx, x, y) => {
    ctx.font = "100px Arial bold";
    ctx.fillStyle = "white";
    ctx.fillText(x, 25, 100);
    ctx.fillText(y, 225, 100);
};

export const gameOver = (goalsPlayerOne, goalsPlayerTwo) => {
  if (goalsPlayerOne === 5 || goalsPlayerTwo === 5) {
    document.getElementById("congrats").classList.remove("hide");
  }
};
