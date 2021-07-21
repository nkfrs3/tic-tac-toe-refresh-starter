const Screen = require("./screen");
const Cursor = require("./cursor");

class TTT {

  constructor() {


    this.grid = [[' ',' ',' '],
                 [' ',' ',' '],
                 [' ',' ',' ']]

    this.cursor = new Cursor(3, 3);

    // Initialize a 3x3 tic-tac-toe grid
    Screen.initialize(3, 3);
    Screen.setGridlines(true);

    // Replace this with real commands
    //Screen.addCommand('t', 'test command (remove)', TTT.testCommand);
    Screen.addCommand('w', "Move the cursor up", this.cursor.up.bind(this.cursor))
    Screen.addCommand('s', "Move the cursor down", this.cursor.down.bind(this.cursor))
    Screen.addCommand('d', "Move the cursor right", this.cursor.right.bind(this.cursor))
    Screen.addCommand('a', "Move the cursor left", this.cursor.left.bind(this.cursor))
    Screen.addCommand('space', "Play move", this.cursor.turn.bind(this.cursor))

    Screen.render();
  }

  // Remove this
  static testCommand() {
    console.log("TEST COMMAND");
  }

  static checkWin(grid) {

    // Return 'X' if player X wins
    // Return 'O' if player O wins
    // Return 'T' if the game is a tie
    // Return false if the game has not ended

  }

  static endGame(winner) {
    if (winner === 'O' || winner === 'X') {
      Screen.setMessage(`Player ${winner} wins!`);
    } else if (winner === 'T') {
      Screen.setMessage(`Tie game!`);
    } else {
      Screen.setMessage(`Game Over`);
    }
    Screen.render();
    Screen.quit();
  }

}

module.exports = TTT;
