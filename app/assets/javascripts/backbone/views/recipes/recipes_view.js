BeerNotes.Views.RecipesView = Backbone.View.extend({
    el: '#wrapper',
    template: JST["backbone/templates/recipes/recipes_view"],

    events: {
        'click .add_recipe': 'showNewForm',
        'click .back_to_beer': 'backToBeer'
    },

    initialize: function (options) {
        _.bindAll(this, 'render');
        this.parentView = options.parentView;

        this.newRecipeView = null;

        this.indexView = new BeerNotes.Views.RecipesIndexView({
            el: '#index_content',
            template: JST['backbone/templates/recipes/recipes_index_view'],
            collection: this.collection,
            childView: BeerNotes.Views.RecipesRowView
        });
        this.collection.on('add', this.render, this);
    },

    render: function () {
        this.$el.html(this.template());
        this.indexView.render();
        return this;
    },

    showNewForm: function () {
        this.$('.add_recipe').attr('disabled', 'disabled');

        this.newRecipeView = new BeerNotes.Views.RecipesNewView(
            { collection: this.collection }
        );

        $('#new_content').append(
            this.newRecipeView.render().$el
        );
    },

    backToBeer: function () {
        if (this.newRecipeView != null)
            this.newRecipeView.trigger('remove_new_view');

        this.undelegateEvents();
        this.parentView.render();
    }
});
