// Imports the babel library to transpile our code
require("babel-core/register");

// Import our server code
// eslint-disable-next-line no-multi-assign
exports = module.exports = require("./app");
