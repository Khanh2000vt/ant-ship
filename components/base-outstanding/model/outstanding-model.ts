interface OutStandingProps {
  data: any[];
  repeat?: boolean;
  ratioToWidth?: number;
  offset?: number;
  ratioZoomOut?: number;
  itemViewRender: ({item, index}: {item: any; index: number}) => Element;
  smooth?: boolean;
  zoomOutWhenScrolling?: boolean;
}

interface LayoutProps {
  x: number;
  width: number;
}

export type {OutStandingProps, LayoutProps};
