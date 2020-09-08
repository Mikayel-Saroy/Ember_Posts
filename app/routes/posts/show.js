import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';


export default class PostsShowRoute extends Route {
  @service Global;

  model(params) {
    return this.Global.getPostById(params.post_id)
  }
}
