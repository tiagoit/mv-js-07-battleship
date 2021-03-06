const ShipModel = (x, y, len) => {
  const hits = [];
  const initialCoord = { x, y };
  const length = len;

  for (let i = 0; i < length; i += 1) hits[i] = 0;

  const hit = i => {
    hits[i] = 1;
  };

  const isSunk = () => hits.every(h => h === 1);

  return {
    hit,
    hits,
    isSunk,
    initialCoord,
    length,
  };
};

export default ShipModel;
