function sumPairs(ints, s) {
  let pairs = [],
    lastIndex = [];
  for (let i = 0; i < ints.length; i++) {
    for (let j = i; j < ints.length; j++) {
      if (ints[i] + ints[j] == s && i != j) {
        pairs.push([ints[i], ints[j]]);
        lastIndex.push(j);
      }
    }
  }
  return pairs[lastIndex.indexOf(Math.min(...lastIndex))] || undefined;
}
