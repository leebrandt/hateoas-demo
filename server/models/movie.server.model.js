'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
		Schema = mongoose.Schema;

/**
 * Movie Schema
 */
var MovieSchema = new Schema({
	title: {
		type: String,
		default: '',
		required: 'Please fill movie title.',
		trim: true
	},
	releaseYear: {
		type: Number,
		required: 'Please enter release year.'
	},
	runTimeInMinutes:{
		type: Number
	},
	rating: {
		type: String,
		trim: true
	},
	description: {
		type: String,
		trim: true
	},
	director: {
		type: String,
		trim: true
	}

});

mongoose.model('Movie', MovieSchema);