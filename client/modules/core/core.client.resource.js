(function(){
	'use strict';

	var coreService = function(HyperResource){
		return HyperResource('/');
	};

	angular.module('core')
		.factory('Core', ['HyperResource', coreService]);
}());