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
				Movies.Get({_id:id}).then(function(movie){
					console.log(movie);
					ctrl.movie = movie;
				});
			}
		};

		ctrl.addMovie = function(){
			Movies.Action('create', ctrl.movie).then(function(movie){
				$state.go('movieList');
			});
		};

		return ctrl;
	};

	angular.module('movie')
		.controller('MovieCtrl', ['$state', '$stateParams', 'Movies', movieController]);
}());