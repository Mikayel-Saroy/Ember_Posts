import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';

export default class PostsEditRoute extends Route {
  @service Global;

  model(params) {
    return this.Global.getPostById(params.post_id);
  }
}
