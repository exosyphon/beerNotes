BeerNotes.Routers.BeersRouter = Backbone.Router.extend({
    initialize: function() {
        this.activeObjects = [];
        this.newObjects = [];

        this.on('route', function() {
            _.each(this.activeObjects, function(object) {
                object.undelegateEvents && object.undelegateEvents();
            });

            this.activeObjects = this.newObjects.slice();
            this.newObjects = [];
        });

        this.beers = new BeerNotes.Collections.BeersCollection();
    },

    provisionObject: function(object, type, constructorArgument) {
        object = new type(constructorArgument);

        this.newObjects || (this.newObjects = []);
        this.newObjects.push(object);

        return object;
    },

    routes: {
        '': 'main',
        'page/:page': 'main'
    },

    main: function () {
        this.beersView = this.provisionObject(this.beersView, BeerNotes.Views.BeersView, {collection: this.beers});
        this.beers.fetch().done(this.beersView.render);
    }
});

