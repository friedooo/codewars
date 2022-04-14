const pigIt = (str) => {
  return str
    .split(" ")
    .map((e) => {
      if ((e.charCodeAt() > 64) & (e.charCodeAt() < 123)) {
        let wordArr = e.split("");
        wordArr.push(wordArr.shift(), "a", "y");
        return wordArr.join("");
      }
      return e;
    })
    .join(" ");
};
