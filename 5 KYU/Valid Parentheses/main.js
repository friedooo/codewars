const validParentheses = (parens) => {
  let sum = 0;
  parens.split("").forEach((e) => {
    sum = e === "(" ? sum + 1 : sum - 1;
    if (sum < 0) {
      sum = undefined;
    }
  });
  return sum === 0;
};

let test = "())(";

console.log(validParentheses(test));
