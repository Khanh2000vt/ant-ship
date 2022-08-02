/* eslint-disable prettier/prettier */

import React, {useRef} from 'react';
import {Animated, Easing, StyleSheet} from 'react-native';

interface Props {
  children: React.ReactNode;
  style?: any;
  isShow: any;
}

export default function AnimationTitle({
  children,
  style,
  isShow,
}: Props) {
  const animMove = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
  const animFade = useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    Animated.parallel([
      Animated.timing(animMove, {
        toValue: isShow ? -3 : 3,
        duration: 140,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
      Animated.timing(animFade, {
        toValue: isShow ? 1 : 0,
        duration: 140,
        useNativeDriver: false,
      }, ),
    ]).start();
  }, [animFade, animMove, isShow]);

  return (
    <Animated.View // Special animatable View
      style={{
        ...style,
        ...styles.container,
        opacity: animFade,
        transform: [
          {
            translateY: animMove,
          },
        ],
      }}>
      {children}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    textAlign: 'left',
    width: '100%',
    // borderWidth: 1,
    // height: 20,
  },
});
