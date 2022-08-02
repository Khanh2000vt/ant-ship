/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import BaseHeader from '../../components/base-header';
import {
  settingsList,
  supportList,
  _EMAIL,
  _LIVE_CHAT,
  _TERM,
  _UPDATED,
} from './utils';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import ItemOptionSettings from './components/item-option-settings';
import {PopupSettings} from './model/settings-model';
import BasePopup from '../../components/base-modal-popup/base-popup';
import {sizePopup} from '../shop-order/utils';
import {
  handleSelectSettings,
  handleSettingsPopup,
} from './controller/settings-handing';
import ViewItemPopup from '../../components/base-modal-popup/components/view-item-popup';
export default function ShopSettingsScreen({navigation}: {navigation: any}) {
  // const avt = require('../../assets/img/avt-test.png');
  // //state settings
  // const [settings, setSettings] = useState<PopupSettings[]>([]);
  // //state use to popup
  // const [listPopup, setListPopup] = useState<any[]>([]);
  // const [indexPopup, setIndexPopup] = useState<number>(0);
  // const [flag, setFlag] = useState<boolean>(false);
  // const [isShow, setIsShow] = useState<boolean>(false);
  // const [ref, setRef] = useState(null);

  // async function saveSetting(key: string, value: any) {
  //   const jsonValue = JSON.stringify(value);
  //   await AsyncStorage.removeItem(key);
  //   await AsyncStorage.setItem(key, jsonValue);
  //   console.log('Da update AsyncStorage');
  // }
  // useEffect(() => {
  //   getSettings();
  // }, []);

  // async function getSettings() {
  //   const data = await AsyncStorage.getItem('@settings');
  //   console.log('Co data tu AsyncStorage: ', data);
  //   if (data) {
  //     const temp: PopupSettings[] = JSON.parse(data);
  //     setSettings([...temp]);
  //   } else {
  //     let temp: PopupSettings[] = [];
  //     settingsList.forEach(async (item, index) => {
  //       console.log('Chay lan thu ', index);
  //       const tempItem: PopupSettings = {
  //         choose: item.container[0],
  //         arrayOptions: item.container,
  //       };
  //       temp.push(tempItem);
  //     });
  //     setSettings([...temp]);
  //   }
  // }

  // function handlePressWithPopup(
  //   nameItem: string,
  //   indexItem: number,
  //   refItem: any,
  // ): void {
  //   console.log('nameItem: ', settings[indexItem].choose);
  //   console.log('nameList: ', settings[indexItem].arrayOptions);
  //   console.log(
  //     'list: ',
  //     handleSelectSettings(
  //       settings[indexItem].choose,
  //       settings[indexItem].arrayOptions,
  //     ),
  //   );
  //   setRef(refItem);
  //   setIndexPopup(indexItem);
  //   setListPopup(
  //     handleSelectSettings(
  //       settings[indexItem].choose,
  //       settings[indexItem].arrayOptions,
  //     ),
  //   );
  //   setTimeout(() => {
  //     setIsShow(true);
  //   }, 0);
  // }
  // async function handlePressNonePopup(nameItem: string, indexItem: number) {
  //   console.log('nameItem-press: ', nameItem);
  //   if (nameItem === _LIVE_CHAT) {
  //     console.log('live chat');
  //     const data = await AsyncStorage.getItem('@settings');
  //     console.log('Co data tu AsyncStorage: ', data);
  //   } else if (nameItem === _EMAIL) {
  //     console.log('email');
  //   } else if (nameItem === _TERM) {
  //     navigation.navigate('TermScreen');
  //   } else if (nameItem === _UPDATED) {
  //     console.log('updated');
  //   }
  // }

  // function handlePressItemPopup(item: any) {
  //   if (item.id !== settings[indexPopup].choose.id) {
  //     const temp = handleSettingsPopup(item, settings, indexPopup);
  //     setSettings([...temp]);
  //     saveSetting('@settings', temp);
  //   }
  //   setIsShow(false);
  // }

  // const handlePressCenteredView = useCallback(() => {
  //   setIsShow(false);
  // }, []);

  // function handlePressLogout() {
  //   navigation.navigate('LoginStack');
  // }
  return (
    <View style={{flex: 1}}>
      {/* <BaseHeader title="Settings" />
      <ScrollView
        style={styles.view}
        contentContainerStyle={{flexGrow: 1}}
        onMomentumScrollEnd={() => setFlag(!flag)}>
        <View style={[styles.containerRuler, {padding: 20}]}>
          <TouchableOpacity>
            <Image
              resizeMode="cover"
              resizeMethod="scale"
              style={styles.avt}
              source={avt}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.infoView}>
            <Text>Username: {dataTemp.username}</Text>
            <Text>Rank: {dataTemp.rank}</Text>
            <View style={styles.containerRuler}>
              <Text>Hoàn thành: {dataTemp.complete}</Text>
              <Text>Hủy: {dataTemp.cancel}</Text>
            </View>
            <Text>Theo tháng</Text>
          </TouchableOpacity>
        </View>
        <View>
          <View style={styles.title}>
            <Text style={styles.textTitle}>Settings</Text>
          </View>
          <View>
            {settingsList.map((item, index) => {
              return (
                <ItemOptionSettings
                  name={item.name}
                  container={settings[index]?.choose}
                  index={index}
                  onPress={handlePressWithPopup}
                  isShow={isShow}
                  flag={true}
                  key={index}
                />
              );
            })}
          </View>
        </View>
        <View>
          <View style={styles.title}>
            <Text style={styles.textTitle}>Supports</Text>
          </View>
          <View>
            {supportList.map((item, index) => {
              return (
                <ItemOptionSettings
                  name={item.name}
                  // container={item.container}
                  index={index}
                  onPress={handlePressNonePopup}
                  flag={false}
                  key={index}
                />
              );
            })}
          </View>
        </View>
        <View style={styles.viewLogout}>
          <TouchableOpacity
            style={styles.buttonLogout}
            onPress={handlePressLogout}>
            <Text>Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <BasePopup
        data={listPopup}
        ItemViewRender={ViewItemPopup}
        onPressItem={handlePressItemPopup}
        onPressCenteredView={handlePressCenteredView}
        option="bottom-right"
        // widthPopup={sizePopup.width}
        // maxElementsShow={3}
        widthPopup={200}
        isShowPopup={isShow}
        refLayout={ref}
        flag={flag}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    // flex: 1,
    // padding: 20
  },
  containerRuler: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: '#fff',
  },
  avt: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  infoView: {
    flex: 1,
    justifyContent: 'space-between',
    marginLeft: 10,
  },
  title: {
    backgroundColor: '#626c75',
    paddingHorizontal: 20,
    height: 40,
    justifyContent: 'center',
    elevation: 5,
  },
  textTitle: {
    color: '#fff',
    fontWeight: 'bold',
  },
  viewLogout: {
    alignItems: 'center',
  },
  buttonLogout: {
    width: 150,
    height: 40,
    borderWidth: 1,
    marginVertical: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});

const dataTemp = {
  username: 'khanhmacro',
  rank: 'Gold',
  complete: 121,
  cancel: 5,
};
