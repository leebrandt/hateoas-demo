'use strict';

var movieList = [{
		id:1,
		title: 'The Last Samurai',
		releaseYear: 2003,
		runTimeInMinutes:154,
		rating: 'R',
		description: 'An American hired to instruct the Japanese army in the ways of modern warfare soon learns to respec the samurai that he has been ordered to destroy.',
		director: 'Edward Zwick'
	},{
		id:2,
		title: 'Quills',
		releaseYear: 2000,
		runTimeInMinutes:124,
		rating: 'R',
		description: 'In a Napoleonic era insane asylum, an inmate, the irrepressible Marquis De Sade, fights a battle of wills against a tyrannically prudish doctor.',
		director: 'Philip Kaufman'		
	},{
		id:3,
		title: 'The Machinist',
		releaseYear: 2004,
		runTimeInMinutes:101,
		rating: 'R',
		description: 'An industrial worker who hasn\'t slept in a year begins to doubt his own sanity.',
		director: 'Brad Anderson'		
	},{
		id:4,
		title: 'The King\'s Speech',
		releaseYear: 2004,
		runTimeInMinutes:118,
		rating: 'R',
		description: 'The story of King George VI of the United Kingdom of Great Britain and Northern Ireland, his impromptu ascension to the throne and the speech therapist who helped the unsure monarch become worthy of it.',
		director: 'Tom Hooper'		
	}];

exports.movies = function(){
	return movieList;
};

exports.addMovie = function(movie){
	movie.id = movieList.length + 1;
	movieList.push(movie);
	return movie;
};