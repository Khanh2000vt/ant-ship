/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React, {useCallback, useEffect, useRef, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import BaseFlatList from '../../components/base-flat-list/base-flat-list';
import BaseHeader from '../../components/base-header';
import BasePopup from '../../components/base-modal-popup/base-popup';
import ViewItemPopup from '../../components/base-modal-popup/components/view-item-popup';
import {dataOrder, Press} from '../components/data-test';
import ItemOrdersView from './components/item-orders-view';
import {
  handleOptionOrders,
  handleSelectPopup,
} from './controller/shop-order-handing';
import {PopupData} from './model/shop-order-models';
import {dataPopup, OptionsOrder, popupEmail, sizePopup} from './utils';

export default function ShopOrdersScreen({navigation}: {navigation: any}) {
  //state use to popup
  const ref_sort = useRef(null);
  const [isShow, setIsShow] = useState(false);
  const [popup, setPopup] = useState(dataPopup[0]);
  const [listPopup, setListPopup] = useState<PopupData[]>(dataPopup);
  //state use to list Orders
  const [data, setData] = useState([]);
  const [flag, setFlag] = useState(false);

  //update
  const [refPopup, setRefPopup] = useState(ref_sort);

  //useEffect
  console.log('--------- Di qua shop-order-screen -----------');

  useEffect(() => {
    handleSelectedPopup(popup.id);
    // setListPopup(handleSelectPopup(popup, dataPopup));
  }, [popup]);

  function handleSelectedPopup(option: OptionsOrder) {
    let dataNew = handleOptionOrders(dataOrder, option);
    setData([...(dataNew as never)]);
  }

  // handle event press right icon on header.
  function handlePressRight() {
    navigation.navigate('OrderInformation');
  }

  //toggle show or hide popup
  const handlePressButton = useCallback(
    (ref: any) => {
      setIsShow(true);
      setRefPopup(ref);
      setListPopup(handleSelectPopup(popup, dataPopup));
      setTimeout(() => {
        // setIsShow(true);
      }, 0);
    },
    [popup],
  );

  const handlePressCenteredView = useCallback(() => {
    setIsShow(false);
  }, []);

  function handlePressItemPopup(item: any) {
    if (refPopup === ref_sort) {
      if (item.id !== popup.id) {
        setPopup(item);
      }
    }
    setIsShow(false);
  }

  const handlePressItemList = useCallback(
    (item: any, index: Press, refView: any) => {
      if (index === Press.EMAIL) {
        // console.log('Press email: ', item);
        setRefPopup(refView);
        setListPopup(popupEmail);
        setTimeout(() => {
          setIsShow(true);
        }, 200);
      } else if (index === Press.PLUS) {
        // handlePressPlusItemList(item);
      }
    },
    [],
  );

  const handleScrollEndDrag = useCallback(() => {
    setFlag(!flag);
  }, [flag]);

  function handlePressPlusItemList(item: any) {
    navigation.navigate('OrderInformation', {
      item: item,
    });
  }

  return (
    <View style={styles.view}>
      <BaseHeader
        title="Orders"
        ViewHeaderRight={() => <Text style={{color: 'white'}}>Plus</Text>}
        onPressRight={handlePressRight}
      />
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.popup}
          onPress={() => handlePressButton(ref_sort)}
          ref={ref_sort}>
          <Text style={{color: '#fff'}}>{popup.title}</Text>
        </TouchableOpacity>

        <BaseFlatList
          data={data}
          ItemViewRender={ItemOrdersView}
          onPress={handlePressItemList}
          onRefresh={() => {}}
          onScrollEndDrag={handleScrollEndDrag}
        />
      </View>

      <BasePopup
        data={listPopup}
        ItemViewRender={ViewItemPopup}
        onPressItem={handlePressItemPopup}
        onPressCenteredView={handlePressCenteredView}
        option="center-left"
        widthPopup={sizePopup.width}
        isShowPopup={isShow}
        refLayout={refPopup}
        flag={flag}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 10,
  },
  popup: {
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,
    width: 90,
    height: 40,
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
});
