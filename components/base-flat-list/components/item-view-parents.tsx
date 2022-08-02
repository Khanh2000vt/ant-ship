/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState, useEffect} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { Type } from '../../../shop/components/data-test';
import ItemViewChild from './item-view-child';
import ListEmptyItem from './list-empty-item';
interface Props {
  item: any;
  onPress?: any;
}

export default function ItemViewParents({item, onPress}: Props) {
  const indexShow = 2;
  const type = item.type;
  const [isMore, setIsMore] = useState<boolean>(false);
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    if (isMore) {
      setData(item.data);
    } else {
      const temp = item.data.slice(0, indexShow);
      setData([...temp]);
    }
  }, [item.data, isMore]);
  function handlePressMore() {
    setIsMore(!isMore);
  }

  function isHorizontal() {
    if (item.type === Type.CHART) {
      return true;
    }
    return false;
  }
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <ItemViewChild item={item} type={type} column={indexShow}/>
        )}
        keyExtractor={item => item.id}
        // style={styles.flatList}
        horizontal={isHorizontal()}
        numColumns={isHorizontal() ? undefined : indexShow}
        ListEmptyComponent={ListEmptyItem}
        columnWrapperStyle={isHorizontal() ? undefined : styles.columnFlatList}
      />
      {item.data.length > indexShow && (
        <TouchableOpacity style={styles.buttonMore} onPress={handlePressMore}>
          <Text
            style={[styles.textMore, {color: isMore ? '#800080' : '#0000CD'}]}>
            {isMore ? 'Hide' : 'More'}
          </Text>
        </TouchableOpacity>
      )}
      <View style={styles.rule} />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    height: 40,
    borderWidth: 2,
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  // flatList: {
  //     alignSelf: 'center',
  // },
  columnFlatList: {
    justifyContent: 'space-between',
  },
  rule: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
    elevation: 1,
  },
  textMore: {
    fontWeight: 'bold',
    // fontStyle: 'italic',
    textDecorationLine: 'underline',
  },
  buttonMore: {
    alignSelf: 'flex-end',
    marginRight: 10,
  },
});
