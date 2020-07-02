const numArr = [86, 17, 39, 7, 47, 95, 65, 14, 84, 81, 4, 75, 36, 72, 61];

let largest = -Infinity;
let secondLargest = -Infinity;
let smallest = Infinity;
let secondSmallest = Infinity;

numArr.forEach((num) => {
  if (num > secondLargest) {
    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num < largest) {
      secondLargest = num;
    }
  }
  if (num < secondSmallest) {
    if (num < smallest) {
      secondSmallest = smallest;
      smallest = num;
    } else if (num > smallest) {
      secondSmallest = num;
    }
  }
});
console.log(
  `Second Largest: ${secondLargest}\nSecond Smallest ${secondSmallest}`
);
