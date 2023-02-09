function moveZeros(arr) {
  let countOfZero = 0;
  let newArr = arr.filter((element) => {
    if (element === 0) countOfZero++;
    return element !== 0;
  });
  for (let i = 0; i < countOfZero; i++) newArr.push(0);
  return newArr;
}
