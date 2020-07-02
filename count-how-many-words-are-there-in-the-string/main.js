const str = "  a   brown fox jumps over   the lazy   dog  ";

const countWord = (string = "") => {
  return string.trim().replace(/\s+/g, " ").split(" ").length;
};

console.log(`Number of words in the string are ${countWord(str)}.`);
