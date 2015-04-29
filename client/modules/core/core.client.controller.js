(function(){
	'use strict';

	var coreController = function($state, $stateParams, Core){
		var ctrl = this;

		ctrl.init = function(){
			Core.Get().then(function(site){
				ctrl.site = site;
			});
		};

		ctrl.hasLink = function(relName){
			if(ctrl.site && ctrl.site.links){
				return _.find(ctrl.site.links, {'rel':relName});
			}
		};
		ctrl.hasAction = function(name){
			if(ctrl.site && ctrl.site.actions){
				return _.find(ctrl.site.actions, {'name':name});
			}
		};	

		return ctrl;
	};

	angular.module('core')
		.controller('CoreCtrl', ['$state', '$stateParams', 'Core', coreController]);
}());