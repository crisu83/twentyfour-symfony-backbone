
"use strict"; // set ECMAScript 5 strict mode

require.config({
    baseUrl: 'js',
	paths: {
        // app paths
        app: 'twentyfour/App',
        collections: 'twentyfour/collections',
        models: 'twentyfour/models',
        views: 'twentyfour/views',
        templates: '../templates',
        // libraries
		jquery: 'lib/jquery/jquery',
		underscore: 'lib/underscore/underscore',
		backbone: 'lib/backbone/backbone',
		marionette: 'lib/backbone/backbone.marionette',
		bootstrap: 'lib/bootstrap/bootstrap',
        // Non-AMD libraries
        memento: 'lib/backbone/backbone.memento',
        twig: 'lib/twig/twig',
        json: 'lib/json/json2'
	},
	shim: {
        app: {
            deps: ['marionette', 'memento', 'bootstrap']
        },
		backbone: {
			deps: ['underscore', 'jquery']
		},
		marionette: {
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
	'app',
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