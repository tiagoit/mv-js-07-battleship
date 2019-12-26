import ShipModel from '../models/ship.model';
import GameBoardView from '../views/game-board.view';

const GameBoard = (playerType) => {
  const boardArray = []; // [0|1|Ship]
  const ships = [];
  const type = playerType; // [AI|Human]

  for (let x = 0; x < 10; x += 1) {
    boardArray[x] = [];
    for (let y = 0; y < 10; y += 1) {
      boardArray[x][y] = 0;
    }
  }

  const placeShip = (x, y, length) => {
    const ship = ShipModel(x, y, length);
    ships.push(ship);
    for (let k = 0; k < length; k += 1) {
      boardArray[x][y + k] = ship;
    }
    GameBoardView.shipsPlacement(boardArray, placeShip);
  };

  const shipsPlacement = () => {
    GameBoardView.shipsPlacement(boardArray, placeShip);
  };

  const receiveAttack = (x, y) => {
    // TODO: Validate movement before this function
    if (boardArray[x][y] === 0) {
      boardArray[x][y] = 1;
    } else { // Ship
      const ship = boardArray[x][y];
      const initialColumn = boardArray[x][y].coordinates.y;
      ship.hit(y - initialColumn);
    }
  };

  const allSunk = () => ships.every(s => s.isSunk());

  return {
    placeShip, receiveAttack, allSunk, shipsPlacement, boardArray,
  };
};

export default GameBoard;
