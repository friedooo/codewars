const spinWords = (string) => {
  return (arr = string
    .split(" ")
    .map((e) => {
      return e.length > 4 ? e.split("").reverse().join("") : e;
    })
    .join(" "));
};
