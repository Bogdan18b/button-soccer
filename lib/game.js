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

export const playAgain = () => {
  document.location.reload();
};

export const getDistance = (x1, y1, radius1 ,x2, y2, radius2) => {
  let xDistance = x2 - x1;
  let yDistance = y2 - y1;

  let dist = Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));

  return (dist < radius1 + radius2) ? true : false;
};
