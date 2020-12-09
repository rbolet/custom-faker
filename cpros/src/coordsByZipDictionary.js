const caZipCoords = require("./caZIPCoords");

const zipCoordsObject = {};

caZipCoords.forEach((row) => {
  const { fields } = row;
  const { zip, latitude, longitude } = fields;
  zipCoordsObject = { [zip]: { latitude, longitude }, ...zipCoordsObject };
});

console.log(zipCoordsObject);
module.exports = zipCoordsObject;
