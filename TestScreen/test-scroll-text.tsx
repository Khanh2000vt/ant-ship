import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ScrollText from '../components/scroll-text/scroll-text';

function TestScrollText() {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>|</Text>
      <ScrollText data={data} />
      <Text style={styles.text}>|</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  text: {
    textAlign: 'center',
  },
});

const data = [
  {
    title: 'title 1 test',
  },
  {
    title: 'title 2',
  },
  {
    title: 'title 3 test lan 2',
  },
  {
    title: 'title 4',
  },
  {
    title: 'title 5 test lan 2, test thêm lần nữa test',
  },
  {
    title: 'title 6',
  },
  {
    title: 'title 7',
  },
  {
    title: 'title 8',
  },
];

export default TestScrollText;
