class SoccerField {
  constructor(ctx, height, width) {
    this.ctx = ctx;
    this.height = height;
    this.width = width;
    this.x = this.width / 2;  // width is 1200px
    this.y = this.height / 2;  //height is 600px
    this.square = this.width / 24;  // 50px also h/12
  }

  draw() {
    this.ctx.lineWidth = 2;
    this.ctx.strokeStyle = "white";
    this.ctx.fillStyle = "white";
    this.centerLine();
    this.leftSideLine();
    this.rightSideLine();
    this.topLine();
    this.bottomLine();
    this.leftSideBigBox();
    this.rightSideBigBox();
    this.leftSideSmallBox();
    this.rightSideSmallBox();
    this.centerFieldCircle();
    this.leftSideSemicircle();
    this.rightSideSemicircle();
    this.centerFieldDot();
    this.leftSideDot();
    this.rightSideDot();
    this.leftGoal();
    this.rightGoal();
    this.leftTopSide();
    this.leftBottomSide();
    this.rightTopSide();
    this.rightBottomSide();
  }

  centerLine() {
    this.ctx.beginPath();
    this.ctx.moveTo(this.x, 0);
    this.ctx.lineTo(this.x, this.height);
    this.ctx.stroke();
  }

  leftSideLine() {
    this.ctx.beginPath();
    this.ctx.moveTo(this.square, 0);
    this.ctx.lineTo(this.square, this.height);
    this.ctx.stroke();
  }

  topLine() {
    this.ctx.beginPath();
    this.ctx.moveTo(20, 1);
    this.ctx.lineTo(this.width - 20, 1);
    this.ctx.stroke();
  }

  bottomLine() {
    this.ctx.beginPath();
    this.ctx.moveTo(20, this.height - 1);
    this.ctx.lineTo(this.width - 20, this.height - 1);
    this.ctx.stroke();
  }

  rightSideLine() {
    this.ctx.beginPath();
    this.ctx.moveTo(23 * this.square, 0);
    this.ctx.lineTo(23 * this.square, this.height);
    this.ctx.stroke();
  }

  leftSideBigBox() {
    this.ctx.beginPath();
    this.ctx.moveTo(this.square, this.y/3);
    this.ctx.lineTo(4 * this.square, this.y/3);
    this.ctx.lineTo(4 * this.square, 5*this.y/3);
    this.ctx.lineTo(this.square, 5*this.y/3);
    this.ctx.stroke();
  }

  leftSideSmallBox() {
    this.ctx.beginPath();
    this.ctx.moveTo(this.square, this.y - 3 * this.square);
    this.ctx.lineTo(2.5 * this.square, this.y - 3 * this.square);
    this.ctx.lineTo(2.5 * this.square, this.y + 3 * this.square);
    this.ctx.lineTo(this.square, this.y + 3 * this.square);
    this.ctx.stroke();
  }

  rightSideBigBox() {
    this.ctx.beginPath();
    this.ctx.moveTo(this.width - this.square, this.y/3);
    this.ctx.lineTo(this.width - 4 * this.square, this.y/3);
    this.ctx.lineTo(this.width - 4 * this.square, 5*this.y/3);
    this.ctx.lineTo(this.width - this.square, 5*this.y/3);
    this.ctx.stroke();
  }

  rightSideSmallBox() {
    this.ctx.beginPath();
    this.ctx.moveTo(this.width - this.square, this.y - 3 * this.square);
    this.ctx.lineTo(this.width - 2.5 * this.square, this.y - 3 * this.square);
    this.ctx.lineTo(this.width - 2.5 * this.square, this.y + 3 * this.square);
    this.ctx.lineTo(this.width - this.square, this.y + 3 * this.square);
    this.ctx.stroke();
  }

  centerFieldCircle() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, 100, 0, Math.PI * 2, false);
    this.ctx.stroke();
    this.ctx.closePath();
}

  leftSideSemicircle() {
    this.ctx.beginPath();
    this.ctx.arc(4 * this.square, this.y, 100, Math.PI * 1.5, Math.PI/2, false);
    this.ctx.stroke();
    this.ctx.closePath();
  }

  rightSideSemicircle() {
    this.ctx.beginPath();
    this.ctx.arc(this.width - 4 * this.square, this.y, 100, Math.PI / 2, Math.PI * 1.5, false);
    this.ctx.stroke();
    this.ctx.closePath();
  }

  centerFieldDot() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, 3, 0, Math.PI * 2, false);
    this.ctx.fill();
    this.ctx.closePath();
  }

  leftSideDot() {
    this.ctx.beginPath();
    this.ctx.arc(3.3 * this.square, this.y, 3, 0, Math.PI * 2, false);
    this.ctx.fill();
    this.ctx.closePath();
  }

  rightSideDot() {
    this.ctx.beginPath();
    this.ctx.arc(this.width - 3.3 * this.square, this.y, 3, 0, Math.PI * 2, false);
    this.ctx.fill();
    this.ctx.closePath();
  }

  leftGoal() {
    this.ctx.beginPath();
    this.ctx.rect(0, this.y - 2 * this.square, this.square, 4 * this.square);
    this.ctx.stroke();
  }

  rightGoal() {
    this.ctx.beginPath();
    this.ctx.rect(this.width - this.square, this.y - 2 * this.square, this.square, 4 * this.square);
    this.ctx.stroke();
  }

  leftTopSide() {
    this.ctx.beginPath();
    this.ctx.rect(0, 0, this.square - 1, 4 * this.square - 1);
    this.ctx.fillStyle = "navy";
    this.ctx.fill();
    this.ctx.closePath();
  }

  leftBottomSide() {
    this.ctx.beginPath();
    this.ctx.rect(0, this.y + 2 * this.square + 1, this.square - 1, 4 * this.square);
    this.ctx.fillStyle = "navy";
    this.ctx.fill();
    this.ctx.closePath();
  }

  rightTopSide() {
    this.ctx.beginPath();
    this.ctx.rect(this.width - this.square + 1, 0, this.square - 1, 4 * this.square - 1);
    this.ctx.fillStyle = "navy";
    this.ctx.fill();
    this.ctx.closePath();
  }

  rightBottomSide() {
    this.ctx.beginPath();
    this.ctx.rect(this.width - this.square + 1, this.y + 2 * this.square + 1, this.square - 1, 4 * this.square); // right bottom side
    this.ctx.fillStyle = "navy";
    this.ctx.fill();
    this.ctx.closePath();
  }

}

export default SoccerField;
