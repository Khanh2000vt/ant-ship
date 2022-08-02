interface PropsListSettings {
  item: any;
  onPress: (option: any, ref: any, index: number | undefined) => void;
  isShow: boolean;
}

interface PropsItemSettings {
  name: string;
  index: number;
  container?: any;
  onPress: (option: any, index: number, ref?: any) => void;
  isShow?: boolean;
  flag?: boolean;
}

interface ItemSettings {
  id: any;
  title: string;
  isSelected: boolean;
}

interface PopupSettings {
  choose: ItemSettings;
  arrayOptions: ItemSettings[];
}
export type {PropsListSettings, PropsItemSettings, PopupSettings};
