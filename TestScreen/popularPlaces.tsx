/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useRef} from 'react';
import {
  Animated,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
interface Location {
  name: string;
  price: string;
  country: string;
  image: ImageSourcePropType;
}
const WIDTH = 200;
const SIZE = 180;
const HEIGHT = 280;
const PopularPlaces = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const keyExtractor = useCallback((_, index) => index.toString(), []);

  const renderItem = ({item, index}: {item: any; index: number}) => {
    const inputRange = [(index - 1) * SIZE, index * SIZE, (index + 1) * SIZE];
    const scale = scrollX.interpolate({
      inputRange,
      outputRange: [0.8, 1, 0.8],
    });
    return (
      <TouchableOpacity
        onPress={() => {
          // navigation.navigate('ItemShowScreen');
        }}>
        <Animated.View
          style={{
            height: HEIGHT,
            width: WIDTH,
            borderRadius: 15,
            borderWidth: 0.5,
            borderColor: 'grey',
            flexDirection: 'column',
            padding: 8,
            transform: [{scale}],
            marginHorizontal: 5,
          }}>
          <Text style={{color: '#0236AC', marginTop: 10, fontSize: 18}}>
            {item.name}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              marginTop: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 14}}>{item.country}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: '#00CED1', fontSize: 14}}>
                ${item.price.toString()}/
              </Text>
              <Text style={{fontSize: 14, color: '#6A6A6A'}}>person</Text>
            </View>
          </View>
        </Animated.View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{flex: 5}}>
      <Animated.FlatList
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
          {useNativeDriver: true},
        )}
        contentContainerStyle={{alignItems: 'center'}}
        snapToInterval={SIZE}
        // decelerationRate={0}
        data={list}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        // ios
        scrollEventThrottle={16}
        bounces={false}
      />
    </View>
  );
};

const list = [
  {
    name: 'Hanoi',
    price: '48',
    country: 'VietNam',
  },
  {
    name: 'Tokyo',
    price: '48',
    country: 'Japan',
  },
  {
    name: 'Paris',
    price: '48',
    country: 'France',
  },
  {
    name: 'Rome',
    price: '48',
    country: 'Italy',
  },
  {
    name: 'Hanoi',
    price: '48',
    country: 'VietNam',
  },
  {
    name: 'Tokyo',
    price: '48',
    country: 'Japan',
  },
  {
    name: 'Paris',
    price: '48',
    country: 'France',
  },
  {
    name: 'Rome',
    price: '48',
    country: 'Italy',
  },
] as Array<Location>;
export default PopularPlaces;
