define([
    'backbone',
    'models/Entry'
], function(Backbone, Entry) {
    return Backbone.Collection.extend({
        model: Entry
    })
});