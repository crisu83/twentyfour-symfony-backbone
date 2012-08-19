define([
    'underscore',
    'backbone'
], function(_, Backbone) {
    return function() {
        /**
         * Twig renderer class.
         * @author Christoffer Niska <ChristofferNiska@gmail.com>
         * @class twentyfour.TwigRenderer
         * @extends Backbone.Marionette.Renderer
         */
        return _.extend(Backbone.Marionette.Renderer, {
            /**
             * @inheritDoc
             */
            render: function(template, data) {
                var templateFunc = typeof template === 'function' ? template : Backbone.Marionette.TemplateCache.get(template);
                return templateFunc.render(data);
            }
        });
    }
});