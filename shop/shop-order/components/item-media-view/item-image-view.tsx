/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {PropsContainerMedia} from '../../model/shop-order-models';

function ItemImageView({uri, showIcon}: PropsContainerMedia) {
  return (
    <View>
      <Image
        resizeMode="cover"
        resizeMethod="scale"
        style={{width: 50, height: 50}}
        source={{uri: uri}}
      />
      {showIcon && (
        <Ionicons name="image" size={15} style={styles.icon} color="white" />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    position: 'absolute',
    bottom: 0,
    left: 3,
    opacity: 0.6,
  },
});
export default ItemImageView;
