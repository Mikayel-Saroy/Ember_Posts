import Component from '@glimmer/component';
import {inject as service} from '@ember/service';
import {tracked} from "@glimmer/tracking";


export default class EditComponentComponent extends Component {
  @service Global;
  @tracked id = this.Global.dynamicID + 1;
  @tracked headline = this.Global.currentHeadline;
  @tracked text = this.Global.currentText;
  @tracked date = this.Global.currentDate;
}
