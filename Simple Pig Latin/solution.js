function pigIt(str) {
  let arr = str.split(" ");
  let newArr = arr
    .map((word) => {
      if (word.length > 1 || !["?", "!"].includes(word))
        return `${word}${word[0]}ay`.split("").map((char) => char);
      return [word];
    })
    .map((element) => {
      if (element.length > 1)
        return element.map((char, i) => {
          if (element.length > 1 && i != 0) return char;
        });
      return element;
    })
    .map((element) => element.filter((item) => item != undefined).join(""));

  return newArr.join(" ");
}
