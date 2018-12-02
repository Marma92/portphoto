module.exports = function(app){


	var fs = require('fs');
	app.get('/me', function(req, res) {
		fs.readFile('./data/me.json', 'utf8', function (err, data) {
	      if (err) {
	        console.log(err);
	      }
	      var obj = JSON.parse(data);
				console.log(obj.pageTitle);
	      res.render('me.ejs', {obj : obj}); // load the template.ejs file
	    });
	});
}
