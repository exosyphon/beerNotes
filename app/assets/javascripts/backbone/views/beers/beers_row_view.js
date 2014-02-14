BeerNotes.Views.BeersRowView = Backbone.View.extend(
{
    tagName: 'tbody',
    template: JST["backbone/templates/beers/beers_row_view"],
    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});