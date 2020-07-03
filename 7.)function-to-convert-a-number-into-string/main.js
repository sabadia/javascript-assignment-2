const zeroToNine = {
  "0": "zero",
  "1": "one",
  "2": "two",
  "3": "three",
  "4": "four",
  "5": "five",
  "6": "six",
  "7": "seven",
  "8": "eight",
  "9": "nine",
};

const tenToNinety = {
  "10": "ten",
  "11": "eleven",
  "12": "twelve",
  "13": "thirteen",
  "14": "fourteen",
  "15": "fifteen",
  "16": "sixteen",
  "17": "seventeen",
  "18": "eighteen",
  "19": "nineteen",
  "20": "twenty",
  "30": "thirty",
  "40": "forty",
  "50": "fifty",
  "60": "sixty",
  "70": "seventy",
  "80": "eighty",
  "90": "ninety",
};
const twentyToNinety = {
  "2": "twenty",
  "3": "thirty",
  "4": "forty",
  "5": "fifty",
  "6": "sixty",
  "7": "seventy",
  "8": "eighty",
  "9": "ninety",
};
const hundredTobillion = {
  "3": "hundred",
  "4": "thousand",
  "5": "thousand",
  "6": "thousand",
  "7": "million",
  "8": "million",
  "9": "million",
  "10": "billion",
  "11": "billion",
  "12": "billion",
};

const getOneToNinetyNine = (num = "") => {
  num = String(Number(num));
  if (num.length > 2) return null;
  const value = num.length === 1 ? zeroToNine[num] : tenToNinety[num];
  return value && value.length
    ? value
    : `${twentyToNinety[num[0]]} ${zeroToNine[num[1]]}`;
};

const getBeforeThousand = (num = "") => {
  num = String(Number(num));
  if (num.length > 3) return null;
  if (num.length === 3)
    return `${zeroToNine[num[0]] || ""} ${hundredTobillion[num.length] || ""} ${
      Number(num.substring(1, num.length)) !== 0
        ? getOneToNinetyNine(num.substring(1, num.length))
        : ""
    }`;
  else return getOneToNinetyNine(num);
};

const getBeforeMillion = (num = "") => {
  num = String(Number(num));
  if (num.length > 6) return null;
  if (num.length > 3) {
    return `${getBeforeThousand(num.substring(0, num.length - 3)) || ""} ${
      hundredTobillion[num.length] || ""
    } ${
      Number(num.substring(num.length - 3, num.length)) !== 0
        ? getBeforeThousand(num.substring(num.length - 3, num.length))
        : ""
    }`;
  } else {
    return getBeforeThousand(num);
  }
};
const getBeforebillion = (num = "") => {
  num = String(Number(num));
  if (num.length > 9) return null;
  if (num.length > 6) {
    return `${getBeforeMillion(num.substring(0, num.length - 6)) || ""} ${
      hundredTobillion[num.length] || ""
    } ${
      Number(num.substring(num.length - 6, num.length)) !== 0
        ? getBeforeMillion(num.substring(num.length - 6, num.length))
        : ""
    }`;
  } else {
    return getBeforeMillion(num);
  }
};

const convartFromNumberToStringRepresentation = (num = "") => {
  num = String(Number(num));
  if (num.length > 12) return null;
  if (num.length > 9) {
    return `${getBeforebillion(num.substring(0, num.length - 9)) || ""} ${
      hundredTobillion[num.length] || ""
    } ${
      Number(num.substring(num.length - 9, num.length)) !== 0
        ? getBeforebillion(num.substring(num.length - 9, num.length))
        : ""
    }`;
  } else {
    return getBeforebillion(num);
  }
};
console.log(convartFromNumberToStringRepresentation("91757889561"));
