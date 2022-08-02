/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, {useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import BaseBoxInformation from '../../../../components/base-box-info/base-box-infor';
// import BaseHeader from '../../../../components/base-header';
import ItemViewer from '../item-viewer';
import {dataTestConfirm} from '../../utils';
import {OrderInformation} from '../../model/shop-order-models';

function OrderInformationConfirm({
  position,
  navigation,
  onPressNextPage,
}: OrderInformation) {
  const WIDTH_LAYOUT_ITEM = 65;
  const {orderCreator, receiver, product, transport, money} = dataTestConfirm;
  const renderItem = ({item}: any) => {
    return <ItemViewer item={item} />;
  };
  const keyExtractor = useCallback((_, index) => index.toString(), []);
  // function handlePressLeft() {
  //   navigation.goBack();
  // }

  function handleOnPress() {
    // navigation.navigate('StatusProductScreen');
    if (onPressNextPage) {
      onPressNextPage();
    }
  }
  return (
    <View style={styles.view}>
      <ScrollView
        contentContainerStyle={styles.viewRootScroll}
        // stickyHeaderIndices={[0]}
      >
        {/* <BaseHeader
          title="Media Viewer"
          ViewHeaderLeft={() => <Text style={{color: 'white'}}>Back</Text>}
          onPressLeft={handlePressLeft}
        /> */}
        <View style={styles.container}>
          <View style={styles.orderAndReceiver}>
            <BaseBoxInformation
              title={orderCreator.title}
              backgroundColor="#f5f5f5"
              styleBox={[styles.styleBox, {width: '49%'}]}
              styleTitleBox={styles.styleTitleBox}>
              <Text style={styles.title}>Họ và tên:</Text>
              <Text>{orderCreator.data.name}</Text>
              <Text style={styles.title}>Số điện thoại:</Text>
              <Text>{orderCreator.data.tel}</Text>
              <Text style={styles.title}>Địa chỉ:</Text>
              <Text numberOfLines={3}>{orderCreator.data.address}</Text>
            </BaseBoxInformation>

            <BaseBoxInformation
              title={receiver.title}
              backgroundColor="#f5f5f5"
              styleBox={[styles.styleBox, {width: '49%'}]}
              styleTitleBox={styles.styleTitleBox}>
              <Text style={styles.title}>Họ và tên:</Text>
              <Text>{receiver.data.name}</Text>
              <Text style={styles.title}>Số điện thoại:</Text>
              <Text>{receiver.data.tel}</Text>
              <Text style={styles.title}>Địa chỉ:</Text>
              <Text numberOfLines={3}>{receiver.data.address}</Text>
            </BaseBoxInformation>
          </View>
          <BaseBoxInformation
            title={product.title}
            backgroundColor="#f5f5f5"
            styleBox={styles.styleBox}
            styleTitleBox={styles.styleTitleBox}>
            <Text numberOfLines={2}>
              <Text style={{fontWeight: 'bold'}}>{'Tên sản phẩm: '}</Text>
              <Text style={{padding: 10}}>{product.data.name}</Text>
            </Text>
            <View>
              <Text>
                {'Cân nặng: '}
                <Text>{product.data.weight}</Text>
              </Text>
              <Text>
                {'Loại sản phẩm: '}
                <Text>{product.data.type}</Text>
              </Text>
            </View>
            <Text style={styles.title}>Hình ảnh/Video:</Text>
            <FlatList
              data={product.data.media}
              renderItem={renderItem}
              keyExtractor={keyExtractor}
              horizontal={true}
              getItemLayout={(dataLayout, index) => ({
                length: WIDTH_LAYOUT_ITEM,
                offset: WIDTH_LAYOUT_ITEM * index,
                index,
              })}
            />
          </BaseBoxInformation>
          <BaseBoxInformation
            title={transport.title}
            backgroundColor="#f5f5f5"
            styleBox={styles.styleBox}
            styleTitleBox={styles.styleTitleBox}>
            <Text>{transport.data.formality}</Text>
            <Text style={styles.title}>Ghi chú:</Text>
            <View style={styles.scrollViewStyle}>
              <ScrollView
                contentContainerStyle={styles.scrollView}
                // style={styles.scrollViewStyle}
                nestedScrollEnabled={true}>
                <Text>{transport.data.note}</Text>
              </ScrollView>
            </View>
          </BaseBoxInformation>
          <BaseBoxInformation
            title={money.title}
            backgroundColor="#f5f5f5"
            styleBox={styles.styleBox}
            styleTitleBox={styles.styleTitleBox}>
            <View style={styles.moneyInfo}>
              <Text style={styles.title}>Tổng tiền hàng:</Text>
              <Text>{money.data.productPrice}</Text>
            </View>
            <View style={styles.moneyInfo}>
              <Text style={styles.title}>Phí ship:</Text>
              <Text>{money.data.ship}</Text>
            </View>
            <View style={styles.moneyInfo}>
              <Text style={styles.title}>Giảm giá:</Text>
              <Text>{money.data.voucher}</Text>
            </View>
            <View style={[styles.moneyInfo, {borderTopWidth: 1}]}>
              <Text style={styles.title}>Thành tiền:</Text>
              <Text>{money.data.price}</Text>
            </View>
          </BaseBoxInformation>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.button} onPress={handleOnPress}>
        <Text>Tìm ship</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  styleBox: {
    marginVertical: 10,
  },
  styleTitleBox: {},
  scrollView: {
    paddingHorizontal: 5,
  },
  scrollViewStyle: {
    borderLeftWidth: 1,
    height: 50,
  },
  viewRootScroll: {},
  container: {
    padding: 20,
  },
  viewInfo: {
    marginVertical: 25,
    flex: 1,
  },
  orderAndReceiver: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  moneyInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    marginVertical: 3,
  },
  button: {
    height: 50,
    width: 100,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});

export default OrderInformationConfirm;
