import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';


export default class PostsShowRoute extends Route {
  @service Global;

  model(params) {
    this.Global.dynamicID = params.post_id-1;
    this.Global.currentHeadline = this.Global.posts[this.Global.dynamicID].headline;
    this.Global.currentText = this.Global.posts[this.Global.dynamicID].text;
    this.Global.currentDate = this.Global.posts[this.Global.dynamicID].date;
    console.log(this.Global.dynamicID);
    console.log(this.Global.currentHeadline);
    console.log(this.Global.currentText);
    console.log(this.Global.currentDate);
  }
}
