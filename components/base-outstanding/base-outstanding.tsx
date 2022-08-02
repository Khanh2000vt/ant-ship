/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Animated,
  LayoutRectangle,
} from 'react-native';
import Loading from './components/loading';
import {getDataNotRepeat, getDataRepeat} from './controller/outstanding-handle';
import {LayoutProps, OutStandingProps} from './model/outstanding-model';

const {width} = Dimensions.get('window');

function BaseOutstanding({
  data,
  itemViewRender,
  repeat = false,
  ratioToWidth = 0.72,
  offset = 100,
  ratioZoomOut = 0.8,
  smooth = false,
  zoomOutWhenScrolling = false,
}: OutStandingProps) {
  // const
  const ITEM_SIZE = width * ratioToWidth;
  const SPACER_ITEM_SIZE = (width - ITEM_SIZE) / 2;
  const length = data?.length ? data.length : 0;
  // Hooks
  const [list, setList] = useState<any[]>([]);
  const [sizeLayout, setSizeLayout] = useState<LayoutProps[]>([]);
  const [isStop, setIsStop] = useState<boolean>(true);
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatRef = useRef<FlatList>(null);
  // function
  // console.log('sizeLayout: ', sizeLayout.length, list.length);
  useEffect(() => {
    if (data) {
      if (repeat) {
        // setList(getDataRepeat(data));
      } else {
        setList(getDataNotRepeat(data));
      }
    }
  }, [data, repeat]);
  const keyExtractor = useCallback((_, index) => index.toString(), []);
  const renderItem = ({item, index}: {item: any; index: number}) => {
    if (item === null) {
      return <View style={{width: SPACER_ITEM_SIZE}} />;
    }
    let inputRange = [
      (index - 2) * ITEM_SIZE,
      (index - 1) * ITEM_SIZE,
      index * ITEM_SIZE,
    ];
    if (zoomOutWhenScrolling && smooth) {
      if (!isStop) {
        inputRange = [1, 1, 1];
      }
    }

    const scale = scrollX.interpolate({
      inputRange,
      outputRange: [ratioZoomOut, 1, ratioZoomOut],
    });
    return (
      <TouchableOpacity
        style={{width: ITEM_SIZE}}
        // onLayout={event => setInformationITem(event.nativeEvent.layout)}
      >
        <Animated.View style={{transform: [{scale}]}}>
          {itemViewRender({item, index})}
        </Animated.View>
      </TouchableOpacity>
    );
  };

  // function setInformationITem(layout: LayoutRectangle) {
  //   let item: LayoutProps = {
  //     x: layout.x,
  //     width: layout.width,
  //   };
  //   setSizeLayout([...sizeLayout, item]);
  // }

  // function handleLayoutFlatList() {
  //   if (repeat) {
  //     flatRef.current?.scrollToIndex({
  //       animated: false,
  //       index: length,
  //       viewPosition: 0,
  //     });
  //   }
  // }

  function handleScroll(nativeEvent: any) {
    if (repeat) {
      const {layoutMeasurement, contentOffset, contentSize} = nativeEvent;
      // console.log('layoutMeasurement: ', layoutMeasurement);
      // console.log('contentOffset: ', contentOffset);
      // console.log('contentSize: ', contentSize);
      // console.log('---------------');
    }
  }

  function handleScrollBeginDrag() {
    setIsStop(false);
  }
  function handleScrollEndDrag() {
    setIsStop(true);
  }

  if (length === 0) {
    return <Loading />;
  }

  return (
    <View
      style={styles.container}
      // onLayout={handleLayoutFlatList}
    >
      <Animated.FlatList
        showsHorizontalScrollIndicator={false}
        ref={flatRef}
        data={list}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        horizontal
        contentContainerStyle={styles.contentContainerStyle}
        snapToInterval={ITEM_SIZE}
        onScrollBeginDrag={handleScrollBeginDrag}
        onMomentumScrollEnd={handleScrollEndDrag}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX,
                },
              },
            },
          ],
          {
            useNativeDriver: true,
            listener: ({nativeEvent}) => handleScroll(nativeEvent),
          },
        )}
        decelerationRate={smooth ? undefined : 0}
        bounces={false}
        scrollEventThrottle={16}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainerStyle: {
    alignItems: 'center',
  },
});

export default BaseOutstanding;
