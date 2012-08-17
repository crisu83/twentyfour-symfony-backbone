"use strict";

define.amd.jQuery = true;

require.config({
	paths: {
		jquery: 'lib/jquery/jquery',
		underscore: 'lib/underscore/underscore.require',
		backbone: 'lib/backbone/backbone.require',
		marionette: 'lib/backbone/backbone.marionette',
		bootstrap: 'lib/bootstrap/bootstrap',
		json: 'lib/json/json2.require'
	},
	shim: {
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		},
		marionette: {
			deps: ['backbone'],
			exports: 'Marionette'
		},
		bootstrap: {
			deps: ['jquery']
		},
		json: {
			exports: 'JSON'
		}
	}
});

require([
	'app'
], function(App){
	var options = {};

	App.start(options);

	console.log('Wohoo, app started.');
});