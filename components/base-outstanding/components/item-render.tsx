import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface ItemProps {
  item: any;
  index: number;
  onPress?: () => void;
}

function ItemViewRender({item}: ItemProps) {
  return (
    <View style={styles.view}>
      <Text style={styles.title}>{item.name}</Text>
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.text}>{item.country}</Text>
        </View>
        <View style={styles.row}>
          <Text style={[styles.text, styles.textPrice]}>
            ${item.price.toString()}/
          </Text>
          <Text style={[styles.text, styles.textPerson]}>person</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    // width: '100%',
    // backgroundColor: 'green',
    backgroundColor: 'red',
    alignItems: 'center',
    borderRadius: 34,
    padding: 20,
  },
  title: {
    color: '#0236AC',
    marginTop: 10,
    fontSize: 18,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 14,
  },
  textPrice: {
    color: '#00CED1',
  },
  textPerson: {
    color: '#6A6A6A',
  },
});
export default ItemViewRender;
