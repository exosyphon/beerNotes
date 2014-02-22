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
    init: function () {
        if (!Backbone.History.started) {
            new BeerNotes.Routers.BeersRouter();
            Backbone.history.start();
        } else {
            var hash = window.location.hash;
            new BeerNotes.Routers.BeersRouter();
            Backbone.history.stop();
            window.location.hash = hash;
            Backbone.history.start();
        }
    }
}
;
