(function(){
	'use strict';

	var movieResource = function(HyperResource){
		return HyperResource('/movies/:_id');
	};

	angular.module('movie')
		.factory('Movies', ['HyperResource', movieResource]);
}());