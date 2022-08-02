/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {View, TextInput, Text} from 'react-native';
import AnimationTitle from './animation-title';
import {ThemeColor} from '../assets/themes/value';
interface Props {
  title?: string;
  placeholder?: string;
  onChangeText: any;
  defaultValue?: string;
  keyboardType?: string | undefined;
  maxLength?: number;
  autoFocus?: boolean;
  styleInput?: any;
  styleView?: any;
  checkError?: boolean;
  onSubmitEditing?: any;
  onRef?: any;
  multiline?: boolean | undefined;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
}
export default function BaseInputText({
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
  autoCapitalize,
  multiline
}: //
Props) {
  return (
    <View
      style={[
        {
          width: '100%',
          alignItems: 'center',
          height: 70,
          marginVertical: 5,
          // borderWidth: 1,
        },
        styleView,
      ]}>
      <View style={{flex: 1, width: '100%', alignItems: 'center'}}>
        <AnimationTitle isShow={defaultValue !== ''}>
          <Text
            style={{
              color: ThemeColor.BLACK_COLOR,
              textAlign: 'left',
              fontWeight: 'bold',
            }}>
            {title}
          </Text>
        </AnimationTitle>
        <TextInput
          style={[
            styleInput,
            {
              borderColor: checkError
                ? ThemeColor.ERROR_COLOR
                : ThemeColor.BLACK_COLOR,
            },
          ]}
          placeholder={placeholder ? placeholder : ''}
          onChangeText={text => onChangeText(text)}
          defaultValue={defaultValue ? defaultValue : undefined}
          // returnKeyType={(Platform.OS === 'ios') ? 'done' : 'next'}
          keyboardType={keyboardType ? keyboardType : 'default'}
          autoCapitalize={autoCapitalize ? autoCapitalize : undefined}
          maxLength={maxLength ? maxLength : undefined}
          autoFocus={autoFocus ? autoFocus : undefined}
          onSubmitEditing={onSubmitEditing}
          ref={onRef}
          multiline={multiline ? true : false}
        />
      </View>
    </View>
  );
}
