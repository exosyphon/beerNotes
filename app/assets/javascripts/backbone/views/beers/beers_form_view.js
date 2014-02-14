BeerNotes.Views.BeersFormView = Backbone.View.extend({
   template: JST['backbone/templates/beers/beers_form_view'],

    render: function() {
        this.$el.html(this.template());
        return this;
    }
});