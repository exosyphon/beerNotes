BeerNotes.Views.IngredientsRowView = Backbone.View.extend(
{
    tagName: 'tbody',
    template: JST["backbone/templates/ingredients/ingredients_row_view"],
    events: {
        'click .remove_ingredient': 'removeIngredient'
    },

    initialize: function() {
    },

    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },

    removeIngredient: function() {
        this.model.destroy();
        this.remove();
    }
});