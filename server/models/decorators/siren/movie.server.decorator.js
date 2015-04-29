'use strict';
var apiRoot = 'http://localhost:3000/api/';

exports.decorateMovie = function(movie){
	return {
		class:'Movie',
		properties: movie,
		actions: [{
			name: 'update',
			href:apiRoot+'movies/'+movie.id,
			method: 'PUT'
		},{
			name: 'delete',
			href: apiRoot+'movies/'+movie.id,
			method:'DEL'
		}],
		links: [{
			rel: 'self',
			href: apiRoot+'movies/' + movie.id
		},{
			rel:'parent',
			href:apiRoot+'movies'
		},{
			rel:'root',
			href:apiRoot
		}]
	};
}