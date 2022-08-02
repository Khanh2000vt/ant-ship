import {ColorValue, StyleProp, TextStyle, ViewStyle} from 'react-native';

interface PropsBaseBoxInfo {
  title: string;
  styleBox?: StyleProp<ViewStyle> | undefined;
  styleTitleBox?: StyleProp<TextStyle> | undefined;
  children: React.ReactNode;
  backgroundColor?: ColorValue | undefined;
}

export type {PropsBaseBoxInfo};
