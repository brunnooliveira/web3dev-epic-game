// Rinkeby
const CONTRACT_ADDRESS = "0x513FD5D30a1dF81dE490FC2c2846047F586FB09f";

// Goerli
// const CONTRACT_ADDRESS = "0xb239D8B4f868a5b0C263C52cB6cc0CBC5c1cddae";

const CHAIN_ID = "4" // 4 - Rinkeby | 5 - Goerli
const CHAIN_NAME = "Rinkeby"

const transformCharacterData = (characterData) => {
  return {
    name: characterData.name,
    imageURI: characterData.imageURI,
    hp: characterData.hp.toNumber(),
    maxHp: characterData.maxHp.toNumber(),
    attackDamage: characterData.attackDamage.toNumber(),
  };
};

export { CONTRACT_ADDRESS, CHAIN_ID, CHAIN_NAME, transformCharacterData };