define([
    'backbone',
    'app',
    'text!templates/Activity/item.html.twig'
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