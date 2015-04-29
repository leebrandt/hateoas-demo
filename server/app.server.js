'use strict';

var express = require('express'),
		bodyParser = require('body-parser'),
		methodOverride = require('method-override'),
		mongoose = require('mongoose'),
		path = require('path'),
		chalk = require('chalk');

var app = express();

// Bootstrap db connection
var db = mongoose.connect('mongodb://localhost/hateoas-demo', function(err) {
	if (err) {
		console.error(chalk.red('Could not connect to MongoDB!'));
		console.log(chalk.red(err));
	}
});

require(path.join(__dirname + '/models/movie.server.model'));

//app.engine('server.view.html', 'ejs');
//app.set('view engine', 'server.view.html');
//app.set('views', './views');

// Request body parsing middleware should be above methodOverride
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());
app.use(methodOverride());

app.use(express.static(path.resolve('./client')));

app.get('/', function(req,res){
	res.sendFile(path.join(__dirname + '/views/layout.server.view.html'));
});

require(path.resolve('server/routes/api.server.routes'))(app);

// Start the app by listening on <port>
app.listen(3000);

// Expose app
exports = module.exports = app;

// Logging initialization
console.log('The magic is happening on port 3000');

