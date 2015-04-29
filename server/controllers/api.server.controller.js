'use strict';
var mongoose = require('mongoose'),
		Movie = mongoose.model('Movie'),
		listDecorator = require('../models/decorators/siren/movies.server.decorator'),
		movieDecorator = require('../models/decorators/siren/movie.server.decorator'),
		_ = require('lodash');

exports.root = function(req,res){
	var rootJson = {
		class:'Application',
		properties:{
			name:'HATEOAS Demo Application',
			description: 'Demo application for HyperResource',
			version: '1.0',
			license: 'LGPL-3.0'
		},
		actions: [{
			name: 'create',
			href:'http://localhost:3000/api/movies',
			method: 'POST',
			title: 'Add Movie'
		}],
		links:[{
			rel: 'movies',
			href: 'http://localhost:3000/api/movies'
		}]
	};
	res.json(rootJson);
};

exports.movies = function(req,res){
	Movie.find().exec(function(err, movies){
		if (err) {
			return res.status(500).send({message: err});
		}
		return res.json(listDecorator.decorateMovies(movies));
	});
};

exports.movie = function(req,res){
	Movie.findById(req.params.id).exec(function(err, movie){
		if (err) {
			return res.status(500).send({message:err});
		}
		return res.json(movieDecorator.decorateMovie(movie));
	});
};

exports.addMovie = function(req,res){
	var movie = new Movie(req.body);
	movie.save(function(err) {
		if (err) {
			return res.status(500).send({message: err});
		}
		return res.json(movieDecorator.decorateMovie(movie));
	});
	
};