const ShipModel = (len) => {
  const hits = [];

  const hit = (pos) => hits.push(pos);
  const isSunk = () => len === hits.length;

  return { hit, isSunk };
};

export default ShipModel;
