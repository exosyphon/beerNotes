BeerNotes.Views.IngredientsFormView = Backbone.View.extend({
   template: JST["backbone/templates/ingredients/ingredients_form_view"],

    initialize: function() {
        _.bindAll(this, 'render');
    },

    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});