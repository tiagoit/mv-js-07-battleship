import ShipModel from '../models/ship.model';
import GameBoardView from '../views/game-board.view';

const GameBoard = (pType) => {
  const boardArray = []; // [0|1|Ship]
  const ships = [];
  const playerType = pType; // [AI|Human]

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

  const renderForBattle = (callback) => {
    GameBoardView.battle(boardArray, playerType, callback);
  };


  const receiveAttack = (x, y) => {
    if (boardArray[x][y] === 0) {
      boardArray[x][y] = 1;
      return true;
    }
    if (boardArray[x][y] !== 1) { // Ship
      const ship = boardArray[x][y];
      const initialColumn = boardArray[x][y].coordinates.y;
      ship.hit(y - initialColumn);
      return true;
    }
    return false;
  };

  const allSunk = () => ships.every(s => s.isSunk());

  return {
    placeShip, receiveAttack, allSunk, shipsPlacement, boardArray, renderForBattle,
  };
};

export default GameBoard;
