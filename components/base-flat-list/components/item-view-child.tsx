/* eslint-disable prettier/prettier */

import React from 'react';
import {StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import { Type } from '../../../shop/components/data-test';
import ItemCharView from '../../../shop/components/view-options/item-chart-view';
import ItemOptionView from '../../../shop/components/view-options/item-option-view';
interface Props {
  item: any;
  type: Type;
  column: number;
}
const {width} = Dimensions.get('window');

export default function ItemViewChild({item, type, column}: Props) {
  const itemWidth = width / column;

  return (
    <TouchableOpacity
      style={[
        styles.container,
        {width: itemWidth - 35,
        height: itemWidth - 35},
      ]}>
        {type === Type.OPTION && <ItemOptionView item={item}/>}
        {type === Type.CHART && <ItemCharView item={item} />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
});
