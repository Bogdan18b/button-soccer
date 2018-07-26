export let upPressed = false;
export let downPressed = false;
export let leftPressed = false;
export let rightPressed = false;
export let upPressed2 = false;
export let downPressed2 = false;
export let leftPressed2 = false;
export let rightPressed2 = false;

  export const keyDownHandler = e => {
    e.preventDefault();
    if(e.keyCode === 87) {
        upPressed = true;
    }
    else if(e.keyCode === 83) {
        downPressed = true;
    }
    else if(e.keyCode === 65) {
        leftPressed = true;
    }
    else if(e.keyCode === 68) {
        rightPressed = true;
    }
    else if(e.keyCode === 38) {
        upPressed2 = true;
    }
    else if(e.keyCode === 40) {
        downPressed2 = true;
    }
    else if(e.keyCode === 37) {
        leftPressed2 = true;
    }
    else if(e.keyCode === 39) {
        rightPressed2 = true;
    }
};

export const keyUpHandler = e => {
  e.preventDefault();
  switch (e.keyCode) {
    case 87:
      upPressed = false;
    case 83:
      downPressed = false;
    case 65:
      leftPressed = false;
    case 68:
      rightPressed = false;
    case 38:
      upPressed2 = false;
    case 40:
      downPressed2 = false;
    case 37:
      leftPressed2 = false;
    case 39:
      rightPressed2 = false;

  }
};
