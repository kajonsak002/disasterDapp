const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const RegisterModule = buildModule("RegisterModule", (m) => {
  const register = m.contract("RegisterDisaster");

  return { register };
});

module.exports = RegisterModule;
