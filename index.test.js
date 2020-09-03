const demo = require("./index");
const test = require("ava");

test("foo", (t) => {
	t.pass();
});

test("bar", (t) => {
	t.snapshot(demo([]));
	t.snapshot(demo([1, 2, null, undefined, 10, 100, "", "hello"]));
});
