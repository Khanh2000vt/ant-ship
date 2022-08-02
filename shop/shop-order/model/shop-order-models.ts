/* eslint-disable prettier/prettier */
import {CameraOptions, ImageLibraryOptions} from 'react-native-image-picker';

interface Progress {
  position: number;
  offset: number;
}

interface PropsButton {
  title: string;
  style?: any;
  active: boolean;
  onPress?: () => void;
}

interface PopupData {
  id: any;
  title: string;
  isSelected: boolean;
}

interface OrderInformation {
  position: number;
  navigation?: any;
  onPressNextPage?: () => void;
}

interface Action {
  title: string;
  type: 'capture' | 'library';
  options: CameraOptions | ImageLibraryOptions;
}

interface ItemMedia {
  uri: string;
  type: string;
  index: number;
  onPressDelete: (index: number) => void;
  onPressViewerMedia: (index: number) => void;
}

interface PropsContainerMedia {
  uri: string;
  showIcon: boolean;
}

interface PropsItemViewer {
  item: any;
  onPressViewerMedia?: (index: string) => void;
  backgroundColor?: any;
  elevation?: any;
}

export type {
  Progress,
  PropsButton,
  PopupData,
  OrderInformation,
  Action,
  ItemMedia,
  PropsItemViewer,
  PropsContainerMedia,
};
