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
  await hre.run('compile')

  const Marketplace = await hre.ethers.getContractFactory(
    'Crypto528Marketplace',
  )
  const accounts = await hre.ethers.getSigners()

  //avalanche config

  // const marketplace = await Marketplace.deploy(
  //   '0x0e8c26d80497a94C88EbedE8B7fAA30B241DB098',
  //   '0x1d308089a2d1ced3f1ce36b1fcaf815b07217be3',
  //   accounts[0].address,
  //   '0xaf82969ecf299c1f1bb5e1d12ddacc9027431160',
  //   '0x82dcec6aa3c8bfe2c96d40d8805ee0da15708643',
  // )

  await hre.run('verify:verify', {
    address: '0x00815bC029338d70de72B3C2658985803dd652b5',
    constructorArguments: [
      '0x0e8c26d80497a94C88EbedE8B7fAA30B241DB098',
      '0xb4fbf271143f4fbf7b91a5ded31805e42b2208d6',
      accounts[0].address,
      '0x07865c6E87B9F70255377e024ace6630C1Eaa37F',
      '0x509Ee0d083DdF8AC028f2a56731412edD63223B9',
    ],
    contract: 'contracts/Marketplace.sol:Crypto528Marketplace',
  })

  //Goerli config

  // const marketplace = await Marketplace.deploy(
  //   '0x0e8c26d80497a94C88EbedE8B7fAA30B241DB098',
  //   '0xb4fbf271143f4fbf7b91a5ded31805e42b2208d6',
  //   accounts[0].address,
  //   '0x07865c6E87B9F70255377e024ace6630C1Eaa37F',
  //   '0x509Ee0d083DdF8AC028f2a56731412edD63223B9',
  // )

  // await marketplace.deployed()
  // console.log('Marketplace deployed to:', marketplace.address)
  // console.log('AdminRecovery:', accounts[0].address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
