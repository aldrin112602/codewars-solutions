function solution(str) {
  let arr = [];
  if (str.length <= 0) return arr;
  if (str.length % 2 !== 0) str += "_";
  str.split("").map((v, i) => {
    if (i % 2 != 0) arr.push(`${str.charAt(i - 1)}${str.charAt(i)}`);
  });
  return arr;
}
