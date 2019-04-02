const readline = require("readline-sync");
const trends = require("./trends");
const robots = {
	//	userInput : require('./robos/user-inputs.js'),
	text: require("./robots/text.js")
};

async function start() {
	const content = {};

	// content.searchTerm = askAndReturnSearchTerm();
	// content.prefix = askAndReturnPrefix();
	content.searchTerm = "Michael Jackson";
	content.prefix = 1;

	//	robots.userInput(content);
	await robots.text(content);

	function askAndReturnSearchTerm() {
		return readline.question("Type a Wikipedia search term: ");
	}

	function askAndReturnPrefix() {
		const prefixes = ["Who is", "What is", "The History of"];
		const selectedPrefixIndex = readline.keyInSelect(prefixes, "Choose one option");
		const selectedPrefixText = prefixes[selectedPrefixIndex];

		return selectedPrefixText;
	}

	console.log(content);
}

start();
//trends.gTrends();
