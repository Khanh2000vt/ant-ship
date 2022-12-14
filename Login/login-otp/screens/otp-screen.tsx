/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-shadow */

import React, {useState, useEffect, useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import OTPInputView from '../../components/custom-otp/dist/index';
import {RequestContext} from '../../../components/context/request-context';
import {KeyRequest} from '../../../components/key-request';
export default function OTPScreen({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const RESEND_OTP_TIME_LIMIT = 5;
  let resendOtpTimerInterval: any;

  const context = useContext(RequestContext);
  const [code, setCode] = useState<string>('');
  const [resendButtonDisabledTime, setResendButtonDisabledTime] =
    useState<number>(RESEND_OTP_TIME_LIMIT);
  //to start resent otp option
  function startResendOtpTimer() {
    if (resendOtpTimerInterval) {
      clearInterval(resendOtpTimerInterval);
    }
    resendOtpTimerInterval = setInterval(() => {
      if (resendButtonDisabledTime <= 0) {
        clearInterval(resendOtpTimerInterval);
      } else {
        setResendButtonDisabledTime(resendButtonDisabledTime - 1);
      }
    }, 1000);
  }

  //on click of resend button
  function onResendOtpButtonPress() {
    //clear input field
    setCode('');
    setResendButtonDisabledTime(RESEND_OTP_TIME_LIMIT);
    startResendOtpTimer();
    // resend OTP Api call
    // todo
    console.log('todo: Resend OTP');
  }

  //start timer on screen on launch
  useEffect(() => {
    startResendOtpTimer();
    return () => {
      if (resendOtpTimerInterval) {
        clearInterval(resendOtpTimerInterval);
      }
    };
  }, [resendButtonDisabledTime]);

  useEffect(() => {
    // ref_OPT.current;
    // ref_OPT.current.autoFocusOnLoad = true;
    // console.log('key: ', Keyboard);
  }, []);

  function handleSubmitOTP() {
    if (context.request === KeyRequest.REGISTER) {
      navigation.navigate('RegisterScreen');
    } else if (context.request === KeyRequest.FORGOT_PASSWORD) {
      navigation.navigate('NewPasswordScreen');
    }
  }

  function handleReturnLogin() {
    navigation.popToTop();
  }
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.textTitle}>Verify the Authorization Code </Text>
        <Text>Sent to {route.params.phone}</Text>
      </View>
      <OTPInputView
        style={styles.OTPInputView}
        pinCount={6}
        code={code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
        onCodeChanged={text => setCode(text)}
        // autoFocusOnLoad={true}
        codeInputFieldStyle={styles.underlineStyleBase}
        codeInputHighlightStyle={styles.underlineStyleHighLighted}
        keyboardType="number-pad"
        editable={true}
        // placeholderCharacter={':)'}
        // ref={ref_OPT}
        onCodeFilled={code => {
          console.log(`Code is ${code}, you are good to go!`);
        }}
      />

      <View style={styles.options}>
        <View
          style={{flexDirection: 'row', marginBottom: 30, alignSelf: 'center'}}>
          {resendButtonDisabledTime <= 0 ? (
            <TouchableOpacity
              onPress={onResendOtpButtonPress}
              style={{padding: 5}}>
              <Text style={{fontWeight: 'bold', color: 'blue', fontSize: 12}}>
                Resend Authorization Code?
              </Text>
            </TouchableOpacity>
          ) : (
            <View>
              <Text style={{fontSize: 12}}>
                Resend Authorization Code in {resendButtonDisabledTime} sec
              </Text>
            </View>
          )}
        </View>
        {code.length === 6 ? (
          <TouchableOpacity
            onPress={handleSubmitOTP}
            style={{alignSelf: 'center'}}>
            <Text style={styles.button}>Submit</Text>
          </TouchableOpacity>
        ) : (
          <View style={{alignSelf: 'center', opacity: 0.2}}>
            <Text style={styles.button}>Submit</Text>
          </View>
        )}
      </View>
      <TouchableOpacity onPress={handleReturnLogin} style={styles.buttonLogin}>
        <Text style={styles.textLogin}>Login?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
    flex: 1,
  },
  title: {
    alignSelf: 'flex-start',
    marginTop: 30,
  },
  textTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  OTPInputView: {
    width: '80%',
    height: 150,
  },

  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: '#03DAC6',
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 2,
    borderColor: '#333333',
    color: '#333333',
  },

  underlineStyleHighLighted: {
    borderColor: 'blue',
    color: 'blue',
  },
  button: {
    borderWidth: 1,
    height: 40,
    width: 100,
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: '#fff',
  },
  options: {
    width: '100%',
    // borderWidth: 1,
  },
  buttonLogin: {
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 30,
    right: 30,
  },
  textLogin: {
    color: 'blue',
    fontWeight: 'bold',
    alignSelf: 'flex-end',
  },
  containerOTP: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  textInput: {
    width: 30,
    height: 40,
    borderWidth: 2,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
