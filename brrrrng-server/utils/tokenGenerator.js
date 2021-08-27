const config = require("../config/key");
const jwt = require("jsonwebtoken");

const genAccessToken = (userData) =>
  jwt.sign(userData, config.accessSecret, {
    expiresIn: "1h",
  });

const genRefreshToken = (userData) =>
  jwt.sign(userData, config.refreshSecret, {
    expiresIn: "2h",
  });

module.exports = { genAccessToken, genRefreshToken };
