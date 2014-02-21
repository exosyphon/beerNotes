BeerNotes.Views.RecipesRowView = Backbone.View.extend(
{
    tagName: 'tbody',
    template: JST["backbone/templates/recipes/recipes_row_view"],
    events: {
        'click .remove_recipe': 'removeRecipe'
    },

    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },

    removeRecipe: function() {
        this.model.destroy();
        this.remove();
    }
});