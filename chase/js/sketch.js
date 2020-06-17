"use strict";

const cellWidth = 20;
const cellHeight = cellWidth;
const cellRows = 20;
const cellCols = 20;
let grid = new Array(cellCols);
let player = {
  locCol: 0,
  locRow: 0
};

function setup() {
  createCanvas(cellWidth * cellCols, cellHeight * cellRows);
  
  for(let i = 0; i < cellCols; i++) {
    grid[i] = new Array(cellRows);
  }
  
  for(let i = 0; i < cellCols; i++) {
    for(let j = 0; j < cellRows; j++) {
      grid[i][j] = null;
    }
  }
  
  noLoop();
  
  // player.locCol = int(random(cellCols))* cellWidth;
  // player.locRow = int(random(cellRows)) * cellHeight;
  player.locCol = int(random(cellCols));
  player.locRow = int(random(cellRows));
  console.log(player.locCol, player.locRow);
  grid[player.locCol][player.locRow] = player;
  player.drawPlayer();
}

function draw() {
  background(51);
  
  background(50);
  stroke(255);

  for (let i = 0; i < cellCols; i++) {
    for (let j = 0; j < cellRows; j++) {
      line(i * cellWidth, 0, i * cellWidth, height);
      line(0, j * cellHeight, width, j * cellHeight);
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
  rect(player.locCol * cellWidth, player.locRow * cellHeight, cellWidth, cellHeight);
  pop();
}

player.moveUp = function () {
  if(player.locRow > 0) {
      player.locRow--;
  }
}

player.moveRight = function () {
  if(player.locCol < (cellCols-1)) {
    player.locCol++;
  }
}

player.moveDown = function() {
  if(player.locRow < (cellRows-1)) {
    player.locRow++;
  }
}

player.moveLeft = function() {
  if(player.locCol > 0) {
    player.locCol--;
  }
}