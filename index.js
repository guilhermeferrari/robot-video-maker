const readline = require("readline-sync");
const trends = require("./trends");

function start() {
	const content = {};

	content.searchTerm = askAndReturnSearchTerm();
	content.prefix = askAndReturnPrefix();

	function askAndReturnSearchTerm() {
		return readline.question("Type a Wikipedia search term: ");
	}

	function askAndReturnPrefix() {
		const prefixes = ["Who is", "What is", "The History of"];
		const selectedPrefixIndex = readline.keyInSelect(
			prefixes,
			"Choose one option"
		);
		const selectedPrefixText = prefixes[selectedPrefixIndex];

		return selectedPrefixText;
	}

	console.log(content);
}

//start();
//trends.gTrends();
