//= require_self
//= require_tree ./templates
//= require_tree ./models
//= require_tree ./views
//= require_tree ./routers

window.BeerNotes = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function() {
        new BeerNotes.Routers.BeersRouter();
        Backbone.history.start();
    }
};
