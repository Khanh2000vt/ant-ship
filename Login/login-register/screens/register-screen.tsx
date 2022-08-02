/* eslint-disable prettier/prettier */
/* eslint-disable no-useless-escape */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import BaseInputText from '../../../components/base-input-text';
let firstInput: boolean;
export default function RegisterScreen({navigation}: {navigation: any}) {
  const [user, setUser] = useState({
    text: '',
    isError: false,
  });
  const [email, setEmail] = useState({
    text: '',
    isError: false,
  });
  const [phone, setPhone] = useState({
    text: '',
    isError: false,
  });

  const ref_user = useRef<TextInput>();
  const ref_email = useRef<TextInput>();
  const ref_phone = useRef<TextInput>();

  const USER = 0,
    EMAIL = 1,
    PHONE = 2;

  useEffect(() => {
    firstInput = true;
  }, []);

  function handlePressUpdate() {
    firstInput = false;
    if (user.text === '') {
      setUser({...user, isError: true});
    } else if (!validateEmail(email.text)) {
      setEmail({...email, isError: true});
    } else if (phone.text.length <= 8) {
      setPhone({...phone, isError: true});
    } else if (!user.isError && !email.isError && !phone.isError) {
      navigation.navigate('WorkingStacks', {phone: phone.text});
    }
  }

  function handlePressReset() {
    firstInput = true;
    setUser({text: '', isError: false});
    setEmail({text: '', isError: false});
    setPhone({text: '', isError: false});
  }

  function validateEmail(emailCheck: any) {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (regex.test(emailCheck)) {
      return true;
    }
    return false;
  }
  function nextRefFocus(key: number) {
    if (user.text === '' && key === USER) {
      setUser({...user, isError: true});
    } else if (!validateEmail(email.text) && key === EMAIL) {
      setEmail({...email, isError: true});
    } else if (phone.text.length <= 8 && key === PHONE) {
      setPhone({...phone, isError: true});
    }
  }
  return (
    <View style={styles.container}>
      <ScrollView style={{flex: 1, height: '100%', borderWidth: 1}}>
        <View style={{flex: 1}}>
          <View
            style={{
              flex: 1,
              paddingTop: 50,
              alignItems: 'center',
            }}>
            <BaseInputText
              title="User Name"
              placeholder="User Name"
              onChangeText={(text: string) =>
                setUser({text: text, isError: false})
              }
              defaultValue={user.text}
              autoFocus={true}
              checkError={user.isError}
              styleInput={styles.input}
              styleView={styles.inputView}
              onRef={ref_user}
              onSubmitEditing={() => {
                firstInput && ref_email.current!.focus();
                nextRefFocus(USER);
              }}
            />

            <BaseInputText
              title="Email"
              placeholder="Email"
              onChangeText={(text: string) =>
                setEmail({text: text, isError: false})
              }
              defaultValue={email.text}
              keyboardType="email-address"
              checkError={email.isError}
              styleInput={styles.input}
              styleView={styles.inputView}
              onRef={ref_email}
              onSubmitEditing={() => {
                firstInput && ref_phone.current!.focus();
                nextRefFocus(EMAIL);
              }}
            />

            <BaseInputText
              title="Phone Number"
              placeholder="Phone Number"
              onChangeText={(text: string) =>
                setPhone({text: text, isError: false})
              }
              defaultValue={phone.text}
              checkError={phone.isError}
              styleInput={styles.input}
              styleView={styles.inputView}
              onRef={ref_phone}
              keyboardType="phone-pad"
            />
          </View>
          <View style={styles.options}>
            <TouchableOpacity
              style={[styles.reset, {backgroundColor: '#fff'}]}
              onPress={handlePressReset}>
              <Text style={styles.textButton}>Reset</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.register, {backgroundColor: '#fff'}]}
              onPress={handlePressUpdate}>
              <Text style={styles.textButton}>Update</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 40,
    borderWidth: 1,
    width: '100%',
    backgroundColor: '#fff',
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 200,
  },
  textButton: {
    borderWidth: 1,
    padding: 10,
    width: 100,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  inputView: {
    flex: 0.8,
    marginVertical: 5,
  },
  reset: {},
  register: {},
});
