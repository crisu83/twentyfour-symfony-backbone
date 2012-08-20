define([
	'underscore',
	'backbone',
	'../render/TwigTemplateCache',
	'../render/TwigRenderer',
	'config',
	'marionette'
], function(_, Backbone, TwigTemplateCache, TwigRenderer, config){
	/**
	 * Application class.
	 * @author Christoffer Niska <ChristofferNiska@gmail.com>
	 * @class twentyfour.App
	 * @extends Backbone.Marionette.Application
	 */
	var App = new Backbone.Marionette.Application;

	// default application config
	var defaults = {
		baseUrl: '/'
	};

	App.config = _.extend(defaults, config);

	// Override classes.
	Backbone.Marionette.Renderer = new TwigRenderer;
	Backbone.Marionette.TemplateCache.prototype = new TwigTemplateCache;

	App.addRegions({
		mainRegion: '#twig-test'
	});

	return App;
});