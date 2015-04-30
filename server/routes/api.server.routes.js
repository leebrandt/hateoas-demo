'use strict';

module.exports = function(app){
	var api = require('../controllers/api.server.controller');
	app.route('/api/').get(api.root);
	app.route('/api/movies').get(api.movies);
	app.route('/api/movies').post(api.addMovie);
	app.route('/api/movies/:id').get(api.movie);
	app.route('/api/movies/:id').put(api.updateMovie);
};