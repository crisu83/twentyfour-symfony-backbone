
"use strict"; // set ECMAScript 5 strict mode

require.config({
    baseUrl: 'js',
	paths: {
        // templates
        templates: '../templates',
        // libraries
		jquery: 'lib/jquery/jquery',
		underscore: 'lib/underscore/underscore',
		backbone: 'lib/backbone/backbone',
		marionette: 'lib/backbone/backbone.marionette',
        subroute: 'lib/backbone/backbone.subroute',
		bootstrap: 'lib/bootstrap/bootstrap',
        // non-AMD libraries
        memento: 'lib/backbone/backbone.memento',
        twig: 'lib/twig/twig',
        json: 'lib/json/json2'
	},
	shim: {
		backbone: {
			deps: ['underscore', 'jquery']
		},
		marionette: {
			deps: ['backbone']
		},
        subroute: {
            deps: ['backbone']
        },
        memento: {
            deps: ['backbone']
        },
		bootstrap: {
			deps: ['jquery']
		},
        twig: {
            exports: 'Twig'
        },
		json: {
			exports: 'JSON'
		}
	}
});

require([
    'backbone',
	'twentyfour/core/App',
    'twentyfour/core/FrontRouter'
], function(Backbone, App, FrontRouter){

	// application options
	var options = {

	};

    App.addInitializer(function(options) {
        new FrontRouter();
		window.location.hash = "activities/list";
		Backbone.history.start();
	});

    App.start(options);

    console.log('Wohoo! App started.');

});