App = Ember.Application.create();

App.ApplicationStore = DS.Store.extend({
  adapter: DS.FixtureAdapter
});

App.Router.map(function() {
  this.route('about');
});