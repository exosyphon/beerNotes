BeerNotes.Views.RecipesNewView = Backbone.View.extend({
    template: JST["backbone/templates/recipes/recipes_new_view"],
    events: {
        'click .save_recipe': 'handleSave',
        'click .cancel_recipe': 'handleCancel'
    },

    initialize: function (options) {
        this.on('remove_new_view', this.handleCancel, this);
        _.bindAll(this, 'render');
        this.model = options.model || new BeerNotes.Models.Recipe();
        this.formView = new BeerNotes.Views.RecipesFormView({ model: this.model });
    },

    render: function () {
        this.$el.html(this.template());

        this.$('[data-form-fields]').append(this.formView.render().$el);
        return this;
    },

    handleCancel: function () {
        $('.add_recipe').removeAttr('disabled');
        this.remove();
    },

    _resetModel: function(model) {
        model.clear();
        model.set(this.model.defaults);
    },

    handleSave: function() {
        $('.add_recipe').removeAttr('disabled');
        this.model.set('name', $('#name').val());
        this.model.set('boilNotes', $('#boilNotes').val());
        this.collection.create(this.model);
        this.handleCancel();
    }
});