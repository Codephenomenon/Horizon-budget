import { elements } from './base';
import BudgetController from '../models/BudgetController';

export const renderItem = item => {
  const markup = `
  <li class="item-container_list-item" id="${item.id}" data-itemid="${item.id}">
    <span class="item-container_list-item-info">Amount: $${item.value}</span><span class="item-container_list-item-info">${item.description}</span><span class="item-container_list-item-info">Date: ${item.date}</span><span><i class="fa fa-times-circle"></i></span>
  </li>
  `;
  if(item.type === '+') {
    elements.incomeList.insertAdjacentHTML('afterbegin', markup);
    elements.incomeList.style.background = 'rgba(0,0,0, 0.25)';
  } else {
    elements.expenseList.insertAdjacentHTML('afterbegin', markup);
    elements.expenseList.style.background = 'rgba(0,0,0, 0.25)';
  }
}

export const checkParentList = () => {
  if(elements.incomeList.getElementsByTagName('li').length <= 0) {
    elements.incomeList.style.background = 'transparent';
  }
  if(elements.expenseList.getElementsByTagName('li').length <= 0) {
    elements.expenseList.style.background = 'transparent';
  }
}

export const deleteItem = id => {
  const init = document.querySelector(`[data-itemid="${id}"]`);
  if (init) {
    init.parentElement.removeChild(init);
  }
}

export const renderTotal = (type, total) => {
  if(type == 1) {
    elements.totalIncome.innerHTML = `$${total.toFixed(2)}`;
  } else {
    elements.totalExpense.innerHTML = `$${total.toFixed(2)}`;
  }
}
