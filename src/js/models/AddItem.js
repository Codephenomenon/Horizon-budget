import uniqid from 'uniqid';
import { elements } from '../views/base';

export default class AddItem {
  constructor() {
    this.id = uniqid();
    this.type = elements.addType.options[addType.selectedIndex].text;
    this.description = elements.addDescription.value;
    this.value = elements.addValue.value;
    this.date = elements.addDate.value;

    if(this.value == "") {
      this.value = 0;
    }
  }
}
