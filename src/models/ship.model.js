const ShipModel = (x, y, len) => {
  const hits = [];
  const coordinates = { x, y };
  const length = len;

  const getShipArray = () => {
    const shipCoordinates = []; // ['01', '02', '03'];
    for (let i = 0; i < len; i += 1) {
      shipCoordinates.push(String(coordinates.x) + String(coordinates.x + i));
    }
    return shipCoordinates;
  };

  for (let i = 0; i < length; i += 1) hits[i] = 0;

  const hit = i => {
    hits[i] = 1;
  };

  const isSunk = () => hits.every(h => h === 1);

  return {
    hit, hits, isSunk, coordinates, length, getShipArray,
  };
};

export default ShipModel;
