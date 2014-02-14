BeerNotes.Views.BeersView = Backbone.View.extend({
    el: '#beers',
    template: JST["backbone/templates/beers/beers_view"],

    events: {
        'click .add_beer': 'showNewForm'
    },

    initialize: function () {
        _.bindAll(this, 'render');

        this.indexView = new BeerNotes.Views.BeersIndexView({
            el: '#beers_content',
            template: JST['backbone/templates/beers/beers_index_view'],
            collection: this.collection,
            childView: BeerNotes.Views.BeersRowView
        });
        this.collection.on('add', this.render, this);
    },

    render: function () {
        this.$el.html(this.template());
        this.indexView.render();
        return this;
    },

    showNewForm: function () {
        new BeerNotes.Views.BeersNewView({
            el: '#new_content',
            collection: this.collection
        }).render();
    }
});
