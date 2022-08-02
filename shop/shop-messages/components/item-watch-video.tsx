/* eslint-disable react-native/no-inline-styles */
import React, {memo, useRef, useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Video from 'react-native-video';
import {PropsWatchVideo} from '../model/watch-video-model';

const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;

function ItemWatchVideo({
  item,
  // currentIndex,
  // currentVisibleIndex,
  isPlayVideo,
  index,
}: PropsWatchVideo) {
  const [isShow, setIsShow] = useState<boolean>(false);
  const player = useRef<Video>(null);

  function handleLoad(data: any) {
    player.current?.seek(0);
    console.log('test: ', data.naturalSize);
    // setDuration(getDurationToTime(data.duration));
  }
  function handlePress() {
    setIsShow(!isShow);
  }
  return (
    <View style={styles.view} key={index}>
      <View style={styles.videoView}>
        <Video
          source={{uri: item.sources[0]}}
          ref={player}
          onLoad={handleLoad}
          style={styles.background}
          // controls={currentIndex === currentVisibleIndex ? true : false}
          repeat={true}
          paused={!isPlayVideo}
          resizeMode="contain"
          // poster={'https://baconmockup.com/300/200/'}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.textTitle}>{item.title}</Text>
        {isShow && <Text>{item.description}</Text>}
        <TouchableOpacity onPress={handlePress}>
          <Text
            style={[styles.textButton, {color: isShow ? 'violet' : 'blue'}]}>
            Readme
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    elevation: 1,
    marginVertical: 5,
    borderRadius: 5,
  },
  container: {
    marginVertical: 10,
  },
  textButton: {
    // color: 'blue',
    fontWeight: 'bold',
  },
  background: {
    flex: 1,
    backgroundColor: '#ababab',
  },
  videoView: {
    flex: 1,
    height: (windowWidth * 3) / 4,
  },
  textTitle: {
    fontWeight: 'bold',
  },
});
export default memo(ItemWatchVideo);
