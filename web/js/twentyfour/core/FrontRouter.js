define([
	'underscore',
	'backbone',
    '../routes/ActivityRoute'
], function(_, Backbone, ActivityRoute) {
    /**
     * Front router class.
     * @author Christoffer Niska <ChristofferNiska@gmail.com>
     * @class twentyfour.routers.FrontRouter
     * @extends Backbone.Router
     */
	return Backbone.Router.extend({
        routes: {
			"activities/*subroute": "activities"
		},
		activities: function() {
            new ActivityRoute("activities/");
        }
	});
});