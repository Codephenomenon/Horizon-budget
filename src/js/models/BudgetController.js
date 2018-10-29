import { elements } from '../views/base';

export default class BudgetController {
  constructor(temp) {
    this.month = temp;
    this.totalIncome = [];
    this.totalExpense = [];
  }

  addItem(item) {
    if(item.type === '+') {
      this.totalIncome.push(item);
    } else {
      this.totalExpense.push(item);
    }
  }

  removeItem(id, type) {
    if(type == 1) {
      for(let i = 0; i < this.totalIncome.length; i++) {
        if(this.totalIncome[i].id == id) {
          this.totalIncome.splice(this.totalIncome.indexOf(this.totalIncome[i]), 1);
        }
      }
    } else {
      for(let i = 0; i < this.totalExpense.length; i++) {
        if(this.totalExpense[i].id == id) {
          this.totalExpense.splice(this.totalExpense.indexOf(this.totalExpense[i]), 1);
        }
      }
    }
  }

  calculateBudget() {
    let sum = 0;
    for(let elem of this.totalIncome) {
      sum += parseFloat(elem.value);
    }
    return sum;
  }

  calculateExpense() {
    let sum = 0;
    for(let elem of this.totalExpense) {
      sum += parseFloat(elem.value);
    }
    return sum;
  }
}
