/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
} from 'react-native';
import Video from 'react-native-video';
import BaseHeader from '../../components/base-header';
import ItemViewer from './components/item-viewer';
import {isImageMedia} from './controller/media-handing';
import {handleDeleteItemMedia} from './controller/order-product-handing';
import ImageViewer from 'react-native-image-zoom-viewer';
import Ionicons from 'react-native-vector-icons/Ionicons';

function ProductMediaViewer({
  route,
  navigation,
}: {
  navigation: any;
  route: any;
}) {
  const WIDTH_LAYOUT_ITEM = 65;
  const MOVE_LEFT = -1;
  const MOVE_RIGHT = 1;

  const {indexItem, dataMedia, onDeleteMedia} = route.params;
  const [data, setData] = useState<any[]>([]);
  const [selectedItem, setSelectedItem] = useState(dataMedia[indexItem]);
  const [indexSelectItem, setIndexSelectItem] = useState<number>(indexItem);

  const flatRef = useRef<FlatList>(null);

  const renderItem = ({item}: any) => {
    const backgroundColor = item.id === selectedItem.id ? '#ababab' : '#fff';
    const elevation = item.id === selectedItem.id ? 10 : 0;
    return (
      <ItemViewer
        item={item}
        onPressViewerMedia={handlePressViewerMedia}
        backgroundColor={{backgroundColor}}
        elevation={{elevation}}
      />
    );
  };

  useEffect(() => {
    setData(dataMedia);
    setSelectedItem(dataMedia[indexItem]);
  }, []);
  useEffect(() => {
    if (data.indexOf(selectedItem) !== -1) {
      setIndexSelectItem(data.indexOf(selectedItem));
    }
  }, [selectedItem]);

  function handlePressLeft() {
    navigation.goBack();
  }

  function handlePressRight() {
    let index =
      indexSelectItem === data.length - 1
        ? indexSelectItem - 1
        : indexSelectItem + 1;

    console.log(
      'indexSelect-index-length',
      indexSelectItem,
      index,
      data.length,
    );

    //handle
    Alert.alert('Thông báo', 'Bạn có chắc chắn muốn xóa ảnh?', [
      {
        text: 'Thoát',
        style: 'cancel',
      },
      {
        text: 'Đồng ý',
        onPress: () => handleDeleteMedia(indexSelectItem, index),
      },
    ]);
  }
  function handleDeleteMedia(indexSelect: number, index: number) {
    onDeleteMedia(indexSelect);
    if (data.length === 1) {
      navigation.goBack();
    } else {
      setData(handleDeleteItemMedia(data, indexSelect));
      setSelectedItem(data[index]);
    }
  }

  function handlePressViewerMedia(item: any) {
    setSelectedItem(item);
  }

  function handleMoveViewer(offset: number) {
    const indexMove = indexSelectItem + offset;
    console.log('test: ', indexSelectItem, indexMove);
    setSelectedItem(data[indexMove]);
    flatRef.current?.scrollToIndex({
      animated: true,
      index: indexMove,
      viewPosition: 0.5,
    });
  }

  function handleLayoutFlatList() {
    flatRef.current?.scrollToIndex({
      animated: true,
      index: indexItem,
      viewPosition: 0.5,
    });
  }
  return (
    <View style={styles.container}>
      <BaseHeader
        title="Media Viewer"
        ViewHeaderLeft={() => <Text style={{color: 'white'}}>Back</Text>}
        ViewHeaderRight={() => <Text style={{color: 'white'}}>Delete</Text>}
        onPressLeft={handlePressLeft}
        onPressRight={handlePressRight}
      />
      <View style={styles.viewer}>
        {isImageMedia(selectedItem.type) ? (
          <ImageViewer
            imageUrls={[{url: selectedItem.uri}]}
            saveToLocalByLongPress={false}
            maxOverflow={0}
            renderIndicator={() => <View />}
            backgroundColor="#ababab"
          />
        ) : (
          <Video
            source={{uri: selectedItem.uri}}
            style={styles.background}
            controls={true}
            // repeat={true}
            paused={false}
            resizeMode="contain"
          />
        )}
        <View style={styles.controls}>
          <View />
          <View style={styles.controlsOption}>
            {indexSelectItem !== 0 ? (
              <TouchableOpacity
                style={styles.controlsButton}
                onPress={() => handleMoveViewer(MOVE_LEFT)}>
                <Ionicons name="chevron-back-circle" size={25} />
              </TouchableOpacity>
            ) : (
              <View />
            )}
            {indexSelectItem !== data.length - 1 && (
              <TouchableOpacity
                style={styles.controlsButton}
                onPress={() => handleMoveViewer(MOVE_RIGHT)}>
                <Ionicons name="chevron-forward-circle" size={25} />
              </TouchableOpacity>
            )}
          </View>
          <View />
        </View>
      </View>
      <View style={styles.listMedia} onLayout={handleLayoutFlatList}>
        <FlatList
          ref={flatRef}
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal={true}
          getItemLayout={(dataLayout, index) => ({
            length: WIDTH_LAYOUT_ITEM,
            offset: WIDTH_LAYOUT_ITEM * index,
            index,
          })}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  viewer: {
    flexGrow: 1,
    backgroundColor: '#ababab',
    // width: '100%',
    // height: '100%',
  },
  listMedia: {
    width: '100%',
  },
  background: {
    flex: 1,
    backgroundColor: '#ababab',
    // width: 100,
    // height: 100,
    // alignSelf: 'center',
  },
  controls: {
    position: 'absolute',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 15,
    top: 0,
    bottom: 0,
  },
  controlsOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    opacity: 0.8,
  },
  controlsButton: {
    padding: 8,
  },
});

export default ProductMediaViewer;
