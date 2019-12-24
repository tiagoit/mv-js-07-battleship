const ShipModel = (x, y, length) => {
  const hits = [];
  const coordinates = { x, y };
  for (let i = 0; i < length; i += 1) hits[i] = 0;

  const hit = i => {
    hits[i] = 1;
  };

  const isSunk = () => hits.every(h => h === 1);

  return { hit, isSunk, coordinates };
};

export default ShipModel;
