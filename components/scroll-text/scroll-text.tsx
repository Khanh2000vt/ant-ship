import React, {useRef, useState} from 'react';
import {
  Dimensions,
  LayoutRectangle,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {getScrollToX} from './controller/scroll-text-handle';
import {ItemProps, ScrollTextProps} from './model/scroll-text-model';
const windowWidth = Dimensions.get('window').width;
function ScrollText({data, style, styleItem}: ScrollTextProps) {
  const scrollRef = useRef<ScrollView>(null);
  const [sizeItem, setSizeItem] = useState<ItemProps[]>([]);

  function handleMoveViewer(i: number) {
    scrollRef.current?.scrollTo({
      x: getScrollToX(sizeItem, i, windowWidth),
      y: 0,
      animated: true,
    });
  }

  function setInformationITem(layout: LayoutRectangle) {
    let item: ItemProps = {
      x: layout.x,
      width: layout.width,
    };
    setSizeItem([...sizeItem, item]);
  }

  return (
    <View style={styles.view}>
      <ScrollView
        contentContainerStyle={[styles.scroll, style]}
        horizontal
        ref={scrollRef}>
        {data.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => handleMoveViewer(index)}
              style={[styles.scrollItem, styleItem]}
              onLayout={event => setInformationITem(event.nativeEvent.layout)}>
              <Text>{item.title}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  view: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  scroll: {
    paddingHorizontal: 20,
  },
  scrollItem: {
    padding: 10,
    borderWidth: 1,
    marginHorizontal: 5,
  },
});

export default ScrollText;
