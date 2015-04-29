'use strict';

exports.decorateObject = function(object){
	return {
		'class': typeof object,
		'properties': object,
		
	};
};

exports.decorateList = function(objectList){
	return objectList.map(function(item){
		return this.decorateObject(item);
	});
};