/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Range} from '../assets/themes/value';
interface Props {
  title: string;
  ViewHeaderLeft?: any;
  ViewHeaderRight?: any;
  onPressLeft?: any;
  onPressRight?: any;
}

export default function BaseHeader({
  title,
  ViewHeaderLeft,
  ViewHeaderRight,
  onPressLeft,
  onPressRight,
}: Props) {
  return (
    <View style={styles.viewHeader}>
      <View style={styles.viewLeft}>
        {ViewHeaderLeft && (
          <TouchableOpacity onPress={onPressLeft} style={styles.button}>
            <ViewHeaderLeft />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.viewTitle}>
        <Text style={{color: 'white', fontSize: 18}}>{title}</Text>
      </View>
      <View style={styles.viewRight}>
        {ViewHeaderRight && (
          <TouchableOpacity onPress={onPressRight} style={styles.button}>
            <ViewHeaderRight />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewHeader: {
    height: Range.HEIGHT_HEADER,
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 10,
    backgroundColor: 'blue',
  },
  viewTitle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewLeft: {
    width: '30%',
    height: '100%',
    alignItems: 'flex-start',
  },
  viewRight: {
    width: '30%',
    height: '100%',
    alignItems: 'flex-end',
  },
  button: {
    height: '100%',
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
