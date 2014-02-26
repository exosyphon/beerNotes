BeerNotes.Views.BeersView = Backbone.View.extend({
    el: '#wrapper',
    template: JST["backbone/templates/beers/beers_view"],

    events: {
        'click .add_beer': 'showNewForm'
    },

    initialize: function () {
        _.bindAll(this, 'render');

        this.indexView = new BeerNotes.Views.BeersIndexView({
            el: '#index_content',
            template: JST['backbone/templates/beers/beers_index_view'],
            collection: this.collection,
            childView: BeerNotes.Views.BeersRowView,
            parentView: this
        });
        this.collection.on('change', this.render, this);
        this.on('open_edit', this.showEditForm, this);
    },

    render: function () {
        this.$el.html(this.template());
        this.indexView.render();
        return this;
    },

    showNewForm: function () {
        this.$('.add_beer').attr('disabled', 'disabled');
        $('#new_content').append(
            new BeerNotes.Views.BeersNewView(
                { collection: this.collection }
            ).render().$el
        );
    },

    showEditForm: function (options) {
        this.$('.add_beer').attr('disabled', 'disabled');
        $('#new_content').append(
            new BeerNotes.Views.BeersNewView(
                {
                    collection: this.collection,
                    model: options.model
                }
            ).render().$el
        );
    }
});
