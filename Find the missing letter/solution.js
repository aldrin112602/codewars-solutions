function findMissingLetter(array) {
  let charCodes = array.map((letter, i) => array.join("").charCodeAt(i) - 96);
  let first = charCodes[0],
    last = charCodes[charCodes.length - 1];
  let newArr = [];
  for (let i = first; i <= last; i++) newArr.push(i);
  let find;

  for (let j = 0; j < newArr.length; j++) {
    if (!charCodes.includes(newArr[j])) {
      find = newArr[j];
      break;
    }
  }
  return String.fromCharCode(find + 96);
}
