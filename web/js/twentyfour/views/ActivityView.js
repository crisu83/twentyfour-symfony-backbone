define([
    'backbone',
    '../core/App',
    'text!templates/Activity/item.html.twig',
	'marionette'
], function(Backbone, App, template) {
    /**
     * Activity view class.
     * @author Christoffer Niska <ChristofferNiska@gmail.com>
     * @class twentyfour.views.ActivityView
     * @extends Backbone.Marionette.ItemView
     */
    return Backbone.Marionette.ItemView.extend({
        template: template,
        tagName: 'tr',
        className: 'entry',
        events: {
            'click .rank-up': 'rankUp',
            'click .rank-down': 'rankDown'
        },
        /**
         * @inheritDoc
         */
        initialize: function() {
            this.model.on('change', this.render);
        },
        rankUp: function(event){
            App.vent.trigger("rank:up", this.model);
            event.preventDefault();
        },
        rankDown: function(event){
            App.vent.trigger("rank:down", this.model);
            event.preventDefault();
        }
    });
});