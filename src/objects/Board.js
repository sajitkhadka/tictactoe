export class Board {
  constructor() {
    this.setUpBoard();
  }
  setUpBoard() {
    let board = [[]];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        board[i][j] = null;
      }
    }
    this.board = board;
  }
}
