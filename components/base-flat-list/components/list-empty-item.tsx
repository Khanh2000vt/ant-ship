/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function ListEmptyItem() {
  return (
    <View style={styles.view}>
      <View style={styles.rule} />
      <Text style={styles.text}>List Empty Component...</Text>
      <View style={styles.rule} />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {margin: 20},
  rule: {
    marginVertical: 10,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
    elevation: 1,
  },
  text: {
    fontStyle: 'italic',
    alignSelf: 'center',
    color: '#737373',
  },
});
