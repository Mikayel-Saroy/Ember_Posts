import Component from '@glimmer/component';
import {inject as service} from '@ember/service';
import {tracked} from "@glimmer/tracking";
import { action } from '@ember/object';


export default class EditComponentComponent extends Component {
  @tracked headline = this.args.post.headline;
  @tracked text = this.args.post.text;
  @action editPosts() {
    this.args.post.headline = this.headline;
    this.args.post.message = this.text;
  }
}
