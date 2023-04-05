async function main() {
    const MyCryptoNFT = await hre.ethers.getContractFactory("MyCryptoNFT");
    const myCryptoNFT = await MyCryptoNFT.deploy();
    await myCryptoNFT.deployed();
    console.log("MyCryptoNFT deployed to:", myCryptoNFT.address);
}
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });