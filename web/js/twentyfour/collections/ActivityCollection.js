define([
    'underscore',
    'backbone',
    'app',
    'models/Activity'
], function(_, Backbone, App, Activity) {
    /**
     * Activity collection class.
     * @author Christoffer Niska <ChristofferNiska@gmail.com>
     * @class twentyfour.collections.ActivityCollection
     * @extends Backbone.Collection
     */
    return Backbone.Collection.extend({
        model: Activity,
        /**
         * @inheritDoc
         */
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
        /**
         * @inheritDoc
         */
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