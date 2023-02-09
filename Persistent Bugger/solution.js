function persistence(n) {
  let count = 0;

  let arr = n
    .toString()
    .split("")
    .map((v) => parseInt(v));

  while (arr.length > 1) {
    arr = arr
      .reduce((cur, v) => cur * v)
      .toString()
      .split("")
      .map((v) => parseInt(v));

    count++;
  }

  return count;
}
