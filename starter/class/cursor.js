const Screen = require("./screen");
const checkWin  = require("./ttt").checkWin;

class Cursor {

  constructor(numRows, numCols) {
    this.numRows = numRows;
    this.numCols = numCols;

    this.row = 0;
    this.col = 0;

    this.gridColor = 'black';
    this.cursorColor = 'yellow';

  }

  resetBackgroundColor() {
    Screen.setBackgroundColor(this.row, this.col, this.gridColor);
  }

  setBackgroundColor() {
    Screen.setBackgroundColor(this.row, this.col, this.cursorColor);
  }

  up() {
    this.resetBackgroundColor()
    if (this.row === 0) {
      this.row = 0;
    } else {
      this.row -= 1;
    }
    this.setBackgroundColor();
    Screen.render();
  }

  down() {
    this.resetBackgroundColor()
    if (this.row >= 2) {
      this.row = 2;
    } else {
      this.row ++;
    }
    this.setBackgroundColor();
    Screen.render();
  }

  left() {
    this.resetBackgroundColor()
    if (this.col === 0) {
      this.col = 0
    } else {
      this.col --;
    }
    this.setBackgroundColor();
    Screen.render();
  }

  right() {
    this.resetBackgroundColor()
    if (this.col >= 2) {
      this.col = 2;
    } else {
      this.col ++;
    }
    this.setBackgroundColor();
    Screen.render();
  }



}


module.exports = Cursor;
