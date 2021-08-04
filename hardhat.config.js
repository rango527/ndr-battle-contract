/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-truffle5");
require("@nomiclabs/hardhat-etherscan");
require('dotenv').config();

module.exports = {
  defaultNetwork: "rinkeby",
  networks: {
    hardhat: {
      forking: {
        url: "https://mainnet.infura.io/v3/f599c7aa0a0340eda3c8a96938c37434"
      }
    },
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/f599c7aa0a0340eda3c8a96938c37434",
    }
  },
  solidity: {
    version: "0.8.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  mocha: {
    timeout: 999999
  },
  etherscan: {
    apiKey: "12IKYJ1C97KRAW3CAYA1ND334J8XUQKRRU"
  }
};
