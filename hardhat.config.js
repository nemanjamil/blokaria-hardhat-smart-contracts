require('@nomiclabs/hardhat-waffle')
require('@nomiclabs/hardhat-etherscan')
require('dotenv').config()

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners()

  for (const account of accounts) {
    console.log(account.address)
  }
})

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: '0.8.4',
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {
      chainId: 43113,
    },
    testnet: {
      url: 'https://api.avax-test.network/ext/bc/C/rpc',
      chainId: 43113,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
    mainnet: {
      url: 'https://api.avax.network/ext/bc/C/rpc',
      gasPrice: 225000000000,
      chainId: 43114,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/vgHbC0ka5CkvUP40J47DTF2O1KrEcMMl',
      chainId: 5,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    }
  },
  // etherscan: {
  //   apiKey: {
  //     goerli: '4GP9FDN18RHWHXC1QPNZNARZ2QMQAQG77K'
  //   }
  // }
  // etherscan: {
  //   // Your API key for Etherscan
  //   // Obtain one at https://etherscan.io/
  //   // apiKey: "9NGICGXU5BJ648EWV9PB363C49YZGDVI6F"
  //   apiKey: "P1QGBG7GXN8I6QU4Z9CPABBJADXXH73NWY"
  // }
  etherscan: {
    apiKey: {
      avalancheFujiTestnet: 'QEP8WPU326XSK6ADTTWTSXNI54EWVYVMF6',
    },
  },
}
