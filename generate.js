const fs = require("fs");
const randomData = require("./cpros/data");

let data = [];
for (let i = 0; i < 100; i++) {
  data.push(randomData());
}

fs.writeFile(__dirname + "/results/cpros.json", JSON.stringify(data), function () {
  console.log("bigDataSet generated successfully!");
});
