/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
interface Props {
  item: any;
}
export default function ItemCharView({item}: Props) {
  return (
    <View>
      <Text style={styles.titleText} numberOfLines={1}>
        {item.name}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleText: {
    alignSelf: 'center',
  },
});
