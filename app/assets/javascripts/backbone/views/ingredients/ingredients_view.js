BeerNotes.Views.IngredientsView = Backbone.View.extend({
    el: '#wrapper',
    template: JST["backbone/templates/ingredients/ingredients_view"],

    events: {
        'click .add_ingredient': 'showNewForm',
        'click .back_to_recipe': 'backToRecipe'
    },

    initialize: function (options) {
        _.bindAll(this, 'render');
        this.parentView = options.parentView;

        this.newIngredientView = null;

        this.indexView = new BeerNotes.Views.IngredientsIndexView({
            el: '#index_content',
            template: JST['backbone/templates/ingredients/ingredients_index_view'],
            collection: this.collection,
            childView: BeerNotes.Views.IngredientsRowView
        });
        this.collection.on('change', this.render, this);
    },

    render: function () {
        this.$el.html(this.template());
        this.indexView.render();
        return this;
    },

    showNewForm: function () {
        this.$('.add_ingredient').attr('disabled', 'disabled');

        this.newIngredientView = new BeerNotes.Views.IngredientsNewView(
            { collection: this.collection }
        );

        $('#new_content').append(
            this.newIngredientView.render().$el
        );
    },

    backToRecipe: function () {
        if (this.newIngredientView != null)
            this.newIngredientView.trigger('remove_new_view');

        this.undelegateEvents();
        this.parentView.render();
    }
});
