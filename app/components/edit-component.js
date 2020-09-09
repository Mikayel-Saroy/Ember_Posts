import Component from '@glimmer/component';
import {tracked} from "@glimmer/tracking";
import { action } from '@ember/object';


export default class EditComponentComponent extends Component {
  @tracked headline = this.args.post.headline;
  @tracked text = this.args.post.text;
  @action editPosts() {
    this.args.post.headline = this.headline;
    this.args.post.text = this.text;
    // console.log(this.headline, this.text)
    this.text = "";
    this.headline = "";
  }
}
