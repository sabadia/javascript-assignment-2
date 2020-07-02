const numArr = [65, 36, 84, 24, 24, 84, 21, 21, 21, 65, 21, 28, 10, 10, 24];

function ExtendedNumber(num = null, count = null) {
  this.num = num;
  this.count = count;
}
const unique = [];

numArr.forEach((num) => {
  const uniqueIndex = unique.findIndex(
    (extendedNumber) =>
      extendedNumber && extendedNumber.num && extendedNumber.num === num
  );
  if (uniqueIndex === -1) {
    unique.push(new ExtendedNumber(num, 1));
  } else {
    unique[uniqueIndex].count += 1;
  }
});

unique.forEach((extendedNumber) => {
  const ext = extendedNumber.count == 1 ? "time" : "times";
  console.log(`${extendedNumber.num} - ${extendedNumber.count} ${ext}`);
});
