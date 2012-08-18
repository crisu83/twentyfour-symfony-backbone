define([
    'backbone',
    'views/EntryView',
    'text!templates/Entry/entries.html.twig'
], function(Backbone, EntryView, template) {
    return Backbone.Marionette.CompositeView.extend({
        tagName: 'table',
        id: 'entries',
        className: 'table table-striped table-bordered',
        template: template,
        itemView: EntryView,
        appendHtml: function(collectionView, itemView, index) {
            collectionView.$('tbody').append(itemView.el);
        }
    });
});