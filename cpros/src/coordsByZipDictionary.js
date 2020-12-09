const caZipCoords = require("./caZIPCoords");

const zipCoordsObject = {};

caZipCoords.forEach((row) => {
  const { fields } = row;
  const { zip, latitude, longitude } = fields;
  zipCoordsObject[zip] = { latitude, longitude };
});

console.log(zipCoordsObject);
module.exports = zipCoordsObject;
