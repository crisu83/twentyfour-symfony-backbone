define([
	'jquery',
	'underscore',
	'backbone',
    'twig',
	'twentyfour/Router',
    'twentyfour/TwigTemplateCache',
    'twentyfour/TwigRenderer',
    'config'
], function($, _, Backbone, Twig, Router, TwigTemplateCache, TwigRenderer, config){
    /**
     * Application class.
     * @author Christoffer Niska <ChristofferNiska@gmail.com>
     * @class twentyfour.App
     * @extends Backbone.Marionette.Application
     */
	var App = new Backbone.Marionette.Application;

    // Override classes.
    Backbone.Marionette.Renderer = new TwigRenderer;
    Backbone.Marionette.TemplateCache.prototype = new TwigTemplateCache;

    App.addRegions({
       mainRegion: '#twig-test'
    });

	App.addInitializer(function(options) {
		new Router();
		Backbone.history.start();
    });

	return App;
});