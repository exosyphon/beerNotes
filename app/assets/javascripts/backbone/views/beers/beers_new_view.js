BeerNotes.Views.BeersNewView = Backbone.View.extend({
    template: JST["backbone/templates/beers/beers_new_view"],
    events: {
        'click .save_beer': 'handleSave',
        'click .cancel_beer': 'handleCancel'
    },

    initialize: function (options) {
        this.options = options || {};
        _.bindAll(this, 'render');
        this.model = new BeerNotes.Models.Beer();
//        this.formView = new BeerNotes.Views.BeersFormView({ model: this.model });
    },

    render: function () {
        this.$el.html(this.template());
        return this;
    },

    handleCancel: function () {
//        Backbone.trigger('form:read_mode');
        this._resetModel(this.model);
        this.remove();
    },

    _resetModel: function(model) {
        model.clear();
        model.set(this.model.defaults);
    },

    handleSave: function() {

    }
});