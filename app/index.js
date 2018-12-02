module.exports = function(app){

var fs = require('fs');
	app.get('/', function(req, res) {
		fs.readFile('./data/index.json', 'utf8', function (err, data) {
				if (err) {
					console.log(err);
				}
				var obj = JSON.parse(data);
				console.log(obj.pageTitle);
				res.render('index.ejs', {obj : obj});
			});
	});
}
