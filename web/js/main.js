
"use strict"; // set ECMAScript 5 strict mode

require.config({
    baseUrl: 'js',
	paths: {
        // app paths
        collections: 'twentyfour/collections',
        models: 'twentyfour/models',
        views: 'twentyfour/views',
        templates: '../templates',
        // libraries
		jquery: 'lib/jquery/jquery',
		underscore: 'lib/underscore/underscore',
		backbone: 'lib/backbone/backbone',
		marionette: 'lib/backbone/backbone.marionette',
        twig: 'lib/twig/twig.module',
		bootstrap: 'lib/bootstrap/bootstrap',
		json: 'lib/json/json2.module'
	},
	shim: {
        app: {
            deps: ['marionette', 'bootstrap'],
            exports: 'App'
        },
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		},
		marionette: {
			deps: ['backbone']
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
	'twentyfour/App',
    'collections/Entries',
    'models/Entry',
    'views/EntriesView'
], function(App, Entries, Entry, EntriesView){

    App.addInitializer(function(options) {
        var entriesView = new EntriesView({
            collection: new Entries([
                new Entry({ title: 'Research', duration: 2 }),
                new Entry({ title: 'Planning', duration: 4 }),
                new Entry({ title: 'Development', duration: 8 }),
                new Entry({ title: 'Testing', duration: 4 })
            ])
        });

        App.mainRegion.show(entriesView);
    });

    // application options
    var options = {
    };

    App.start(options);

    console.log('Wohoo! App started.');

});