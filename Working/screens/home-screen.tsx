/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import HeaderHome from '../components/header-home';
import {dataList} from '../components/data-test';
import BaseFlatList from '../../components/base-flat-list/base-flat-list';
import ItemViewParents from '../../components/base-flat-list/components/item-view-parents';
export default function HomeScreen({navigation}: {navigation: any}) {
  function handlePressProfile() {
    navigation.navigate('ProfileScreen');
  }
  return (
    <View style={styles.container}>
      <HeaderHome onPress={handlePressProfile} />
      <View style={styles.body}>
        {/* <ItemViewParents title={dataList[0].title} data={dataList[0].data} /> */}
        <BaseFlatList
          data={dataList}
          ItemViewRender={ItemViewParents}
          onRefresh={() => {}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    padding: 10,
  },
});
