const i = Deno.readTextFileSync("./01/input.txt");

const input = i.split("\n");
let sum = 0;

const getCalibration = (s: string) => {
  let firstDigit = "";
  let lastDigit = "";

  s.split("").forEach((char) => {
    if (!isNaN(parseInt(char))) {
      if (firstDigit === "") firstDigit = char;

      lastDigit = char;
    }
  });

  return Number(firstDigit + lastDigit);
};

input.forEach((i) => {
  sum += getCalibration(i.trim());
});

console.log(sum);
