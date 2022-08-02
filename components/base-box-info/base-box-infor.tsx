import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {PropsBaseBoxInfo} from './base-box-info-model';

function BaseBoxInformation({
  title,
  styleBox,
  styleTitleBox,
  children,
  backgroundColor,
}: PropsBaseBoxInfo) {
  return (
    <View
      style={[{backgroundColor: backgroundColor}, styles.viewBox, styleBox]}>
      <Text
        style={[
          {backgroundColor: backgroundColor},
          styles.textTitle,
          styleTitleBox,
        ]}>
        {title}
      </Text>
      <View style={[{backgroundColor: backgroundColor}, styles.container]}>
        {children}
      </View>
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
export default BaseBoxInformation;
