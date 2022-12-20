require('babel-register');
require('babel-polyfill');
const HDWalletProvider = require("@truffle/hdwallet-provider");

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    goerli: {
      host: "localhost",
      provider: () => new HDWalletProvider("raise where way leaf slot demand pistol common man special mouse lucky", `wss://goerli.infura.io/ws/v3/8bb76c772fc143a9a4f0137d51cf82ee`),
      port: 8545,
      network_id: "5",
      gas: 6700000,
      gasPrice: 20000000000,
    }
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
