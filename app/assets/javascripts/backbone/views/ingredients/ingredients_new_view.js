BeerNotes.Views.IngredientsNewView = Backbone.View.extend({
    template: JST["backbone/templates/ingredients/ingredients_new_view"],
    events: {
        'click .save_ingredient': 'handleSave',
        'click .cancel_ingredient': 'handleCancel'
    },

    initialize: function (options) {
        this.on('remove_new_view', this.handleCancel, this);
        _.bindAll(this, 'render');
        this.model = options.model || new BeerNotes.Models.Ingredient();
        this.formView = new BeerNotes.Views.IngredientsFormView({ model: this.model });
    },

    render: function () {
        this.$el.html(this.template());

        this.$('[data-form-fields]').append(this.formView.render().$el);
        return this;
    },

    handleCancel: function () {
        this.model.fetch();
        $('.add_ingredient').removeAttr('disabled');
        this.remove();
    },

    handleSave: function() {
        $('.add_ingredient').removeAttr('disabled');
        this.model.set('name', $('#name').val());
        this.model.set('amount', $('#amount').val());
        this.model.set('unit', $('#unit').val());
        this.model.set('addTime', $('#addTime').val());
        this.collection.create(this.model);
        this.handleCancel();
    }
});