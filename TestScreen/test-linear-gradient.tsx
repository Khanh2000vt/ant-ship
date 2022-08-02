import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
function TestLinearGradient() {
  const [colorShow, setColorShow] = useState({
    count: 0,
    colorTop: '#000000',
    colorBottom: '#cccccc',
  });

  const incrementColor = (color: string, step: number) => {
    const intColor = parseInt(color.slice(1), 16);
    const newIntColor = (intColor + step).toString(16);
    return `#${'0'.repeat(6 - newIntColor.length)}${newIntColor}`;
  };

  useEffect(() => {
    setTimeout(() => {
      setColorShow({
        count: colorShow.count + 1,
        colorTop: incrementColor(colorShow.colorTop, 1),
        colorBottom: incrementColor(colorShow.colorBottom, -1),
      });
      //   console.log('colorShow: ', colorShow);
    }, 20);
  }, [colorShow]);
  return (
    <View style={styles.view}>
      <LinearGradient
        // start={{x: 0, y: 0}}
        // end={{x: 1, y: 0}}
        colors={[colorShow.colorTop, colorShow.colorBottom]}
        style={styles.linearGradient}>
        <Text style={styles.buttonText}>Sign in with Facebook</Text>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

export default TestLinearGradient;
