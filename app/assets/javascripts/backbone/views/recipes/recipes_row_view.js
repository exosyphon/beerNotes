BeerNotes.Views.RecipesRowView = Backbone.View.extend(
{
    tagName: 'tbody',
    template: JST["backbone/templates/recipes/recipes_row_view"],
    events: {
        'click .remove_recipe': 'removeRecipe',
        'click .edit': 'editRecipe',
        'click .go_to_ingredients': 'goToIngredients'
    },

    initialize: function(options) {
        this.parentView = options.parentView;
        this.ingredients = new BeerNotes.Collections.IngredientsCollection({beer_url: this.options.recipe_collection.url, recipe_id: this.model.id});
    },

    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },

    removeRecipe: function() {
        this.model.destroy();
        this.remove();
    },

    goToIngredients: function () {
        this.ingredientsView = new BeerNotes.Views.IngredientsView({collection: this.ingredients, parentView: this.parentView});
        this.ingredients.fetch().done(this.ingredientsView.render);
    },

    editRecipe: function() {
        this.parentView.trigger('open_edit', {model: this.model});
    }
});