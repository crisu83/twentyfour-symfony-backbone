define([
    'underscore',
    'backbone',
    'twentyfour/App',
    'models/Entry'
], function(_, Backbone, App, Entry) {
    return Backbone.Collection.extend({
        model: Entry,
        initialize: function(models) {
            var rank = 1;
            _.each(models, function(model) {
               model.set('rank', rank++);
            });

            var that = this;

            App.vent.on('rank:up', function(model) {
                if (model.get('rank') === 1) {
                    return true;
                }
                that.rankUp(model);
                that.sort();
            });

            App.vent.on('rank:down', function(model) {
                if (model.get('rank') === that.size) {
                    return true;
                }
                that.rankDown(model);
                that.sort();
            });
        },
        comparator: function(model) {
            return model.get('rank');
        },
        rankUp: function(model) {
            var rank = model.get('rank') - 1,
                other = this.at(rank - 1);

            model.rankUp();
            other.rankDown();
        },
        rankDown: function(model) {
            var rank = model.get('rank') + 1,
                other = this.at(rank - 1);

            model.rankDown();
            other.rankUp();
        }
    })
});