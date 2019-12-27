import ShipModel from '../models/ship.model';
import GameBoardView from '../views/game-board.view';
import AppService from '../app.service';

const GameBoard = (pType) => {
  const boardArray = []; // [0|1|Ship]
  const ships = [];
  const playerType = pType; // [AI|Human]
  const appService = AppService();

  for (let x = 0; x < 10; x += 1) {
    boardArray[x] = [];
    for (let y = 0; y < 10; y += 1) {
      boardArray[x][y] = 0;
    }
  }

  const placeShip = (x, y, length, verbose = true) => {
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

    const ship = ShipModel(x, y, length);
    ships.push(ship);

    // for (let k = 0; k < length; k += 1) {
    //   boardArray[x][y + k] = ship;
    // }
    GameBoardView.shipsPlacement(boardArray, placeShip);
    return true;
  };

  const shipsPlacement = () => {
    GameBoardView.shipsPlacement(boardArray, placeShip);
  };

  const renderForBattle = (callback) => {
    GameBoardView.battle(boardArray, playerType, callback);
  };

  const shipHitted = (x, y) => {
    let hit = false;
    ships.forEach(el => {
      if (el.shipCoordinates.includes(String(x) + String(y))) {
        console.log("It's a hit");
        hit = true;
      }
    });
    return hit;
  };

  const receiveAttack = (x, y) => {
    if (shipHitted(x,y)) { // Ship
      boardArray[x][y] = 2;
      // const ship = boardArray[x][y];
      // const initialColumn = boardArray[x][y].coordinates.y;
      // ship.hit(y - initialColumn);
      return true;
    } if (boardArray[x][y] === 0) {
      boardArray[x][y] = 1;
      return true;
    }
    return false;
  };

  const allSunk = () => ships.every(s => s.isSunk());

  return {
    placeShip, receiveAttack, allSunk, shipsPlacement, boardArray, renderForBattle, ships,
  };
};

export default GameBoard;
