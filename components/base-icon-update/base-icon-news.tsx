/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

const borderRadius = 8;
// const sizeTriangle = 10;
interface Props {
  type?: 'triangle' | 'circle' | undefined;
  style?: any;
}
export default function BaseIconNews({style, type = undefined}: Props) {
  const triangle_icon = require('../../assets/img/triangle5px.png');
  function isTriangle() {
    if (type === 'triangle') {
      return true;
    }
    return false;
  }
  return (
    <View style={[styles.container, style]}>
      {isTriangle() ? (
          <Image source={triangle_icon} style={style.triangle} />
      ) : (
        <View style={styles.viewIcon} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },
  viewIcon: {
    backgroundColor: 'red',
    width: borderRadius,
    height: borderRadius,
    borderRadius: borderRadius,
  },
  triangle: {
    resizeMode: 'contain',
  },
});
