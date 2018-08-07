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

export const getDistance = (player1, player2) => {
  let xDistance = player2.x - player1.x;
  let yDistance = player2.y - player1.y;
  let distance = Math.pow(xDistance, 2) + Math.pow(yDistance, 2);
  let radius = Math.pow(player1.radius + player2.radius + 15, 2); // 15 is the lineWidth f the player
  return distance <= radius;
};
