define([
    'backbone',
    'views/ActivityView',
    'text!templates/Activity/activity-collection.html.twig'
], function(Backbone, ActivityView, template) {
    /**
     * Activity model class.
     * @author Christoffer Niska <ChristofferNiska@gmail.com>
     * @class twentyfour.models.Activity
     * @extends Backbone.Model
     */
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