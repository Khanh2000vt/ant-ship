/* eslint-disable prettier/prettier */
import {OptionsOrder, TitleOrders} from '../utils';

function handleOptionOrders(list: any[], option: OptionsOrder) {
  if (option === OptionsOrder.ALL) {
    return list;
  }
  let optionOrder: string = '';
  if (option === OptionsOrder.PROCESSING) {
    optionOrder = TitleOrders.processing;
  } else if (option === OptionsOrder.DELIVERING) {
    optionOrder = TitleOrders.delivering;
  } else if (option === OptionsOrder.COMPLETED) {
    optionOrder = TitleOrders.completed;
  } else if (option === OptionsOrder.CANCELLED) {
    optionOrder = TitleOrders.cancelled;
  }
  console.log('shop-order-model-option: ', optionOrder);
  let arrayOrder = list.filter(item => item.state === optionOrder);
  return arrayOrder;
}

function handleSelectPopup(item: any, data: any) {
  let index = data.indexOf(item);
  console.log('index: ', index);
  let popup = [
    ...data.slice(0, index),
    {
      ...item,
      isSelected: true,
    },
    ...data.slice(index + 1),
  ];
  return popup;
}

export {handleOptionOrders, handleSelectPopup};
