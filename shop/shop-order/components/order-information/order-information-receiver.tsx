/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */

import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import BaseButton from '../../../../components/base-button';
import BaseInputText from '../../../../components/base-input-text';
import {phoneCheck} from '../../controller/order-information-handing';
import {OrderInformation} from '../../model/shop-order-models';
import {Receiver, titleReceiver} from '../../utils';
export default function OrderInformationReceiver({
  position,
  onPressNextPage,
}: OrderInformation) {
  const [name, setName] = useState({
    text: '',
    isError: false,
  });
  const [address, setAddress] = useState({
    text: '',
    isError: false,
  });
  const [phone, setPhone] = useState({
    text: '',
    isError: false,
  });
  // const [activeContinue, setActiveContinue] = useState<boolean>(true);
  const [activeReset, setActiveReset] = useState<boolean>(false);
  const ref_name = useRef<TextInput>();
  const ref_address = useRef<TextInput>();
  const ref_phone = useRef<TextInput>();

  //popup
  const [isShow, setIsShow] = useState(false);
  const [flag, setFlag] = useState<boolean>(false);
  const ref_test = useRef();
  function handlePressItemPopup(_item: any) {
    setIsShow(false);
    // if (item.id !== popup.id) {
    //   setPopup(item);
    // }
  }

  // useEffect(() => {
  //   setTimeout(() => {
  //     ref_name.current!.focus();
  //   }, 200);
  // }, []);
  // when focus screen
  useEffect(() => {
    console.log(
      '----------------------------- Day la page 1 ----------------------------- ',
    );
    setFlag(!flag);
  }, [position === 0]);

  function nextRefFocus(key: Receiver) {
    if (name.text === '' && key === Receiver.NAME) {
      console.log('name');
      setName({...name, isError: true});
    } else if (!phoneCheck(phone.text) && key === Receiver.PHONE) {
      console.log('phone');
      setPhone({...phone, isError: true});
    } else if (address.text.length <= 6 && key === Receiver.ADDRESS) {
      console.log('address');
      setAddress({...address, isError: true});
    }
  }

  function handlePressContinue() {
    console.log('di vao day');
    setActiveReset(!activeReset);
  }

  function onPressReset() {
    setName({text: '', isError: false});
    setAddress({text: '', isError: false});
    setPhone({text: '', isError: false});
    // setActiveContinue(false);
    // setActiveReset(false);
    ref_name.current!.focus();
  }

  function handleCheckActive() {
    // console.log('text-name: ', name.text);
    // if (name.text === '' && address.text === '' && phone.text === '') {
    //   setActiveReset(false);
    //   console.log('Di vao check active')
    // }
    // else {
    //   setActiveReset(true);
    //   console.log('Di vao reset day')
    // }
  }
  console.log('reset: ', activeReset);
  return (
    <View style={styles.view}>
      <BaseInputText
        title={titleReceiver.receiverName}
        placeholder={`(*) ${titleReceiver.receiverName}`}
        defaultValue={name.text}
        styleInput={styles.input}
        checkError={name.isError}
        onRef={ref_name}
        autoCapitalize="words"
        onChangeText={async (text: string) => {
          await setName({text: text, isError: false});
          handleCheckActive();
        }}
        onSubmitEditing={() => {
          ref_address.current!.focus();
          nextRefFocus(Receiver.NAME);
        }}
      />
      <BaseInputText
        title={titleReceiver.receiverAddress}
        placeholder={`(*) ${titleReceiver.receiverAddress}`}
        defaultValue={address.text}
        styleInput={styles.input}
        onRef={ref_address}
        checkError={address.isError}
        autoCapitalize="words"
        onChangeText={(text: string) =>
          setAddress({text: text, isError: false})
        }
        onSubmitEditing={() => {
          ref_phone.current!.focus();
          nextRefFocus(Receiver.ADDRESS);
        }}
      />
      <BaseInputText
        title={titleReceiver.receiverPhone}
        placeholder={`(*) ${titleReceiver.receiverPhone}`}
        defaultValue={phone.text}
        styleInput={styles.input}
        onRef={ref_phone}
        checkError={phone.isError}
        keyboardType="phone-pad"
        maxLength={10}
        onChangeText={(text: string) => setPhone({text: text, isError: false})}
        onSubmitEditing={() => {
          nextRefFocus(Receiver.PHONE);
        }}
      />
      <View style={styles.buttonView}>
        <BaseButton title="Reset" active={activeReset} onPress={onPressReset} />
        {/* <BaseButton
          title="Tiếp tục"
          active={activeContinue}
          onPress={handlePressContinue}
        /> */}
        <TouchableOpacity
          onPress={onPressNextPage}
          style={{flex: 1, borderWidth: 1}}>
          <Text>Tiếp tục</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    paddingHorizontal: 20,
  },
  input: {
    borderWidth: 1,
    width: '100%',
  },
  buttonView: {
    flexDirection: 'row',
  },
});
