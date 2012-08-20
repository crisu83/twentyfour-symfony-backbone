define([
    'underscore',
    'backbone',
    '../core/App',
    '../collections/ActivityCollection',
    '../views/ActivityListView',
	'subroute'
], function(_, Backbone, App, ActivityCollection, ActivityListView) {
    /**
     * Activity route class.
     * @author Christoffer Niska <ChristofferNiska@gmail.com>
     * @class twentyfour.routers.ActivityRoute
     * @extends Backbone.SubRoute
     */
    return Backbone.SubRoute.extend({
        routes: {
            "list": "listAction"
        },
        /**
         * Displays a list of all activities.
         */
		listAction: function() {
            var activities = new ActivityCollection();

            activities.fetch({
                success: function(collection, response) {
                    var activityListView = new ActivityListView({
                        collection: collection
                    });

                    App.mainRegion.show(activityListView);
                }
            });
        }
    });
});