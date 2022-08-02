/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React, {useCallback, useRef, useState} from 'react';
import {View, FlatList} from 'react-native';
import ItemWatchVideo from './components/item-watch-video';
import {dataVideo} from './controller/api-test';
import {isPlayVideo} from './controller/watch-video-handle';
// const windowWidth = Dimensions.get('window').width;
// const renderItem = ({ item, index }) => (

// );
export default function ShopMessagesScreen() {
  const [currentVisibleIndex, setCurrentVisibleIndex] = useState<number>(0);

  const onViewRef = useRef((info: any) => {
    // Use viewable items in state or as intended
    if (info.viewableItems) {
      setCurrentVisibleIndex(info.viewableItems[0].index);
    }
  });
  const viewConfigRef = useRef({
    viewAreaCoveragePercentThreshold: 50,
    waitForInteraction: true,
    // minimumViewTime: 0,
  });

  const renderItem = ({item, index}: {item: any; index: number}) => (
    <ItemWatchVideo
      item={item}
      key={index}
      index={index}
      isPlayVideo={isPlayVideo(index, currentVisibleIndex)}
    />
  );

  const keyExtractor = useCallback((_, index) => index.toString(), []);
  return (
    <View>
      <FlatList
        data={dataVideo}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
        removeClippedSubviews={false} //android
        initialNumToRender={3}
        ListEmptyComponent={() => (
          <View style={{flex: 1, backgroundColor: 'yellow', height: 100}} />
        )}
        ListFooterComponent={() => (
          <View style={{flex: 1, backgroundColor: 'blue', height: 100}} />
        )}
        ListHeaderComponent={() => (
          <View style={{flex: 1, backgroundColor: 'green', height: 100}} />
        )}
      />
    </View>
  );
}
