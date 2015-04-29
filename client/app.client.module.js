(function(){
    'use strict';

    var config = function(HyperResourceProvider){
    	HyperResourceProvider.SetAppName('HATEOAS Demo');
    	HyperResourceProvider.SetApiRoot('http://localhost:3000/api/');
    	HyperResourceProvider.SetHypermediaType('Siren');
    };

    angular.module('demo', ['core', 'movie', 'hyper-resource'])
    	.config(['HyperResourceProvider', config]);
}());