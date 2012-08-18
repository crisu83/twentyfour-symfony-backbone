define([
    'backbone',
    'text!templates/angry-cat.twig'
], function(Backbone, template) {
    return Backbone.Marionette.ItemView.extend({
        template: template,
        tagName: 'tr',
        className: 'angry_cat'
    });
});