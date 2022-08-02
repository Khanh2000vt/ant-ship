import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {isImageMedia} from '../controller/media-handing';
import {PropsItemViewer} from '../model/shop-order-models';
import ItemImageView from './item-media-view/item-image-view';
import ItemVideoView from './item-media-view/item-video-view';

function ItemViewer({
  item,
  onPressViewerMedia,
  backgroundColor,
  elevation,
}: PropsItemViewer) {
  function handlePress() {
    if (onPressViewerMedia !== undefined) {
      onPressViewerMedia(item);
    }
  }
  return (
    <View style={[styles.image, backgroundColor, elevation]}>
      <TouchableOpacity onPress={handlePress}>
        {isImageMedia(item.type) ? (
          <ItemImageView uri={item.uri} showIcon={true} />
        ) : (
          <ItemVideoView uri={item.uri} showIcon={true} />
        )}
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    height: 65,
    width: 65,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default ItemViewer;
