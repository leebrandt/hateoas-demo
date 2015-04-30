(function(){
	'use strict';

	var config = function($stateProvider){
		$stateProvider
			.state('movieList',{
				url: '/movies',
				templateUrl: '/modules/movie/movie.list.client.view.html'
			})
			.state('movie',{
				url: '/movie/:movieId',
				templateUrl: '/modules/movie/movie.detail.client.view.html'
			})
			.state('movieAdd', {
				url: '/movie/add',
				templateUrl: '/modules/movie/movie.create.client.view.html'
			})
			.state('movieEdit', {
				url: '/movie/edit/:movieId',
				templateUrl: '/modules/movie/movie.edit.client.view.html'
			});
	};

	angular.module('movie', ['ui.router'])
		.config(['$stateProvider', config]);
}());