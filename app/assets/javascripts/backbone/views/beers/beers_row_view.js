BeerNotes.Views.BeersRowView = Backbone.View.extend(
    {
        tagName: 'tbody',
        template: JST["backbone/templates/beers/beers_row_view"],
        events: {
            'click .remove_beer': 'removeBeer',
            'click .go_recipes': 'goToRecipes'
        },

        initialize: function (options) {
            this.parentView = options.parentView;
            this.recipes = new BeerNotes.Collections.RecipesCollection({beer_id: this.model.id});
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },

        removeBeer: function () {
            this.model.destroy();
            this.remove();
        },

        goToRecipes: function () {
            this.recipesView = new BeerNotes.Views.RecipesView({collection: this.recipes, parentView: this.parentView});
            this.recipes.fetch().done(this.recipesView.render);
        }
    });