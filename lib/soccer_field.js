const SoccerField = (ctx, h, w) => {

  let x = w / 2;  // width is 1200px
  let y = h / 2;  //height is 600px
  let square = w / 24;  // 50px also h/12

  ctx.beginPath(); // center line
    ctx.moveTo(x, 0);
    ctx.lineTo(x, h);
    ctx.lineWidth = 2;
    ctx.strokeStyle = "white";
    ctx.stroke();

  ctx.beginPath(); // left side line
    ctx.moveTo(square, 0);
    ctx.lineTo(square, h);
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
    ctx.moveTo(23 * square, 0);
    ctx.lineTo(23 * square, h);
    ctx.lineWidth = 2;
    ctx.strokeStyle = "white";
    ctx.stroke();

  ctx.beginPath(); // 16 square left side line
    ctx.moveTo(square, y/3);
    ctx.lineTo(4 * square, y/3);
    ctx.lineTo(4 * square, 5*y/3);
    ctx.lineTo(square, 5*y/3);
    ctx.strokeStyle = "white";
    ctx.stroke();

  ctx.beginPath();  // 6 square left side line
    ctx.moveTo(square, y - 3 * square);
    ctx.lineTo(2.5 * square,y - 3 * square);
    ctx.lineTo(2.5 * square, y + 3 * square);
    ctx.lineTo(square, y + 3 * square);
    ctx.strokeStyle = "white";
    ctx.stroke();

  ctx.beginPath();  // 16 square right side line
    ctx.moveTo(w - square, y/3);
    ctx.lineTo(w - 4 * square, y/3);
    ctx.lineTo(w - 4 * square, 5*y/3);
    ctx.lineTo(w - square, 5*y/3);
    ctx.strokeStyle = "white";
    ctx.stroke();

  ctx.beginPath(); // 6 square right side line
    ctx.moveTo(w - square, y - 3 * square);
    ctx.lineTo(w - 2.5 * square, y - 3 * square);
    ctx.lineTo(w - 2.5 * square, y + 3 * square);
    ctx.lineTo(w - square, y + 3 * square);
    ctx.strokeStyle = "white";
    ctx.stroke();

    ctx.beginPath(); // center field circle
    ctx.arc(x, y, 100, 0, Math.PI * 2, false);
    ctx.strokeStyle = "white";
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath(); // left side semicircle
    ctx.arc(4 * square, y, 100, Math.PI * 1.5, Math.PI/2, false);
    ctx.strokeStyle = "white";
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath(); // right side semicircle
    ctx.arc(w - 4 * square, y, 100, Math.PI / 2, Math.PI * 1.5, false);
    ctx.strokeStyle = "white";
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath(); // small center field circle
    ctx.arc(x, y, 3, 0, Math.PI * 2, false);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath(); // small left side circle
    ctx.arc(3.3 * square, y, 3, 0, Math.PI * 2, false);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath(); // small right side circle
    ctx.arc(w - 3.3 * square, y, 3, 0, Math.PI * 2, false);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(0, y - 2 * square, square, 4 * square); //left goal
    ctx.strokeStyle = "white";
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(w - square, y - 2 * square, square, 4 * square); //right goal
    ctx.strokeStyle = "white";
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(0, 0, square - 1, 4 * square - 1); // left top side
    ctx.fillStyle = "navy";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(0, y + 2 * square + 1, square - 1, 4.5 * square); // left bottom side
    ctx.fillStyle = "navy";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(w - square + 1, 0, square - 1, 4 * square - 1); // right top side
    ctx.fillStyle = "navy";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(w - square + 1, y + 2 * square + 1, square - 1, 4.5 * square); // right bottom side
    ctx.fillStyle = "navy";
    ctx.fill();
    ctx.closePath();

};

export default SoccerField;
