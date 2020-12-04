const fs = require("fs");
const randomData = require("./cpros/data");

let data = [];
for (let i = 0; i < 100; i++) {
  data.push(randomData());
}
console.log(data);
