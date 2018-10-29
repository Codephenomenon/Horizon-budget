import AddItem from './models/AddItem';
import BudgetController from './models/BudgetController';
import * as ItemView from './views/AddItemView';
import { elements } from './views/base';
const state = {};

const controlAddItem = () => {
  state.item = new AddItem();
  ItemView.renderItem(state.item);
  state.month.addItem(state.item);
  if(state.item.type === '+') {
    ItemView.renderTotal(1, state.month.calculateBudget());
  } else {
    ItemView.renderTotal(0, state.month.calculateExpense());
  }
}

const setMonth = () => {
  const loadDate = new Date();
  const monthArray = new Array();
    monthArray[0] = 'January';
    monthArray[1] = 'February';
    monthArray[2] = 'March';
    monthArray[3] = 'April';
    monthArray[4] = 'May';
    monthArray[5] = 'June';
    monthArray[6] = 'July';
    monthArray[7] = 'August';
    monthArray[8] = 'September';
    monthArray[9] = 'October';
    monthArray[0] = 'November';
    monthArray[1] = 'December';

  let temp = monthArray[loadDate.getMonth()];
  document.querySelector(".set_month-b").innerHTML = `${temp}:`;
  document.querySelector(".set_month-e").innerHTML = `${temp}:`;
  // TO-DO if/else load previous month
  state.month = new BudgetController(temp);
}

document.getElementById('addBtn').addEventListener('click', e => {
  e.preventDefault();
  controlAddItem();
  elements.addDescription.value = "";
  elements.addValue.value = "";
});

window.onload = setMonth();

elements.incomeList.addEventListener('click', e => {
  const id = e.target.closest('.item-container_list-item').dataset.itemid;
  if(e.target.matches('.fa-times-circle')) {
      state.month.removeItem(id, 1);
      ItemView.deleteItem(id);
      ItemView.checkParentList();
      ItemView.renderTotal(1, state.month.calculateBudget());
  }
});

elements.expenseList.addEventListener('click', e => {
  const id = e.target.closest('.item-container_list-item').dataset.itemid;
  if(e.target.matches('.fa-times-circle')) {
    state.month.removeItem(id, 0);
    ItemView.deleteItem(id);
    ItemView.checkParentList();
    ItemView.renderTotal(0, state.month.calculateExpense());
  }
});
