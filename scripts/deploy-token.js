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

  //  const Utils = await hre.ethers.getContractFactory("Utils")
  //  const utils = await Utils.deploy()
  //  await utils.deployed()
  //  console.log("Utils deployed in ", utils.address)

  // const Token = await hre.ethers.getContractFactory("BCToken", {libraries: {
  //   Utils: utils.address
  // }});

  // const token = await Token.deploy("0xc6C2e224d99046878F2599c2857ef5630f8F55fB", "0xd99d1c33f9fc3444f8101754abc46c52416550d1", "0x4dbf253521e8e8080282c964975f3afb7f87cece", 1643500800);
  const Token = await hre.ethers.getContractFactory('GAMETOKEN')
  const token = await Token.deploy()

  await token.deployed()

  console.log('Token deployed to:', token.address)
  await hre.run('verify:verify', {
    address: token.address,
    constructorArguments: [],
    contract: 'contracts/GameTech.sol:GAMETOKEN',
  })
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
