
var getGenreId = function (genreName) {
	genreName = genreName.toLowerCase();
	var ret;
	switch (genreName) {
		case "action":
			ret = 28;
			break;
		case "adventure":
			ret = 12;
			break;
		case "animation":
			ret = 16;
			break;
		case "comedy":
			ret = 35;
			break;
		case "crime":
			ret = 80;
			break;
		case "documentary":
			ret = 99;
			break;
		case "drama":
			ret = 18;
			break;
		case "family":
			ret = 10751;
			break;
		case "fantasy":
			ret = 14;
			break;
		case "history":
			ret = 36;
			break;
		case "horror":
			ret = 27;
			break;
		case "music":
			ret = 10402;
			break;
		case "mystery":
			ret = 9648;
			break;
		case "romance":
			ret = 10749;
			break;
		case "science fiction":
			ret = 878;
			break;
		case "tv movie":
			ret = 10770;
			break;
		case "thriller":
			ret = 53;
			break;
		case "war":
			ret = 10752;
			break;
		case "western":
			ret = 37;
			break;
	}

	return ret;
}

module.exports = {
	getMovieByGenre: function (genre, callback) {
		var http = require("https");
		var query = "genre/" + getGenreId(genre)+"/movies";
		var tail = "&adult=false";
		var urlPath = "/3/" + query + "?api_key=7cfef515814114ce9c96181ca01394f3" + tail;
		console.log(urlPath);

		var options = {
			"method": "GET",
			"hostname": "api.themoviedb.org",
			"port": null,
			"path": urlPath,
			"headers": {}
		};

		var req = http.request(options, function (res) {
			var chunks = [];

			res.on("data", function (chunk) {
				chunks.push(chunk);
			});

			res.on("end", function () {
				var body = Buffer.concat(chunks);
				// console.log(body.toString());
				callback(JSON.parse(body.toString()));
				// console.log(body.toString());
			});
		});

		req.write("{}");
		req.end();

		// var app = require('express')();

		// app.post('https://api.themoviedb.org/3/genre/12/movies?api_key=7cfef515814114ce9c96181ca01394f3&language=en-US&include_adult=false&sort_by=created_at.asc', function (req, res) {
		// 	console.log(req.body);
		// 	callback(req.body);
		// 	res.end();
		// });
	}
}