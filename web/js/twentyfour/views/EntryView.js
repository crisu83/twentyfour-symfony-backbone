define([
    'backbone',
    'twentyfour/app',
    'text!templates/Entry/entry.html.twig'
], function(Backbone, App, template) {
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