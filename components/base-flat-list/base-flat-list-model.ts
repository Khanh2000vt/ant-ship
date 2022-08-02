/* eslint-disable prettier/prettier */
interface FlatListProps {
  data?: any;
  url?: any;
  onPress?: any;
  ItemViewRender: any;
  onEndReached?: any;
  onEndReachedThreshold?: number;
  onRefresh?: any | undefined;
  currentPage?: any;
  columns?: number;
  heightItem?: number | undefined;
  onScrollEndDrag?: any;
}

export type {FlatListProps};
