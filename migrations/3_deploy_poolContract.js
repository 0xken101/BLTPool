const { deployProxy } = require("@openzeppelin/truffle-upgrades");

const BLTPool = artifacts.require("BLTPool");

module.exports = async function (deployer) {
    await deployProxy(BLTPool, [`t`, `amount`], {
        deployer,
        initializer: "initialize",
    });
};
