const { chunk, compact } = require("lodash");

const a = {};
const b = {};
module.exports = (arg = []) => chunk(compact(arg), 2);
