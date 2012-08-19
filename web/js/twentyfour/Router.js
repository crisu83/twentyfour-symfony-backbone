define([
	'jquery',
	'underscore',
	'backbone',
    'marionette'
], function($, _, Backbone, Marionette) {
    /**
     * Router class.
     * @author Christoffer Niska <ChristofferNiska@gmail.com>
     * @class twentyfour.Router
     * @extends Backbone.Marionette.AppRouter
     */
	return Backbone.Marionette.AppRouter.extend({
		appRoutes: {
		},
		routes : {
			"": "foo"
		},
		foo: function() {

		}
	});
});