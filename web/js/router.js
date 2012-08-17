define([
	'jquery',
	'underscore',
	'backbone',
	'app',
], function($, _, Backbone, App) {
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