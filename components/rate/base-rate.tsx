import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Star from './assets/star.svg';
import StarOutline from './assets/star_outline.svg';
import {PropsRate} from './model/rate-model';
function BaseRate({onPress}: PropsRate) {
  const array = new Array(5).fill('');
  const [elect, setElect] = useState<number>(4);
  const SIZE = 30;
  function handlePress(index: number) {
    setElect(index);
    if (onPress) {
      onPress(index);
    }
  }
  return (
    <View style={styles.view}>
      {array.map((_, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() => handlePress(index)}
            style={styles.star}>
            {index > elect ? (
              <StarOutline width={SIZE} height={SIZE} fill="red" color="#000" />
            ) : (
              <Star width={SIZE} height={SIZE} fill="#f0d502" color="#000" />
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  star: {
    // backgroundColor: 'red',
    marginHorizontal: 5,
    padding: 5,
  },
});
export default BaseRate;
