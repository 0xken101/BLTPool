const { deployProxy } = require("@openzeppelin/truffle-upgrades");

const BLTToken = artifacts.require("BLTToken");

module.exports = async function (deployer) {
    await deployProxy(BLTToken, {
        deployer,
        initializer: "initialize",
    });
};
