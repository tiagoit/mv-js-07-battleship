import ShipController from '../src/controllers/ship.controller';
import ShipModel from '../src/models/ship.model';

describe('ShipController', () => {
  it('should work', () => {

  });
});

describe('ShipModel', () => {
  let ship;

  beforeEach(() => {
    ship = ShipModel(3);
  });

  it('hit untill sunk', () => {
    ship.hit(1);
    ship.hit(2);
    expect(ship.isSunk()).toBeFalsy();
    ship.hit(3);
    expect(ship.isSunk()).toBeTruthy();
  });
});
