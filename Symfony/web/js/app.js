define([
	'jquery',
	'underscore',
	'backbone',
	'marionette',
	'router',
	'bootstrap',
	'json'
], function($, _, Backbone, Marionette, Router, JSON){
	var App = new Backbone.Marionette.Application;

	App.addInitializer(function(options) {
		new Router();
		Backbone.history.start();
	});

	return App;
});