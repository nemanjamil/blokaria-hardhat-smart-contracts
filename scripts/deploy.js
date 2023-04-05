// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');
  const NFT = await hre.ethers.getContractFactory("BCNFT");
  const nft = await NFT.deploy();

  await nft.deployed();

  console.log("NFT deployed to:", nft.address);

  // const Token = await hre.ethers.getContractFactory("BCToken");

  // const token = await Token.deploy(nft.address, "0xd99d1c33f9fc3444f8101754abc46c52416550d1", "0x4dbf253521e8e8080282c964975f3afb7f87cece", 1643500800);

  // await token.deployed();
  // console.log("BCToken deployed to:", token.address);
  // We get the contract to deploy


  const Marketplace = await hre.ethers.getContractFactory(
    "BCNFTMarketplace"
  );
  const accounts = await hre.ethers.getSigners();

  const marketplace = await Marketplace.deploy(
    "0xc7e2E80cEE25b7E5672aCe8ab1aE456004635b65",
    "0xae13d989dac2f0debff460ac112a837c89baa7cd",
    accounts[0].address,
    "0x71cfcA529C86Be01c1204389657369114b3B598e",
    "0xf9c9163c1870ca7ab8a6fb869cd938fb266cebb0"
  );

  await marketplace.deployed();
  console.log("Marketplace deployed to:", marketplace.address);
  console.log("AdminRecovery:", accounts[0].address);

  // await hre.run("verify:verify", {
  //   address: marketplace.address,
  //   constructorArguments: [
  //     "0xc7e2E80cEE25b7E5672aCe8ab1aE456004635b65",
  //     "0xae13d989dac2f0debff460ac112a837c89baa7cd",
  //     accounts[0].address,
  //     "0x71cfcA529C86Be01c1204389657369114b3B598e",
  //     "0xf9c9163c1870ca7ab8a6fb869cd938fb266cebb0"
  //   ],
  //   contract: "contracts/BCNFTMarketplace.sol:BCNFTMarketplace",
  // });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
