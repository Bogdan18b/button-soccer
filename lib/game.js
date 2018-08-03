export const drawScore = (ctx, x, y) => {
    ctx.font = "70px Arial bold";
    ctx.fillStyle = "white";
    ctx.fillText(x, 20, 75);
    ctx.fillText(y, 150, 75);
};

export const gameOver = (goalsPlayerOne, goalsPlayerTwo) => {
  if (goalsPlayerOne === 5 || goalsPlayerTwo === 5) {
    const score = {
      x: goalsPlayerOne,
      y: goalsPlayerTwo
    };
    Object.freeze(score);
    $("#final-score").html(`${score.x} : ${score.y}`);
    $("#congrats").removeClass("hide");
  }
};

export const playAgain = () => {
  document.location.reload();
};

export const getDistance = (x1, y1, radius1 ,x2, y2, radius2) => {
  let xDistance = x2 - x1;
  let yDistance = y2 - y1;

  let dist = Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));

  return (dist < radius1 + radius2 + 15) ? true : false;
};
