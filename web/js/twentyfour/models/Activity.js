define([
    'underscore',
    'backbone'
], function(_, Backbone) {
    /**
     * Activity model class.
     * @author Christoffer Niska <ChristofferNiska@gmail.com>
     * @class twentyfour.models.Activity
     * @extends Backbone.Model
     */
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