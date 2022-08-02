/* eslint-disable no-lone-blocks */
import React, {useRef, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Video from 'react-native-video';
import {getDurationToTime} from '../../controller/media-handing';
import {PropsContainerMedia} from '../../model/shop-order-models';

function ItemVideoView({uri, showIcon}: PropsContainerMedia) {
  const [duration, setDuration] = useState<string>('0:00');
  const player = useRef<Video>(null);

  function handleLoad(data: any) {
    player.current?.seek(0);
    setDuration(getDurationToTime(data.duration));
  }
  return (
    <View>
      <Video
        source={{uri: uri}} // Can be a URL or a local file.
        ref={player}
        onLoad={handleLoad}
        style={styles.backgroundVideo}
        paused={true}
      />
      <View>
        {showIcon && (
          <Ionicons
            name="videocam"
            size={15}
            color="white"
            style={styles.icon}
          />
        )}
        <Text style={styles.text}>{duration}</Text>
      </View>
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
  backgroundVideo: {
    width: 50,
    height: 50,
  },
  text: {
    fontSize: 8,
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: 'gray',
    paddingHorizontal: 5,
    borderRadius: 5,
  },
});
export default ItemVideoView;

{
  /* <Video
source={{uri: uri}} // Can be a URL or a local file.
onLoad={handleLoad}
// ref={ref} // Store reference
// onBuffer={onBuffer} // Callback when remote video is buffering
// onError={this.videoError} // Callback when video cannot be loaded
style={styles.backgroundVideo}
// controls={true}
// poster={'https://baconmockup.com/300/200/'}
// rate={1.0}
// repeat={true}
// resizeMode={'contain'}
paused={true}
// hideShutterView={true}
// minLoadRetryCount={5}
/> */
}
