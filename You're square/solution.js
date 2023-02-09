var isSquare = function (n) {
  return (
    parseInt(Math.sqrt(n)) * parseInt(Math.sqrt(n)) === n && !Number.isNaN(n)
  );
};
