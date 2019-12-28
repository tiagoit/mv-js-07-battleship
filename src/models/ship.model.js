const ShipModel = (x, y, len) => {
  const hits = [];
  const initialCoord = { x, y };
  const length = len;

  for (let i = 0; i < length; i += 1) hits[i] = 0;

  const isSunk = () => hits.every(h => h === 1);

  return { hits, isSunk, initialCoord, length };
};

export default ShipModel;
