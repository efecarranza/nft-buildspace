require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.0",
  networks: {
  	rinkeby: {
  		url: 'https://rinkeby.infura.io/v3/d509fb5c95c04ae49799a35691d3d7bc',
  		accounts: ['6290649b75ae81a4c71ee01f93ee8ef6f8ba3e6d4876d061bcf584008525c189'],
  	},
  },
};
