const convertTimeFormat = (timeString = "") => {
  let timeStringArr = timeString.split(":");
  timeStringArr = timeStringArr.concat(timeStringArr.pop().split(" "));
  if (timeStringArr[timeStringArr.length - 1].toLowerCase() === "am") {
    return `${timeStringArr[0]}:${timeStringArr[1]}:${timeStringArr[2]}`;
  } else if (timeStringArr[timeStringArr.length - 1].toLowerCase() === "pm") {
    return `${Number(timeStringArr[0]) + 12}:${timeStringArr[1]}:${
      timeStringArr[2]
    }`;
  } else {
    return Number(timeStringArr[0]) > 12
      ? `${Number(timeStringArr[0]) % 12}:${timeStringArr[1]}:${
          timeStringArr[2]
        } PM`
      : `${timeStringArr[0]}:${timeStringArr[1]}:${timeStringArr[2]} AM`;
  }
};
const currentDate = new Date();
currentTime = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;

const convartedTime = convertTimeFormat(currentTime);

console.log(convartedTime);
console.log(convertTimeFormat(convartedTime));
