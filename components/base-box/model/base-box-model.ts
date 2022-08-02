import {ColorValue, StyleProp, TextStyle, ViewStyle} from 'react-native';

interface PropsBaseBox {
  item: any;
  styleBox?: StyleProp<ViewStyle> | undefined;
  styleTitleBox?: StyleProp<TextStyle> | undefined;
  children: React.ReactNode;
  onPress: (item: any) => void;
  backgroundColor?: ColorValue | undefined;
}

export type {PropsBaseBox};
