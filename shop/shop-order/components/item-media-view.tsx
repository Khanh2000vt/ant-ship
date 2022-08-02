import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {isImageMedia} from '../controller/media-handing';
import {ItemMedia} from '../model/shop-order-models';
import ItemImageView from './item-media-view/item-image-view';
import ItemVideoView from './item-media-view/item-video-view';
function ItemMediaView({
  uri,
  type,
  index,
  onPressDelete,
  onPressViewerMedia,
}: ItemMedia) {
  return (
    <View key={index} style={styles.image}>
      <TouchableOpacity
        onPress={() => onPressViewerMedia(index)}
        style={styles.body}>
        {isImageMedia(type) ? (
          <ItemImageView uri={uri} showIcon={true} />
        ) : (
          <ItemVideoView uri={uri} showIcon={true} />
        )}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => onPressDelete(index)}>
        <Text style={styles.text}>x</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    margin: 5,
  },
  body: {
    borderWidth: 1,
    borderColor: '#cfcfcf',
  },
  button: {
    position: 'absolute',
    backgroundColor: '#e30202',
    height: 20,
    width: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    top: -6,
    right: -6,
  },
  text: {
    margin: 0,
    color: 'white',
  },
});
export default ItemMediaView;
