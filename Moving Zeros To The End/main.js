const moveZeros = (arr) => {
  let zeroSum = 0;
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if ((arr[i] === 0) & (typeof arr[i] === "number")) {
      zeroSum += 1;
    } else {
      newArr.push(arr[i]);
    }
  }

  for (let i = 0; i < zeroSum; i += 1) {
    newArr.push(0);
  }

  return newArr;
};

let test = [false, 1, 0, 1, 2, 0, 1, 3, "a"];

console.log(moveZeros(test));
