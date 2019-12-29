import ShipModel from '../src/models/ship.model';

describe('ShipModel', () => {
  let ship;

  beforeEach(() => {
    ship = ShipModel(0, 0, 3);
  });

  it('not sunk', () => {
    ship.hit(0);
    expect(ship.isSunk()).toBeFalsy();
  });

  it('hit untill sunk', () => {
    [0, 1, 2].forEach(i => ship.hit(i));
    expect(ship.isSunk()).toBeTruthy();
  });
});
