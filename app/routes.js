module.exports = function(app){
	require("./index")(app);
	require("./realisations")(app);
	require("./me")(app);
	require("./contact")(app);
	require("./template")(app);
	app.get('*', function(req, res){
  		res.render('404.ejs');
	});
}
