module.exports = function(app){
	// =====================================
	// REALISATIONS PAGE                ====
	// =====================================
var fs = require('fs');
	app.get('/realisations', function(req, res) {
    fs.readFile('./data/realisations.json', 'utf8', function (err, data) {
        if (err) {
          console.log(err);
        }
        var obj = JSON.parse(data);
				console.log(obj.pageTitle);
        res.render('realisations.ejs', {obj : obj}); 
      });
	});
}
