const googleTrends = require("google-trends-api");

function gTrends() {
	googleTrends
		.dailyTrends({ geo: "US" })
		.then(function(results) {
			respostaServidorEmJSON = JSON.parse(results);
			temp = respostaServidorEmJSON.trendingSearchesDays;
			console.log(
				"These results are awesome",
				respostaServidorEmJSON.default.trendingSearchesDays[0].trendingSearches
			);
		})
		.catch(function(err) {
			console.error("Oh no there was an error", err);
		});
}

// module.exports = { gTrends };
// or
module.exports.gTrends = gTrends;
