define([
    'underscore',
    'backbone',
    './ActivityView',
    'text!templates/Activity/list.html.twig',
	'marionette'
], function(_, Backbone, ActivityView, template) {
    /**
     * Activity list view class.
     * @author Christoffer Niska <ChristofferNiska@gmail.com>
     * @class twentyfour.views.ActivityListView
     * @extends Backbone.Marionette.CompositeView
     */
    return Backbone.Marionette.CompositeView.extend({
        tagName: 'table',
        id: 'entries',
        className: 'table table-striped table-bordered',
        template: template,
        itemView: ActivityView,
        /**
         * @inheritDoc
         */
        appendHtml: function(collectionView, itemView, index) {
            collectionView.$('tbody').append(itemView.el);
        }
    });
});