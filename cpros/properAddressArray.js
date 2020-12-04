const addresses = require("./realCaAddresses");
const all = addresses.all;
let formatted = all.map((address) => address.replace(/\n/gm, " "));

formatted = formatted.map((address) => address.split(" "));

const streetIndicators = ["street", "st.", "avenue", "ave.", "court", "ct.", "drive", "dr.", "way"];
for (let i = 0; i < formatted.length; i++) {
  const split = formatted[i];
  const zip = split.pop();
  const state = split.pop();
  const streetNum = split.shift();

  let j = 0;
  let streetName = "";
  let soFar = [];
  while (j < formatted[i].length) {
    soFar = [...soFar, formatted[i][j]];
    if (streetIndicators.includes(formatted[i][j].toLowerCase())) {
      streetName = soFar.join(" ");
      soFar = [];
    }
    j++;
  }
  const city = soFar.join(" ").replace(/,/gm, "");

  formatted[i] = [...split, { street: `${streetNum} ${streetName}`, city, state, zip }];
  formatted[i] = formatted[i].pop();
}
console.log(formatted);
module.exports = formatted;
