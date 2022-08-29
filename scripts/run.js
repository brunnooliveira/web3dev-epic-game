const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
  const gameContract = await gameContractFactory.deploy(
    ["Paulinho Gogó", "Tirulipa", "João Plenário"],
		[
			"https://i.imgur.com/NhVLp0U.jpg",
			"https://i.imgur.com/YzjG4Ie.jpg",
			"https://i.imgur.com/vvcbDYY.jpg",
		],
    [100, 200, 300], // HP values
    [100, 50, 25] // Attack damage values
  );
  await gameContract.deployed();
  console.log("Contrato implantado no endereço:", gameContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();