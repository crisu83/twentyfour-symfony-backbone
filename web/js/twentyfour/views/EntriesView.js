define([
    'backbone',
    'views/EntryView',
    'text!templates/angry-cats.twig'
], function(Backbone, EntryView, template) {
    return Backbone.Marionette.CompositeView.extend({
        tagName: 'table',
        id: 'entries',
        className: 'table-striped table-bordered',
        template: template,
        itemView: EntryView,
        appendHtml: function(collectionView, itemView, index) {
            collectionView.$('tbody').append(itemView.el);
        }
    });
});