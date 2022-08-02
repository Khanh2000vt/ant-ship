import React from 'react';
import {View} from 'react-native';
import BaseRate from '../components/rate/base-rate';

function TestRateScreen() {
  function handlePressRate(i: number) {
    console.log('Da chon: ' + (i + 1) + ' sao.');
  }
  return (
    <View>
      <BaseRate onPress={handlePressRate} />
    </View>
  );
}

export default TestRateScreen;
