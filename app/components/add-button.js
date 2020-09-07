import Component from '@glimmer/component';
import { action } from '@ember/object';
import {inject as service} from '@ember/service';


export default class AddButtonComponent extends Component {
  @service Global;

  @action addNewPost() {
    let newPost = {
      id: this.Global.posts.length+1,
      date: this.generateDate(),
      headline: this.Global.headline,
      text: this.Global.text,
    }
    this.Global.posts = [...this.Global.posts, newPost];
    this.Global.headline = "";
    this.Global.text = "";
    console.log(this.Global.posts);
  }

  generateDate() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    return today;
  }
}
