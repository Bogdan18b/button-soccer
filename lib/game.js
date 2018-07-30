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
