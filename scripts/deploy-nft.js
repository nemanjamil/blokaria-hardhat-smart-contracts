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
  await hre.run('compile');
  const NFT = await hre.ethers.getContractFactory('Crypto528') //notpad please 
  const nft = await NFT.deploy()

  await nft.deployed()

  // npx hardhat run .\scripts\deploy-nft.js --network testnet

  // console.log('NFT deployed to:', nft.address) // Seems avax testnet is busy. It 
  // await hre.run('verify:verify', {
  //   address: '0x0e8c26d80497a94C88EbedE8B7fAA30B241DB098',
  //   constructorArguments: [],
  //   contract: 'contracts/Crypto528.sol:Crypto528', // do you have test avax? yes what is the private key of t
  // })
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
