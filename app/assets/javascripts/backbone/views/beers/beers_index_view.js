BeerNotes.Views.BeersIndexView = Backbone.View.extend({
    initialize: function(options) {
        if (!this.options) {
            this.options = options || {};
        }
        _.bindAll(this, 'render');
    },

    render: function() {
        this.setElement(this.options.el);

        var $outer = $(this.options.template(this.renderOptions()));
        var $table = $('.listable', $outer).length == 0 ? $outer.filter('.listable') : $('.listable', $outer);

        this._renderCollectionIntoTable($table, this.collection, this.options.childView);

        this.$el.html($table);
        return this;
    },

    cycleClass: function(index){
        return index % 2 == 0 ? 'even' : 'odd';
    },

    _renderCollectionIntoTable: function($table, collection, childViewType) {
        collection.each(function(record, index){
            var view = new childViewType({model: record});
            $table.append(view.render().$el.addClass(this.cycleClass(index)));
            this.createdChildView(view);
        }, this);
    },

    renderOptions: function() {
        return {numberOfRecords: '2'};
    },

    createdChildView: function(childView){
    }
});