import EmberRouter from '@ember/routing/router';
import config from 'ember-posts/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('posts', function() {
    this.route('add');
    this.route('show', {path: '/:post_id'});
    // eslint-disable-next-line ember/routes-segments-snake-case
    this.route('edit', {path: '/:post_id/edit'});
  });
});
