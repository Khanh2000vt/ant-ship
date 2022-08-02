/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import BaseBox from '../../components/base-box/base-box';
import {option} from './utils';

function InformationOptionsScreen({navigation}: {navigation: any}) {
  function handlePress(item: any) {
    // console.log(item);
    navigation.navigate('ShowInformationScreen', {
      item: item,
    });
  }
  return (
    <View style={styles.infoView}>
      <View style={styles.container}>
        {option.map((item, index) => {
          return (
            <BaseBox
              item={item}
              key={index}
              styleBox={[
                styles.styleBox,
                {width: index === 2 ? '100%' : '45%'},
              ]}
              styleTitleBox={styles.styleTitleBox}
              onPress={handlePress}>
              <View>
                <Text numberOfLines={2}>{item.description}</Text>
                <Text style={styles.textReadMore}>{'Read More'}</Text>
              </View>
            </BaseBox>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  infoView: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  styleBox: {
    borderColor: 'blue',
    marginVertical: 10,
  },
  styleTitleBox: {
    color: '#000',
  },
  textReadMore: {
    fontWeight: 'bold',
    color: 'blue',
    textAlign: 'right',
  },
});
export default InformationOptionsScreen;
