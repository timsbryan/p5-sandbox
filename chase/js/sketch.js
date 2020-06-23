"use strict";

const cellWidth = 20;
const cellHeight = cellWidth;
const cellRows = 20;
const cellCols = 20;
let grid = new Array(cellCols);
let player = {
  type: "player"
};

function setup() {
  createCanvas(cellWidth * cellCols, cellHeight * cellRows);
  
  for(let i = 0; i < cellCols; i++) {
    grid[i] = new Array(cellRows);
  }
  
  for(let i = 0; i < cellCols; i++) {
    for(let j = 0; j < cellRows; j++) {
      grid[i][j] = { 
        type: "empty",
        "i": i,
        "j": j
      };
    }
  }
  
  noLoop();

  let playerCol = int(random(cellCols))
  let playerRow = int(random(cellRows))
  
  grid[playerCol][[playerRow]] = player;
  player.i = playerCol;
  player.j = playerRow;
}

function draw() {
  background(51);
  
  background(50);
  stroke(255);

  for (let i = 0; i < cellCols; i++) {
    for (let j = 0; j < cellRows; j++) {
      line(i * cellWidth, 0, i * cellWidth, height);
      line(0, j * cellHeight, width, j * cellHeight);

      if(grid[i][j].type === "player") {
        grid[i][j].drawPlayer();
      }
    }
  }

  fill(255, 0, 0);
  rect(
    int(random(cellCols)) * cellWidth,
    int(random(cellRows)) * cellHeight,
    cellWidth,
    cellHeight
  );
  
  player.drawPlayer();
}

function keyReleased() {
  if (keyCode === UP_ARROW) {
      player.moveUp();
    } else if (keyCode === DOWN_ARROW) {
      player.moveDown();
    } else if (keyCode === LEFT_ARROW) {
      player.moveLeft();
    } else if (keyCode === RIGHT_ARROW) {
      player.moveRight();
    }
  
    redraw();
}

player.drawPlayer = function() {
  push();
  fill(0, 255, 0);
  console.log(this);
  rect(this.i * cellWidth, this.j * cellHeight, cellWidth, cellHeight);
  pop();
}

player.moveUp = function () {
  if(player.j > 0) {
      player.j--;
  }
}

player.moveRight = function () {
  if(player.i < (cellCols-1)) {
    player.i++;
  }
}

player.moveDown = function() {
  if(player.j < (cellRows-1)) {
    player.j++;
  }
}

player.moveLeft = function() {
  if(player.i > 0) {
    player.i--;
  }
}