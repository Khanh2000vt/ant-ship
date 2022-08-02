/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {PropsItemSettings} from '../model/settings-model';
import {_UPDATED} from '../utils';

function ItemOptionSettings({
  name,
  container,
  index,
  onPress,
  isShow,
  flag,
}: PropsItemSettings) {
  const ref = useRef(null);
  const [isChoose, setIsChoose] = useState<boolean>(false);
  useEffect(() => {
    if (!isShow) {
      setIsChoose(false);
    }
  }, [isShow]);

  function handlePress(
    nameSelect: string,
    refSelect: any,
    indexSelect: number,
  ) {
    if (flag) {
      onPress(nameSelect, indexSelect, refSelect);
      setTimeout(() => {
        setIsChoose(true);
      }, 200);
    } else {
      onPress(nameSelect, indexSelect);
    }
  }
  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <View
        style={[
          styles.view,
          {backgroundColor: index % 2 ? '#fff' : '#f9f9f9'},
        ]}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress(name, ref, index)}
          ref={ref}>
          <Text style={styles.titleText}>{name}</Text>
          <View style={styles.chooseOption}>
            {name === _UPDATED && <Text>v0.1</Text>}
            <Text>{container ? container.title : ''}</Text>
            <Ionicons
              name={isChoose ? 'chevron-down' : 'chevron-forward'}
              size={20}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    height: 40,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    paddingHorizontal: 20,
  },
  titleText: {
    fontWeight: 'bold',
  },
  chooseOption: {
    flexDirection: 'row',
  },
});

export default ItemOptionSettings;
