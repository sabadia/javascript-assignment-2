const twoDArr = new Array(4).fill(null).map((_, index) => {
  return [index * 4 + 1, index * 4 + 2, index * 4 + 3, index * 4 + 4];
});
console.log(twoDArr, twoDArr[0][0], twoDArr[3][3]);
