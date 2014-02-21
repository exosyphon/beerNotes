BeerNotes.Views.RecipesView = Backbone.View.extend({
    el: '#wrapper',
    template: JST["backbone/templates/recipes/recipes_view"],

    events: {
        'click .add_recipe': 'showNewForm'
    },

    initialize: function () {
        _.bindAll(this, 'render');

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
        $('#new_content').append(
            new BeerNotes.Views.RecipesNewView(
                { collection: this.collection }
            ).render().$el
        );
    }
});
