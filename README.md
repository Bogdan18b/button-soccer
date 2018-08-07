# Button Soccer

Button Soccer is a game created using javaScript, jQuery, HTML and CSS. The game can be played against the computer or against a friend.  First player to score 5 goals wins.
You can try it [here](http://bogdanbobletec.us/button-soccer/index.html).

![soccer](https://raw.githubusercontent.com/Bogdan18b/button-soccer/master/assets/field.png)

One of the things that took me a lot of time was drawing the field, the way I calculated the lines was by splitting the field in squares:

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

  Another challenging part was the collision detection, for which I implemented the following function to accurately detect when a player hits the ball or collides with another player:

          export const getDistance = (x1, y1, radius1 ,x2, y2, radius2) => {
            let xDistance = x2 - x1;
            let yDistance = y2 - y1;

            let dist = Math.pow(xDistance, 2) + Math.pow(yDistance, 2);
            let rad = Math.pow(radius1 + radius2 + 10, 2);
            return (dist <= rad) ? true : false;
          };

Future plans include improving the AI player and implementing the option to select a difficulty mode.
