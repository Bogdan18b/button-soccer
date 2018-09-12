export let upPressed = false;
export let downPressed = false;
export let leftPressed = false;
export let rightPressed = false;
export let upPressed2 = false;
export let downPressed2 = false;
export let leftPressed2 = false;
export let rightPressed2 = false;

  export const keyDownHandler = e => {
    if(e.keyCode === 38) {
        upPressed = true;
    }
    else if(e.keyCode === 40) {
        downPressed = true;
    }
    else if(e.keyCode === 37) {
        leftPressed = true;
    }
    else if(e.keyCode === 39) {
        rightPressed = true;
    }
    else if(e.keyCode === 87) {
        upPressed2 = true;
    }
    else if(e.keyCode === 83) {
        downPressed2 = true;
    }
    else if(e.keyCode === 65) {
        leftPressed2 = true;
    }
    else if(e.keyCode === 68) {
        rightPressed2 = true;
    }
};

export const keyUpHandler = e => { 
  if(e.keyCode === 38) {
      upPressed = false;
  }
  else if(e.keyCode === 40) {
      downPressed = false;
  }
  else if(e.keyCode === 37) {
      leftPressed = false;
  }
  else if(e.keyCode === 39) {
      rightPressed = false;
  }
  else if(e.keyCode === 87) {
      upPressed2 = false;
  }
  else if(e.keyCode === 83) {
      downPressed2 = false;
  }
  else if(e.keyCode === 65) {
      leftPressed2 = false;
  }
  else if(e.keyCode === 68) {
      rightPressed2 = false;
  }
};
