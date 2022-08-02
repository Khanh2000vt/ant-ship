/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React, {useRef} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Press} from '../../components/data-test';
interface Props {
  item: any;
  onPress?: any;
}
export default function ItemOrdersView({item, onPress}: Props) {
  const ref_email = useRef(null);
  const ref_plus = useRef(null);
  const avt = require('../../../assets/img/avt-test.png');

  return (
    <View style={styles.view}>
      <Image source={avt} style={styles.image} />
      <View style={styles.container}>
        <View style={styles.componentView}>
          <View style={styles.columnFirst}>
            <Text numberOfLines={2}>{item.title}</Text>
          </View>
          <View style={[styles.columnSecond, styles.inforOrders]}>
            <Text numberOfLines={1}>{item.time}</Text>
            <Text numberOfLines={1}>{item.state}</Text>
          </View>
        </View>

        <View style={styles.componentView}>
          <View style={styles.columnFirst}>
            <Text numberOfLines={1}>{item.nameShipper}</Text>
            <Text numberOfLines={1}>{item.engine}</Text>
          </View>
          <View style={[styles.columnSecond, styles.iconOption]}>
            <TouchableOpacity
              ref={ref_email}
              style={{padding: 5, marginHorizontal: 2}}
              onPress={() => onPress(item, Press.EMAIL, ref_email)}>
              <Ionicons name="mail-outline" size={20} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
              ref={ref_plus}
              style={{padding: 5, marginHorizontal: 2}}
              onPress={() => onPress(item, Press.PLUS, ref_plus)}>
              <Ionicons name="add-circle-outline" size={20} color="blue" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    borderWidth: 1,
    padding: 5,
    marginVertical: 5,
    flex: 1,
    height: 100,
    flexDirection: 'row',
  },
  titleText: {
    fontWeight: 'bold',
  },
  image: {
    height: 90,
    width: 90,
  },
  container: {
    flex: 1,
    marginLeft: 5,
    padding: 2,
  },
  componentView: {
    flex: 0.5,
    flexDirection: 'row',
  },
  columnFirst: {
    flex: 0.6,
    marginRight: 2,
  },
  columnSecond: {
    flex: 0.4,
    marginLeft: 2,
  },
  iconOption: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  inforOrders: {
    alignItems: 'flex-end',
  },
});
