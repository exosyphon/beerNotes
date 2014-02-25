BeerNotes.Collections.IngredientsCollection = Backbone.Collection.extend({
    model: BeerNotes.Models.Ingredient,
    initialize: function (options) {
        this.url = options.beer_url + '/' + options.recipe_id + '/ingredients';
    }
});
