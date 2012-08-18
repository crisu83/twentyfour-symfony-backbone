define([
    'underscore',
    'backbone'
], function(_, Backbone) {
    return function() {
        return _.extend(Backbone.Marionette.Renderer, {
            render: function(template, data) {
                var templateFunc = typeof template === 'function' ? template : Backbone.Marionette.TemplateCache.get(template);
                return templateFunc.render(data);
            }
        });
    }
});