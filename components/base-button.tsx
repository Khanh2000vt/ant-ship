/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React, { useEffect, useState } from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {PropsButton} from '../shop/shop-order/model/shop-order-models';

export default function BaseButton({
  title,
  style,
  active,
  onPress = () => {},
}: PropsButton) {

  function handlePress() {
    if (active) {
      onPress();
    }
  }
  console.log('active-ssss: ', active);
  return (
    <TouchableOpacity
      style={[
        styles.view,
        // style,
        {
          opacity: active ? 1 : 0.2,
        },
      ]}
      onPress={handlePress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    borderWidth: 1,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
});
