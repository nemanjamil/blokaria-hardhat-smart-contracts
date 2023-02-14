// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require('hardhat')

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  const Marketplace = await hre.ethers.getContractFactory(
    'Crypto528Marketplace',
  )
  const accounts = await hre.ethers.getSigners()

  // const marketplace = await Marketplace.deploy(
  //   '0x6d3B31C6DA3069e6Db73BC725DE33495106dbe89',
  //   '0xb4fbf271143f4fbf7b91a5ded31805e42b2208d6',
  //   accounts[0].address,
  //   '0x07865c6E87B9F70255377e024ace6630C1Eaa37F',
  //   '0x509Ee0d083DdF8AC028f2a56731412edD63223B9',
  // )

  // await marketplace.deployed()
  // console.log('Marketplace deployed to:', marketplace.address)
  // console.log('AdminRecovery:', accounts[0].address)

  await hre.run('verify:verify', {
    address: '0x9a41D8283e0b78b693C5E75BC74984eDEB7F2121',
    constructorArguments: [
      '0x6d3B31C6DA3069e6Db73BC725DE33495106dbe89',
      '0xb4fbf271143f4fbf7b91a5ded31805e42b2208d6',
      accounts[0].address,
      '0x07865c6E87B9F70255377e024ace6630C1Eaa37F',
      '0x509Ee0d083DdF8AC028f2a56731412edD63223B9',
    ],
    contract: 'contracts/Marketplace.sol:Crypto528Marketplace',
  })
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
