define([
    'underscore',
    'backbone',
    'twig'
], function(_, Backbone, Twig) {
    return function() {
        return _.extend(Backbone.Marionette.TemplateCache.prototype, {
            loadTemplate: function(template) {
                return template;
            },
            compileTemplate: function(rawTemplate) {
                return Twig.twig({ data: rawTemplate });
            }
        });
    }
});