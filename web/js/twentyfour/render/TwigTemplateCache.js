define([
	'underscore',
	'backbone',
	'twig',
	'marionette'
], function(_, Backbone, Twig) {
	return function() {
		/**
		 * Twig template cache class.
		 * @author Christoffer Niska <ChristofferNiska@gmail.com>
		 * @class twentyfour.TwigTemplateCache
		 * @extends Backbone.Marionette.TemplateCache
		 */
		return _.extend(Backbone.Marionette.TemplateCache.prototype, {
			/**
			 * @inheritDoc
			 */
			loadTemplate: function(template) {
				return template;
			},
			/**
			 * @inheritDoc
			 */
			compileTemplate: function(rawTemplate) {
				return Twig.twig({ data: rawTemplate });
			}
		});
	}
});