function high(x) {
  x = x.split(" ");
  let arr = x.map((words) =>
    words
      .toLowerCase()
      .split("")
      .map((v, i) => words.charCodeAt(i) - 96)
      .reduce((total, curr) => total + curr)
  );
  return x[arr.indexOf(arr.reduce((a, b) => Math.max(a, b), -Infinity))];
}
