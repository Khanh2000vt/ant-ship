/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-useless-escape */

import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Linking} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BaseInputText from '../../../components/base-input-text';
export default function HelpScreen() {
  const phoneNumber = '091234567';
  const [email, setEmail] = useState({
    text: '',
    isError: false,
  });

  function validateEmail(emailCheck: any) {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (regex.test(emailCheck)) {
      return true;
    }
    return false;
  }

  function handlePressSend() {
    if (!validateEmail(email.text)) {
      setEmail({...email, isError: true});
    }
  }
  function handlePressTel() {
    Linking.openURL(`tel:${phoneNumber}`);
  }
  return (
    <View style={styles.viewHelp}>
      <View style={styles.container}>
        <View style={styles.sendContainer}>
          <BaseInputText
            title="Email"
            placeholder="Email"
            onChangeText={(text: string) => setEmail({...email, text: text})}
            defaultValue={email.text}
            keyboardType="email-address"
            checkError={email.isError}
            styleInput={styles.input}
            styleView={styles.viewInput}
          />
          <TouchableOpacity style={styles.sendButton} onPress={handlePressSend}>
            <Text style={styles.textButton}>Send</Text>
          </TouchableOpacity>
        </View>
        <View style={{width: '100%'}}>
          <TouchableOpacity style={styles.button} onPress={handlePressTel}>
            <Ionicons name="call" size={20} />
            <Text style={styles.textButton}>{phoneNumber}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewHelp: {
    flex: 1,
    // justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 10,
  },
  container: {
    width: '80%',
  },
  input: {
    height: 40,
    borderWidth: 1,
    backgroundColor: '#fff',
    width: '100%',
  },
  button: {
    flexDirection: 'row',
    borderWidth: 1,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    backgroundColor: '#fff',
    paddingVertical: 8,
    width: '100%',
  },
  textButton: {
    marginHorizontal: 10,
  },
  sendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  sendButton: {
    borderWidth: 1,
    borderLeftWidth: 0,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 60,
    marginTop: 8,
  },
  viewInput: {
    flex: 1,
  },
});
