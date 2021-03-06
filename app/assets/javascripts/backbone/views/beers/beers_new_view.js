BeerNotes.Views.BeersNewView = Backbone.View.extend({
    template: JST["backbone/templates/beers/beers_new_view"],
    events: {
        'click .save_beer': 'handleSave',
        'click .cancel_beer': 'handleCancel'
    },

    initialize: function (options) {
        _.bindAll(this, 'render');
        this.model = options.model || new BeerNotes.Models.Beer();
        this.formView = new BeerNotes.Views.BeersFormView({ model: this.model });
    },

    render: function () {
        this.$el.html(this.template());

        this.$('[data-form-fields]').append(this.formView.render().$el);
        return this;
    },

    handleCancel: function () {
        this.model.fetch();
        $('.add_beer').removeAttr('disabled');
        this.remove();
    },

    handleSave: function() {
        $('.add_beer').removeAttr('disabled');
        this.model.set('name', $('#name').val());
        this.model.set('beerType', $('#beerType').val());
        this.model.set('notes', $('#notes').val());
        this.collection.create(this.model);
        this.handleCancel();
    }
});