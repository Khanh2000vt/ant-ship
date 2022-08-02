/* eslint-disable prettier/prettier */

import React from 'react';
import {View, StyleSheet} from 'react-native';
import BaseFlatList from '../../components/base-flat-list/base-flat-list';
import ItemViewParents from '../../components/base-flat-list/components/item-view-parents';
import {dataTest} from '../components/data-test';
export default function ShopHomeScreen() {
  return (
    <View style={styles.container}>
        <BaseFlatList
          data={dataTest}
          ItemViewRender={ItemViewParents}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

