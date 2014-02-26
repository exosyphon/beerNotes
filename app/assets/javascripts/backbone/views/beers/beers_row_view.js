BeerNotes.Views.BeersRowView = Backbone.View.extend(
    {
        tagName: 'tbody',
        template: JST["backbone/templates/beers/beers_row_view"],
        events: {
            'click .remove_beer': 'checkDelete',
            'click .go_recipes': 'goToRecipes',
            'click .edit': 'editBeer'
        },

        initialize: function (options) {
            this.collection =
            this.parentView = options.parentView;
            this.recipes = new BeerNotes.Collections.RecipesCollection({beer_id: this.model.id});
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },

        checkDelete: function () {
            this.modalView = new BeerNotes.Views.BaseModalView(
                {
                    title: 'Delete Beer?',
                    template: JST['backbone/templates/modals/beer_modal_view']
                }
            );
            this.modalView.on("confirm", this.removeBeer, this);
            this.modalView.render();
        },

        removeBeer: function () {
            this.model.destroy();
            this.remove();
        },

        goToRecipes: function () {
            this.recipesView = new BeerNotes.Views.RecipesView({collection: this.recipes, parentView: this.parentView});
            this.recipes.fetch().done(this.recipesView.render);
        },

        editBeer: function() {
            this.parentView.trigger('open_edit', {model: this.model});
        }

    });