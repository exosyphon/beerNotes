BeerNotes.Collections.RecipesCollection = Backbone.Collection.extend({
    model: BeerNotes.Models.Recipe,
    initialize: function (options) {
        this.url = 'beers/' + options.beer_id + '/recipes';
    }
});
