module.exports = function(app){

var fs = require('fs');
	app.get('/contact', function(req, res) {
		fs.readFile('./data/contact.json', 'utf8', function (err, data) {
				if (err) {
					console.log(err);
				}
				var obj = JSON.parse(data);
				console.log(obj.pageTitle);
				res.render('contact.ejs', {obj : obj});
			});
	});
}
