BeerNotes.Collections.BeersCollection = Backbone.Collection.extend({
   model: BeerNotes.Models.Beer,
   url: '/beers'
});
