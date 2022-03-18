//https://eth-ropsten.alchemyapi.io/v2/BkVT5h1p96ZIrP42tAhjYoCrg1ylFSQ0

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/BkVT5h1p96ZIrP42tAhjYoCrg1ylFSQ0",
      accounts: [
        "863d91bf5562b3348f9fced70e083ef19f35ffad06e1dfdbce6e7ebdb1f7d306",
      ],
    },
  },
};
