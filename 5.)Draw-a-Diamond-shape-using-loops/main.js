const createDiamondShape = (size = 0) => {
  for (let index = (absIndex = 0); index < size + size - 1; index++) {
    absIndex = index / size < 1 ? index : absIndex - 1;
    for (let space = 0; space < size - absIndex - 1; space++) {
      process.stdout.write(" ");
    }
    for (let star = 0; star < absIndex * 2 + 1; star++) {
      process.stdout.write("*");
    }
    console.log();
  }
};

createDiamondShape(3);
