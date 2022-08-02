import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {PropsListSettings} from '../model/settings-model';
import ItemOptionSettings from './item-option-settings';

function ListOptionsSettings() {
  return <View></View>;
}

const styles = StyleSheet.create({
  title: {
    backgroundColor: '#626c75',
    paddingHorizontal: 20,
    height: 40,
    justifyContent: 'center',
    elevation: 5,
  },
  textTitle: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ListOptionsSettings;
