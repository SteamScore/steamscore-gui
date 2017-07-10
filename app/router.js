import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home', { path: '/' });
  this.route('games', { path: '/games' });
  this.route('game', { path: '/games/:game_id' });
});

export default Router;
