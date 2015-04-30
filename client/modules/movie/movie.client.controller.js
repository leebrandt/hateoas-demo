(function(){
	'use strict';

	var movieController = function($state, $stateParams, Movies){
		var ctrl = this;

		ctrl.loadMovies = function(){
			Movies.Get().then(function(movies){
				ctrl.movies = movies.entities.map(function(movie){
					return movie;
				});
			});
		};

		ctrl.loadMovie = function(){
			var id = $stateParams.movieId;
			if(id){
				Movies.Get({_id:id})
					.then(function(movie){
						ctrl.movie = movie.properties;
					});
			}
		};

		ctrl.addMovie = function(){
			Movies.Action('create', ctrl.movie)
				.then(function(movie){
					$state.go('movieList');
				});
		};

		ctrl.updateMovie = function(){
			Movies.Action('update', ctrl.movie, {_id:ctrl.movie._id})
				.then(function(movie){
					$state.go('movieList');
				});
		};

		return ctrl;
	};

	angular.module('movie')
		.controller('MovieCtrl', ['$state', '$stateParams', 'Movies', movieController]);
}());