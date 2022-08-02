import {ItemProps} from '../model/scroll-text-model';

function getScrollToX(
  array: ItemProps[],
  index: number,
  screen: number,
): number {
  let item = array[index];
  let locationX = item.x;
  let haftScreen = screen / 2;
  let haftItem = item.width / 2;
  return locationX + haftItem - haftScreen;
}

export {getScrollToX};
