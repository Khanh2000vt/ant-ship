/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useContext} from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import OptionsLogin from '../../components/items/options-login';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {KeyRequest} from '../../../components/key-request';
import {ThemeColor} from '../../../assets/themes/value';
import {RequestContext} from '../../../components/context/request-context';
import BaseInputText from '../../../components/base-input-text';
import BaseInputPassword from '../../../components/base-input-password';

export default function LoginScreen({navigation}: {navigation: any}) {
  const context = useContext(RequestContext);

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isVN, setIsVN] = useState<boolean>(true);
  const [isAgree, setIsAgree] = useState<boolean>(true);

  const logo = '../../../assets/img/logo.png';
  const iconVN = '../../../assets/img/VN-photo.png';
  const iconUK = '../../../assets/img/UK-photo.png';
  const logo_facebook = '../../../assets/img/logo-facebook.png';
  const logo_apple = '../../../assets/img/logo-apple.png';
  const logo_google = '../../../assets/img/logo-google.png';

  function handleLanguageVN() {
    setIsVN(true);
  }

  function handleLanguageUK() {
    setIsVN(false);
  }

  console.log('agree: ', isAgree);

  function alertTerm() {
    Alert.alert(
      'Thông báo',
      'Bạn chưa đồng ý điều khoản dịch vụ',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
      ],
      {cancelable: true},
    );
  }

  function handleRegister() {
    if (isAgree) {
      context.toggleRequest(KeyRequest.REGISTER);
      navigation.navigate('EnterPhoneScreen');
    } else {
      alertTerm();
    }
  }

  function handleForgotPass() {
    if (isAgree) {
      context.toggleRequest(KeyRequest.FORGOT_PASSWORD);
      navigation.navigate('EnterPhoneScreen');
    } else {
      alertTerm();
    }
  }

  function handlePressLogin() {
    // context.toggleRequest(KeyRequest.)
    if (isAgree) {
      navigation.navigate('ShopStack');
    } else {
      alertTerm();
    }
  }

  function handlePressHelp() {
    navigation.navigate('HelpScreen');
  }

  function handleApple() {
    context.toggleRequest(KeyRequest.APPLE);
    navigation.navigate('MapsTest');
  }

  function handleGoogle() {
    context.toggleRequest(KeyRequest.GOOGLE);
    navigation.navigate('TestTime');
  }

  function handleFacebook() {
    context.toggleRequest(KeyRequest.FACEBOOK);
    navigation.navigate('InformationOptionsScreen');
  }

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {/* Đăng nhập input */}
      <View style={styles.container}>
        <Image source={require(logo)} style={styles.logo} />

        <View style={styles.viewInput}>
          <BaseInputText
            title="Email"
            placeholder="Email"
            onChangeText={(text: string) => {
              setEmail(text);
            }}
            defaultValue={email}
            styleInput={styles.input}
          />

          <BaseInputPassword
            title="Password"
            placeholder="Password"
            onChangeText={(text: string) => {
              setPassword(text);
            }}
            defaultValue={password}
            // styleInput={styles.input}
          />
        </View>

        <View style={styles.body}>
          {/* Đăng ký hoặc quên mật khẩu */}
          <OptionsLogin
            onPressRegister={handleRegister}
            onPressForgotPass={handleForgotPass}
          />
        </View>

        {/* Login Cases */}
        <View style={styles.optionButton}>
          <TouchableOpacity style={styles.button} onPress={handlePressLogin}>
            <Text style={styles.textButton}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleApple}>
            {/* <Ionicons name="logo-apple" size={20} /> */}
            <Image source={require(logo_apple)} style={styles.logoLogin} />
            <Text style={styles.textButton}>Apple</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleGoogle}>
            {/* <Ionicons name="logo-google" size={20} /> */}
            <Image source={require(logo_google)} style={styles.logoLogin} />
            <Text style={styles.textButton}>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleFacebook}>
            {/* <Ionicons name="logo-facebook" size={20} /> */}
            <Image source={require(logo_facebook)} style={styles.logoLogin} />
            <Text style={styles.textButton}>Facebook</Text>
          </TouchableOpacity>
        </View>

        {/* Kiểu khoản dịch vụ */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            marginTop: 20,
          }}>
          <TouchableOpacity
            onPress={() => {
              setIsAgree(!isAgree);
            }}>
            <Ionicons
              name={isAgree ? 'checkbox-sharp' : 'square-sharp'}
              size={16}
              style={{padding: 8}}
              color={isAgree ? ThemeColor.BLUE_COLOR : 'gray'}
            />
          </TouchableOpacity>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.rulesText}>Đồng ý, </Text>
            <TouchableOpacity>
              <Text
                style={[
                  styles.rulesText,
                  {color: ThemeColor.BLUE_COLOR, fontWeight: 'bold'},
                ]}>
                điều khoản dịch vụ
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.buttonHelp} onPress={handlePressHelp}>
          <Text style={styles.text}>Help?</Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={styles.buttonLanguage}
            onPress={handleLanguageVN}>
            <View
              style={
                isVN ? styles.selectedLanguageVN : styles.unselectLanguageVN
              }>
              <Image source={require(iconVN)} style={styles.logoLanguage} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonLanguage}
            onPress={handleLanguageUK}>
            <View
              style={
                isVN ? styles.unselectLanguageVN : styles.selectedLanguageVN
              }>
              <Image source={require(iconUK)} style={styles.logoLanguage} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '60%',
  },
  logo: {
    width: '100%',
    height: undefined,
    flex: 0.4,
    aspectRatio: 1.5,
    resizeMode: 'contain',
  },
  body: {
    width: '100%',
    justifyContent: 'center',
    marginBottom: 10,
  },
  viewInput: {
    width: '100%',
    justifyContent: 'center',
    marginTop: 10,
  },
  input: {
    height: 50,
    borderWidth: 1,
    width: '100%',
    backgroundColor: '#fff',
  },
  optionButton: {
    alignItems: 'center',
    flexWrap: 'wrap',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flexDirection: 'row',
    borderWidth: 1,
    padding: 5,
    width: '48%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    backgroundColor: '#fff',
    paddingVertical: 8,
  },
  textButton: {
    marginHorizontal: 5,
  },
  text: {
    color: ThemeColor.BLUE_COLOR,
    fontWeight: 'bold',
    fontSize: 11,
  },
  footer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 20,
    paddingHorizontal: 10,
    alignItems: 'flex-end',
  },
  buttonHelp: {
    padding: 6,
  },
  logoLanguage: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
    // borderWidth: 1,
  },
  buttonLanguage: {
    marginHorizontal: 2,
    padding: 5,
  },
  selectedLanguageVN: {
    borderWidth: 1,
    height: 16,
    width: 24,
  },
  unselectLanguageVN: {
    height: 12,
    width: 16,
  },
  rulesText: {
    fontSize: 12,
  },
  logoLogin: {
    width: 20,
    height: 30,
    aspectRatio: 1,
    resizeMode: 'cover',
  },
});
