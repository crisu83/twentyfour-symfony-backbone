define([
    'backbone'
], function(Backbone) {
    return Backbone.Model.extend({
        defaults: {
            rank: 0
        },
        rankUp: function() {
            this.set({rank: this.get('rank') - 1});
        },
        rankDown: function() {
            this.set({rank: this.get('rank') + 1});

        }
    });
});