'use strict';
var movieDecorator = require('./movie.server.decorator'),
		apiRoot = 'http://localhost:3000/api/';

exports.decorateMovies = function(movies){
	return {
		class: 'MovieList',
		properties: {
			itemCount: movies.length
		},
		entities: movies.map(function(movie){
				return movieDecorator.decorateMovie(movie);
			}),
		actions: [{
			name: 'create',
			title: 'Add Movie',
			href: apiRoot+'movies',
			method: 'POST'
		}],
		links:[{
			rel:'self',
			href: apiRoot + 'movies'
		},{
			rel:'root',
			href: apiRoot
		}]
	};
	


};