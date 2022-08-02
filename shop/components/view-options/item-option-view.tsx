/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import BaseIconNews from '../../../components/base-icon-update/base-icon-news';
interface Props {
  item: any;
}
export default function ItemOptionView({item}: Props) {
  const option_avt = require('../../../assets/img/avt-test.png');
  return (
    <View style={{flex: 1, width: '100%'}}>
      <View style={styles.viewImageOption}>
        <Image source={option_avt} style={styles.imgOption} />
        {item.isNews && (
          <BaseIconNews style={styles.iconNews} type="triangle" />
        )}
      </View>
      <View style={styles.viewContainerOption}>
        <Text style={styles.titleText} numberOfLines={2}>
          {item.name}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewImageOption: {
    flex: 3,
    justifyContent: 'flex-start',
    alignSelf: 'center',
    width: '100%',
  },
  titleText: {
    alignSelf: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  viewContainerOption: {
    flex: 1,
    justifyContent: 'center',
    margin: 5,
  },
  imgOption: {
    height: '100%',
    width: '100%',
  },
  iconNews: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
});
