define([
	'jquery',
	'underscore',
	'backbone',
    'twig',
	'app/Router',
    'app/TwigTemplateCache',
    'app/TwigRenderer',
    'config',
    'text!templates/angry-cats.twig',
    'text!templates/angry-cat.twig',
], function($, _, Backbone, Twig, Router, TwigTemplateCache, TwigRenderer, config, angryCatsTemplate, angryCatTemplate){
	var App = new Backbone.Marionette.Application;

    // Override classes.
    Backbone.Marionette.Renderer = new TwigRenderer;
    Backbone.Marionette.TemplateCache.prototype = new TwigTemplateCache;

    AngryCat = Backbone.Model.extend({});

    AngryCats = Backbone.Collection.extend({
        model: AngryCat
    });

    AngryCatView = Backbone.Marionette.ItemView.extend({
        template: angryCatTemplate,
        tagName: 'tr',
        className: 'angry_cat'
    });

    AngryCatsView = Backbone.Marionette.CompositeView.extend({
        tagName: 'table',
        id: 'angry_cats',
        className: 'table-striped table-bordered',
        template: angryCatsTemplate,
        itemView: AngryCatView,
        appendHtml: function(collectionView, itemView, index) {
            collectionView.$('tbody').append(itemView.el);
        }
    });

    App.addRegions({
       mainRegion: '#twig-template-test'
    });

	App.addInitializer(function(options) {
		new Router();
		Backbone.history.start();

        var angryCatsView = new AngryCatsView({
            collection: new AngryCats([
                new AngryCat({ name: 'Wet Cat'}),
                new AngryCat({ name: 'Bitey Cat'}),
                new AngryCat({ name: 'Surprised Cat'})
            ])
        });

        App.mainRegion.show(angryCatsView);
	});

	return App;
});