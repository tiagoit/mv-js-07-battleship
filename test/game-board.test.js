import GameBoardController from '../src/controllers/game-board.controller';

describe('GameBoardController', () => {
  let gameBoard;

  beforeEach(() => {
    gameBoard = GameBoardController();
    gameBoard.placeShip(0, 0, 2);
    gameBoard.placeShip(3, 0, 2);
  });

  it('should place and hit ships, don\'t sunk all', () => {
    gameBoard.receiveAttack(0, 0);
    gameBoard.receiveAttack(3, 0);
    expect(gameBoard.allSunk()).toBeFalsy();
  });

  it('should place and hit ships till all sunk', () => {
    gameBoard.receiveAttack(0, 0);
    gameBoard.receiveAttack(0, 1);
    gameBoard.receiveAttack(3, 0);
    gameBoard.receiveAttack(3, 1);
    expect(gameBoard.allSunk()).toBeTruthy();
  });
});
