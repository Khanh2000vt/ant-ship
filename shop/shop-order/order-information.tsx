/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import PagerView from 'react-native-pager-view';
import BaseHeader from '../../components/base-header';
import OrderInformationReceiver from './components/order-information/order-information-receiver';
import OrderInformationProduct from './components/order-information/order-information-product';
import OrderInformationMap from './components/order-information/order-information-map';
import OrderInformationConfirm from './components/order-information/order-information-confirm';
import OrderInformationStatus from './components/order-information/order-information-status';
// import StepOrder from '../../components/base-step/step-order';

export default function OrderInformation({navigation}: {navigation: any}) {
  const ref = useRef<PagerView>(null);
  const [progress, setProgress] = useState<number>(0);
  const [position, setPosition] = useState<number>(0);

  function handlePageSelected(e: any) {
    console.log('on-page-selected: ', e.nativeEvent.position);
    let index = e.nativeEvent.position;
    setPosition(index);
    if (index > progress) {
      setProgress(index);
    }
  }

  function handlePressStep(_item: any, index: number) {
    ref.current?.setPage(index);
  }

  function handlePressNextPage() {
    ref.current?.setPage(position + 1);
  }

  return (
    <View style={{flex: 1}}>
      <BaseHeader title="Information" />
      <View style={styles.container}>
        {/* <StepOrder
          data={test}
          pageCurrent={progress}
          onPress={handlePressStep}
          indexDisabled={test.length - 1}
          style={styles.stepOrder}
        /> */}
        <PagerView
          ref={ref}
          style={styles.pagerView}
          initialPage={0}
          offscreenPageLimit={2}
          pageMargin={20}
          onPageSelected={handlePageSelected}
          scrollEnabled={false}>
          <View key="1">
            <OrderInformationReceiver
              position={position}
              navigation={navigation}
              onPressNextPage={handlePressNextPage}
            />
          </View>
          <View key="2">
            <OrderInformationProduct
              position={position}
              navigation={navigation}
              onPressNextPage={handlePressNextPage}
            />
          </View>
          <View key="3">
            <OrderInformationMap
              position={position}
              navigation={navigation}
              onPressNextPage={handlePressNextPage}
            />
          </View>
          <View key="4">
            <OrderInformationConfirm
              position={position}
              navigation={navigation}
              onPressNextPage={handlePressNextPage}
            />
          </View>
          <View key="5">
            <OrderInformationStatus
              position={position}
              navigation={navigation}
              onPressNextPage={handlePressNextPage}
            />
          </View>
        </PagerView>
      </View>
    </View>
  );
}

const test = [
  {
    id: 0,
    title: 'Người nhận',
  },
  {
    id: 1,
    title: 'Đơn hàng',
  },
  {
    id: 2,
    title: 'Tài xế',
  },
  {
    id: 3,
    title: 'Xác nhận',
  },
  {
    id: 4,
    title: 'Trạng thái',
  },
];

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
  },
  container: {
    // paddingHorizontal: 20,
    flex: 1,
  },
  stepOrder: {
    marginVertical: 10,
  },
});
