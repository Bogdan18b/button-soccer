
  export const drawScore = (ctx, x, y) => {
      ctx.font = "100px Arial bold";
      ctx.fillStyle = "white";
      ctx.fillText(x, 25, 100);
      ctx.fillText(y, 225, 100);
  };

  export const gameOver = (goalsPlayerOne, goalsPlayerTwo) => {
    if (goalsPlayerOne === 5) {
      alert(`you won player one. final score: ${goalsPlayerOne}:${goalsPlayerTwo}`);
      document.location.reload();
    } else if (goalsPlayerTwo === 5) {
      alert(`you won player two. final score: ${goalsPlayerOne}:${goalsPlayerTwo}`);
      document.location.reload();
    }
  };

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
      ctx.strokeStyle = border;
      ctx.stroke();
      ctx.closePath();
  };
