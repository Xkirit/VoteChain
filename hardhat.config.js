require("@nomicfoundation/hardhat-ethers");
require('dotenv').config();

const { INFURA_PROJECT_ID, PRIVATE_KEY } = process.env;

module.exports = {
    solidity: "0.8.27",
    networks: {
        sepolia: {
            url: `https://sepolia.infura.io/v3/${INFURA_PROJECT_ID}`,
            accounts: [`0x${PRIVATE_KEY}`]
        }
    }
};