/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React, {useEffect, useState} from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import AnimationTitle from './animation-title';
import {ThemeColor} from '../assets/themes/value';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface Props {
  title?: string;
  placeholder?: string;
  onChangeText: any;
  defaultValue: string;
  keyboardType?: string;
  maxLength?: number;
  autoFocus?: boolean;
  styleInput?: any;
  styleView?: any;
  checkError?: boolean;
  onSubmitEditing?: any;
  onRef?: any;
  showText?: boolean;
  onCallBackPress?: any;
}
export default function BaseInputPassword({
  title,
  placeholder,
  onChangeText,
  defaultValue,
  keyboardType,
  maxLength,
  autoFocus,
  styleInput,
  checkError,
  styleView,
  onSubmitEditing,
  onRef,
  onCallBackPress,
  showText,
}:
Props) {
  const [hidePassword, setHidePassword] = useState<boolean>(true);

  useEffect(() => {
    if (showText !== undefined) {
      setHidePassword(showText);
    }
  }, [showText]);

  function handleToggleShowPass() {
    if (onCallBackPress) {
      onCallBackPress();
    } else {
      setHidePassword(!hidePassword);
    }
  }
  return (
    <View
      style={[
        styleView,
        {
          width: '100%',
          alignItems: 'center',
          height: 70,
          marginVertical: 5,
          // borderWidth: 1,
        },
      ]}>
      <View style={{flex: 1, width: '100%', alignItems: 'center'}}>
        <AnimationTitle isShow={defaultValue !== ''}>
          <Text
            style={{
              color: ThemeColor.BLUE_COLOR,
              textAlign: 'left',
              fontWeight: 'bold',
            }}>
            {title}
          </Text>
        </AnimationTitle>
        <View style={[styles.inputPass, styleInput]}>
          <TextInput
            style={{
              flex: 1,
              borderColor: checkError
                ? ThemeColor.ERROR_COLOR
                : ThemeColor.BLACK_COLOR,
            }}
            placeholder={placeholder ? placeholder : ''}
            onChangeText={text => onChangeText(text)}
            defaultValue={defaultValue ? defaultValue : undefined}
            // returnKeyType={(Platform.OS === 'ios') ? 'done' : 'next'}
            keyboardType={keyboardType ? keyboardType : 'default'}
            maxLength={maxLength ? maxLength : undefined}
            autoFocus={autoFocus ? autoFocus : undefined}
            onSubmitEditing={onSubmitEditing}
            ref={onRef}
            secureTextEntry={hidePassword}
          />
          {defaultValue !== '' && (
            <TouchableOpacity
              onPress={handleToggleShowPass}
              style={styles.eyeButton}>
              <Ionicons
                name={hidePassword ? 'eye-off-outline' : 'eye-outline'}
                size={15}
                color="black"
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  eyeButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
  },
  inputPass: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    width: '100%',
    backgroundColor: '#fff',
  },
});
