
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
    'collections/ActivityCollection',
    'models/Activity',
    'views/ActivityListView',
    'config'
], function(App, ActivityCollection, Activity, ActivityListView, config){

    $.ajax({
        url: config.baseUrl + 'activity/ajaxFindAll',
        dataType: 'json',
        success: function(data, textStatus, jqXHR) {
            var activities = [],
                item;

            for (item in data) {
                if (data.hasOwnProperty(item)) {
                    activities.push(new Activity(data[item]));
                }
            }

            var activitiesView = new ActivityListView({
                collection: new ActivityCollection(activities)
            });

            App.mainRegion.show(activitiesView);
        }
    });

    // application options
    var options = {
    };

    App.start(options);

    console.log('Wohoo! App started.');

});