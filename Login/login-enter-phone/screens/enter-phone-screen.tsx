/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import BaseInputText from '../../../components/base-input-text';
export default function EnterPhoneScreen({navigation}: {navigation: any}) {
  const [phone, setPhone] = useState('');
  const [error, setError] = useState<boolean>();

  useEffect(() => {
    setError(false);
  }, [phone]);

  function handleContinue() {
    if (phoneCheck(phone)) {
      navigation.navigate('OTPScreen', {
        phone: phone,
      });
    } else {
      setError(true);
    }
  }

  function phoneCheck(inputTxt: string) {
    const phoneNo = /^\d{10}$/;
    if (inputTxt.match(phoneNo)) {
      return true;
    }
    return false;
  }
  return (
    <View style={styles.container}>
      <View style={{flex: 1, width: '80%'}}>
        <BaseInputText
          title="Phone Number"
          placeholder="Phone Number"
          onChangeText={(text: string) => {
            setPhone(text);
          }}
          defaultValue={phone}
          keyboardType="phone-pad"
          maxLength={10}
          autoFocus={true}
          checkError={error}
          styleInput={styles.input}
          styleView={styles.viewInput}
        />
      </View>

      {phone.length > 2 ? (
        <TouchableOpacity
          onPress={handleContinue}
          style={{alignSelf: 'center'}}>
          <Text style={styles.button}>Submit</Text>
        </TouchableOpacity>
      ) : (
        <View style={{alignSelf: 'center', opacity: 0.2}}>
          <Text style={styles.button}>Submit</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    paddingTop: 50,
    alignItems: 'center',
  },
  input: {
    height: 50,
    // width: '80%',
    width: '100%',
    borderWidth: 1,
    // marginVertical: 5,
    backgroundColor: '#fff',
    padding: 5,
    paddingHorizontal: 10,
  },
  viewInput: {
    flex: 0.8,
    width: '100%',
    // borderWidth: 1,
    alignItems: 'center',
  },

  button: {
    borderWidth: 1,
    height: 40,
    width: 100,
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: '#fff',
    marginTop: 50,
  },
});
