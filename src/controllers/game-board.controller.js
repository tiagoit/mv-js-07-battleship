import ShipModel from '../models/ship.model';
import GameBoardView from '../views/game-board.view';
import AppService from '../app.service';

const GameBoard = (pType) => {
  const boardArray = []; // [0|1|Ship]
  const ships = [];
  const playerType = pType; // [AI|Human]
  const appService = AppService();

  // Init a 10x10 board filled with zeros.
  for (let x = 0; x < 10; x += 1) {
    boardArray[x] = [];
    for (let y = 0; y < 10; y += 1) {
      boardArray[x][y] = 0;
    }
  }

  const placeShip = (x, y, length, verbose = true) => {
    // Validations
    if (y + length - 1 > 9) {
      if (verbose) appService.message('Invalid ship position! Board overflow...');
      return false;
    }
    for (let i = 0; i < length; i += 1) {
      if (boardArray[x][y + i] !== 0) {
        if (verbose) appService.message('Invalid ship position! Ship overlap...');
        return false;
      }
    }

    // Add this ship to the board ships array.
    const ship = ShipModel(x, y, length);
    ships.push(ship);

    // Fill the board cells where the ship has been placed with references to it.
    for (let k = 0; k < length; k += 1) boardArray[x][y + k] = ship;

    // Re-render shipsPlacement state view.
    shipsPlacement(boardArray, placeShip);

    // True means it was a valid placement.
    return true;
  };

  // Render shipsPlacement state view.
  const shipsPlacement = () => {
    GameBoardView.renderShipsPlacement(boardArray, placeShip);
  };

  // Render battle state view.
  const battle = (callback) => {
    GameBoardView.renderBattle(boardArray, playerType, callback);
  };

  const receiveAttack = (x, y) => {
    const cell = boardArray[x][y];

    // NO ship | NO shot
    if (cell === 0) {
      boardArray[x][y] = 1;
      return true;
    }

    // NO ship | HAVE shot
    if (cell === 1) return false;

    // index of this column on the ship (hits array).
    const inShipIndex = y - cell.initialCoord;
    
    // HAVE ship | NO shot
    if(cell[inShipIndex] === 0) {
      cell[inShipIndex] = 1;
      return true
    }
      
    // HAVE ship | HAVE shot
    else return false;
  };

  // Returns true if all the ships on the board have sunk.
  const allSunk = () => ships.every(s => s.isSunk());

  return {
    boardArray, ships, shipsPlacement, battle, placeShip, receiveAttack, allSunk
  };
};

export default GameBoard;
