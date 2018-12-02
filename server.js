var express   = require('express');
var app       = express();
var port      = process.env.PORT || 8080;
var morgan    = require('morgan');



app.use('/public/imgs', express.static('imgs'));
app.use('/public/css', express.static('css'));
app.use(morgan('dev'));
app.set('view engine', 'ejs');

// routes ======================================================================
require('./app/routes.js')(app);

app.listen(port);
console.log('The magic happens on port ' + port);
