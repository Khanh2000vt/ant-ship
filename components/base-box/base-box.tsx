import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {PropsBaseBox} from './model/base-box-model';

function BaseBox({
  item,
  children,
  styleBox,
  styleTitleBox,
  onPress,
  backgroundColor = '#f0f0f0',
}: PropsBaseBox) {
  function handlePress() {
    onPress(item);
  }
  return (
    <View
      style={[{backgroundColor: backgroundColor}, styles.viewBox, styleBox]}>
      <Text
        style={[
          {backgroundColor: backgroundColor},
          styles.textTitle,
          styleTitleBox,
        ]}>
        {item.title}
      </Text>
      <TouchableOpacity
        style={[{backgroundColor: backgroundColor}, styles.container]}
        onPress={handlePress}>
        {children}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  viewBox: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    // margin: 10,
  },
  textTitle: {
    position: 'absolute',
    top: -10,
    left: 10,
    paddingHorizontal: 5,
    fontWeight: 'bold',
    zIndex: 1,
  },
  container: {
    // flex: 1,
  },
});

export default BaseBox;
