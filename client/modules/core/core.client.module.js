(function(){
	'use strict';

	var config = function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: '/modules/core/home.client.view.html'
			});
	};

	angular.module('core', ['ui.router', 'hyper-resource'])
		.config(['$stateProvider', '$urlRouterProvider', config]);
}());