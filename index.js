const { chunk, compact } = require("lodash");

const a = {};
const b = {};
const c = {};
const d = {};
module.exports = (arg = []) => chunk(compact(arg), 2);
