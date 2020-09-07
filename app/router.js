import EmberRouter from '@ember/routing/router';
import config from 'ember-posts/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('posts', { path: '/posts/:posts_id' }, function() {
    this.route('add');
  });
});
