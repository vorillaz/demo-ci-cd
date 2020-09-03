const { chunk, compact } = require("lodash");

module.exports = (arg = []) => chunk(compact(arg), 2);
