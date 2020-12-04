const faker = require("faker/locale/en_US");
const californiaAddresses = require("./src/properAddressArray");

const randomAddress = {
  addressArray: californiaAddresses,
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
  return {
    business_name: faker.company.companyName(),
    type: "Technician",
    address: randomAddress.getUniqueAddress(),
  };
};
