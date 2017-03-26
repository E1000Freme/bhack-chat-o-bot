
module.exports = {
	getMovie: function (param, callback) {
		var http = require("https");

		var options = {
			"method": "GET",
			"hostname": "api.themoviedb.org",
			"port": null,
			"path": "/3/genre/12/movies?sort_by=created_at.asc&include_adult=false&language=en-US&api_key=7cfef515814114ce9c96181ca01394f3",
			"headers": {}
		};

		var req = http.request(options, function (res) {
			var chunks = [];

			res.on("data", function (chunk) {
				chunks.push(chunk);
			});

			res.on("end", function () {
				var body = Buffer.concat(chunks);
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