import Route from '@ember/routing/route';

export default class PostsShowRoute extends Route {
  model(params) {
    console.log(params)
  }
}
