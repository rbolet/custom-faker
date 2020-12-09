const faker = require("faker/locale/en_US");
const californiaAddresses = require("./src/properAddressArray");
const coordsByZipDictionary = require("./src/coordsByZipDictionary");

const location = {
  addressArray: californiaAddresses,
  geolocationDictionary: coordsByZipDictionary,
  getUniqueLocation() {
    const address = this.getUniqueAddress();
    const { latitude, longitude } = this.geolocationDictionary[address.zip];
    const location = { address, geolocation: { latitude, longitude } };
    console.log("🚀 ~ file: data.js ~ line 13 ~ getUniqueLocation ~ location", location);

    return location;
  },
  getUniqueAddress() {
    array = this.addressArray;

    const index = this.getRandomIndex(array);
    return array.splice(index, 1)[0];
  },
  getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  },
};

module.exports = () => {
  const { address, geolocation } = getRandomLocation();
  return {
    business_name: faker.company.companyName(),
    type: "Technician",
    address,
    geolocation,
    details: {
      description: faker.lorem.paragraph(),
    },
  };
};
