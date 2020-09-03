const { chunk, compact } = require("lodash");

const a = {};
module.exports = (arg = []) => chunk(compact(arg), 2);
