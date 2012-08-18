define([
	'jquery',
	'underscore',
	'backbone',
    'marionette'
], function($, _, Backbone, Marionette) {
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