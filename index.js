const readline = require("readline-sync");
const trends = require("./trends");
const robots = {
	input: require("./robots/input.js"),
	text: require("./robots/text.js"),
	state: require("./robots/state.js")
};

async function start() {
	robots.input();
	await robots.text();

	const content = robots.state.load();
	console.dir(content, { depth: null });
}

start();
//trends.gTrends();
