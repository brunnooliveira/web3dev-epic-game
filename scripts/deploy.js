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
    [100, 50, 25], // Attack damage values
		"Carlos Alberto",
		"https://i.imgur.com/39IjDvE.jpg",
		10000,
		50
  );
  await gameContract.deployed();
  console.log("Contrato deployado no endereço:", gameContract.address);

  let txn;
  // Só temos 3 personagens.
  // Uma NFT com personagem no index 2 da nossa array.
  txn = await gameContract.mintCharacterNFT(2);
  await txn.wait();

  txn = await gameContract.attackBoss();
  await txn.wait();

  txn = await gameContract.attackBoss();
  await txn.wait();

  console.log("Done!");
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