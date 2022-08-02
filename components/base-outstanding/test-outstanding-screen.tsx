import React from 'react';
import {StyleSheet, View} from 'react-native';
import BaseOutstanding from './base-outstanding';
import ItemViewRender from './components/item-render';

function TestOutstandingScreen() {
  return (
    <View style={styles.container}>
      <BaseOutstanding
        data={dataTest} // list data.
        // repeat={true} // if true, data will repeat circle. Erroring. Error Props
        ratioToWidth={0.6} // ratio of item width to screen width.
        ratioZoomOut={0.8} // shrink ratio of item when not focused
        smooth={false} // If true, the item will be scrolled faster.
        // If false, the item will be scrolled one by one
        zoomOutWhenScrolling={false} // if true, the item will be minimized when scrolling.
        itemViewRender={({item, index}) => (
          <ItemViewRender item={item} index={index} />
        )} //View item render
      />
    </View>
  );
}

const dataTest = [
  {
    name: 'Hanoi',
    price: '48',
    country: 'VietNam',
  },
  {
    name: 'Tokyo',
    price: '48',
    country: 'Japan',
  },
  {
    name: 'Paris',
    price: '48',
    country: 'France',
  },
  {
    name: 'Rome',
    price: '48',
    country: 'Italy',
  },
  {
    name: 'Hanoi',
    price: '48',
    country: 'VietNam',
  },
  {
    name: 'Tokyo',
    price: '48',
    country: 'Japan',
  },
  {
    name: 'Paris',
    price: '48',
    country: 'France',
  },
  {
    name: 'Rome',
    price: '48',
    country: 'Italy',
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TestOutstandingScreen;
