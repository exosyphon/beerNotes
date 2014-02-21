BeerNotes.Views.BeersRowView = Backbone.View.extend(
{
    tagName: 'tbody',
    template: JST["backbone/templates/beers/beers_row_view"],
    events: {
        'click .remove_beer': 'removeBeer'
    },

    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },

    removeBeer: function() {
        this.model.destroy();
        this.remove();
    }
});