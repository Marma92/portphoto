module.exports = function(app){
	// =====================================
	// TEMPLATE PAGE                ========
	// =====================================
var fs = require('fs');
	app.get('/template', function(req, res) {
    fs.readFile('./data/template.json', 'utf8', function (err, data) {
        if (err) {
          console.log(err);
        }
        var obj = JSON.parse(data);
				console.log(obj.pageTitle);
        res.render('template.ejs', {obj : obj}); // load the template.ejs file
      });
	});
}
