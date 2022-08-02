/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React, {useState, useRef} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';
import BaseInputPassword from '../../../../components/base-input-password';
export default function ChangePasswordScreen({navigation}: {navigation: any}) {
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState<boolean>(false);
  const [hidePassword, setHidePassword] = useState<boolean>(true);
  const ref_confirm = useRef<TextInput>();

  function handlePressContinue() {
    if (password !== confirm) {
      setError(true);
    } else {
      navigation.navigate('LoginScreen');
    }
  }

  function handleReturnLogin() {
    navigation.navigate('LoginScreen');
  }

  function handlePressEye() {
    setHidePassword(!hidePassword);
  }

  return (
    <View style={styles.container}>
      <View style={{marginBottom: 100, width: '80%'}}>
        <BaseInputPassword
          title="Password"
          placeholder="Password"
          autoFocus={true}
          onChangeText={(text: string) => {
            setPassword(text);
          }}
          defaultValue={password}
          onSubmitEditing={() => {
            ref_confirm.current?.focus();
          }}
          onCallBackPress={handlePressEye}
          showText={hidePassword}
        />

        <BaseInputPassword
          title="Confirm Password"
          placeholder="Confirm Password"
          onChangeText={(text: string) => {
            setConfirm(text);
          }}
          defaultValue={confirm}
          onRef={ref_confirm}
          onCallBackPress={handlePressEye}
          checkError={error}
          showText={hidePassword}
        />
      </View>

      {password.length >= 6 ? (
        <TouchableOpacity
          onPress={handlePressContinue}
          style={{alignSelf: 'center'}}>
          <Text style={styles.button}>Continue</Text>
        </TouchableOpacity>
      ) : (
        <View style={{alignSelf: 'center', opacity: 0.2}}>
          <Text style={styles.button}>Continue</Text>
        </View>
      )}

      <TouchableOpacity onPress={handleReturnLogin} style={styles.buttonLogin}>
        <Text style={styles.textLogin}>Login?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    // justifyContent: 'center',
    paddingTop: 50,
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderWidth: 1,
    marginVertical: 5,
  },
  inputPass: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    borderWidth: 1,
    height: 40,
    width: 100,
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: '#fff',
  },
  buttonLogin: {
    justifyContent: 'flex-end',
    position: 'absolute',
    bottom: 30,
    right: 30,
  },
  textLogin: {
    color: 'blue',
    fontWeight: 'bold',
    alignSelf: 'flex-end',
  },
  eyeButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
  },
});
