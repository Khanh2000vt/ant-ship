import {StyleProp, ViewStyle} from 'react-native';

interface ScrollTextProps {
  data: any[];
  onPress?: (item: any, index: number) => void | undefined;
  style?: StyleProp<ViewStyle> | undefined;
  styleItem?: StyleProp<ViewStyle> | undefined;
}

interface ItemProps {
  x: number;
  width: number;
}
export type {ScrollTextProps, ItemProps};
