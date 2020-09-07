import Component from '@glimmer/component';
import {inject as service} from '@ember/service';

export default class ShowDynamicComponent extends Component {
  @service Global;
}
