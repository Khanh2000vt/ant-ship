/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */

import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import BasePopup from '../../../../components/base-modal-popup/base-popup';
import ViewItemPopup from '../../../../components/base-modal-popup/components/view-item-popup';
import {OrderInformation} from '../../model/shop-order-models';
import {popupFormShip, product, titleReceiver} from '../../utils';

export default function OrderInformationMap({
  position,
  navigation,
  onPressNextPage,
}: OrderInformation) {
  const [isShow, setIsShow] = useState(false);
  const [offset, setOffset] = useState(0);
  const ref_confirm = useRef(null);
  //flag popup
  const [flag, setFlag] = useState<boolean>(false);
  // when focus screen
  useEffect(() => {
    setFlag(!flag);
  }, [position === 2]);

  function handlePressItemPopup() {}

  function handlePressConfirm() {
    //ConfirmScreen
    // navigation.navigate('ConfirmScreen');
    if (onPressNextPage) {
      onPressNextPage();
    }
  }

  function handlePressCancel() {
    navigation.navigate('ShopOrders');
  }
  return (
    <View style={styles.view}>
      <View style={styles.map}>
        <View style={{flex: 1, backgroundColor: 'blue'}} />
        <View style={styles.viewAddress}>
          <TextInput placeholder="Địa chỉ người gửi" style={styles.input} />
          <TextInput placeholder="Địa chỉ người nhận" style={styles.input} />
        </View>
      </View>
      <ScrollView
        style={styles.scrollView}
        onScrollEndDrag={event => {
          console.log('end-drag: ', event.nativeEvent.contentOffset.y);
          setOffset(event.nativeEvent.contentOffset.y);
        }}>
        <View style={styles.information}>
          <View style={styles.container}>
            <View style={{flex: 0.45}}>
              <Text style={styles.titleText}>{product.price}</Text>
              <View style={styles.priceView}>
                <Text style={[styles.titleText, {flex: 1}]}>150.000</Text>
                <Text style={styles.titleText}> VND</Text>
              </View>
            </View>
            <View style={styles.columnView}>
              <Text style={styles.titleText}>{product.discountCode}</Text>
              <View style={styles.viewText}>
                <Text>123456657</Text>
              </View>
            </View>
          </View>

          <View style={styles.container}>
            <View style={styles.columnView}>
              <Text style={styles.titleText}>{titleReceiver.receiverName}</Text>
              <View style={styles.viewText}>
                <Text>Ngô Bá Khá</Text>
              </View>
            </View>

            <View style={styles.columnView}>
              <Text style={styles.titleText}>Số điện thoại</Text>
              <View style={styles.viewText}>
                <Text>012334455</Text>
              </View>
            </View>
          </View>

          <View style={styles.container}>
            <View style={styles.columnView}>
              <Text>Tiết kiệm</Text>
            </View>
            <View style={styles.columnView}>
              <Text style={styles.titleText}>Ngày nhận hàng</Text>
              <View style={styles.container}>
                <TouchableOpacity
                  style={styles.dateForm}
                  onPress={() => setIsShow(true)}
                  ref={ref_confirm}>
                  <Text>Từ ngày</Text>
                </TouchableOpacity>
                <View style={styles.dateForm}>
                  <Text>Đến ngày</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.container}>
            <Text style={styles.titleText}>Hình thức thanh toán</Text>
            <Text style={styles.titleText}>Người gửi trả</Text>
          </View>
          <View style={[styles.container]}>
            <TouchableOpacity
              style={styles.touchableOpacity}
              onPress={handlePressCancel}>
              <Text>Huỷ</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.touchableOpacity}
              onPress={handlePressConfirm}>
              <Text>Xác nhận</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <BasePopup
        data={popupFormShip}
        ItemViewRender={ViewItemPopup}
        onPressItem={handlePressItemPopup}
        onPressCenteredView={() => setIsShow(false)}
        option="center-bottom"
        widthPopup={100}
        isShowPopup={isShow}
        refLayout={ref_confirm}
        offsetScroll={offset}
        flag={flag}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  information: {
    paddingHorizontal: 20,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  titleText: {
    fontWeight: 'bold',
  },
  priceView: {
    flexDirection: 'row',
    flex: 1,
    borderWidth: 1,
  },
  columnView: {
    flex: 0.45,
  },
  viewText: {
    borderWidth: 1,
  },
  dateForm: {
    borderWidth: 1,
  },
  viewAddress: {
    position: 'absolute',
    width: '100%',
    paddingHorizontal: 20,
    top: 0,
  },
  input: {
    borderWidth: 1,
    marginVertical: 5,
    backgroundColor: '#fff',
    height: 40,
  },
  touchableOpacity: {
    borderWidth: 1,
    flex: 0.4,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
