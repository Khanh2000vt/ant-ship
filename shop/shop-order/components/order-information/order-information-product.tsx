/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */

import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BaseInputText from '../../../../components/base-input-text';
import BasePopup from '../../../../components/base-modal-popup/base-popup';
import {handleSelectPopup} from '../../controller/shop-order-handing';
import {OrderInformation, PopupData} from '../../model/shop-order-models';
import {
  actions,
  MAX_SIZE_MEDIA_MB,
  popupClassify,
  popupFormShip,
  popupView,
  product,
  sizePopup,
  TypePage2,
  ViewProduct,
} from '../../utils';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {
  handleAddUriMedia,
  handleDeleteItemMedia,
  handleReturnSize,
  handleSizeMedia,
  isDuplicateMedia,
  isSatisfyCapacity,
} from '../../controller/order-product-handing';
import ItemMediaView from '../item-media-view';
import ViewItemPopup from '../../../../components/base-modal-popup/components/view-item-popup';

export default function OrderInformationProduct({
  position,
  navigation,
  onPressNextPage,
}: OrderInformation) {
  //ref
  const ref_name = useRef(null);
  const ref_description = useRef(null);
  const ref_weight = useRef(null);
  const ref_classify = useRef(null);
  const ref_view = useRef(null);
  const ref_form = useRef(null);
  const ref_scroll = useRef<ScrollView>(null);
  // input
  const [name, setName] = useState({
    text: '',
    isError: false,
  });
  const [weight, setWeight] = useState({
    text: '',
    isError: false,
  });
  const [description, setDescription] = useState('');
  const [note, setNote] = useState('');

  //setup popup
  const [offset, setOffset] = useState(0);
  const [dataPopup, setDataPopup] = useState<PopupData[]>(popupClassify);
  const [titlePopup, setTitlePopup] = useState({
    classify: popupClassify[0],
    formShip: popupFormShip[0],
  });
  const [refView, setRefView] = useState(ref_classify);
  const [isShow, setIsShow] = useState(false);
  const [flag, setFlag] = useState<boolean>(false);

  const [response, setResponse] = useState<any>(null);
  const [arrayData, setArrayData] = useState<any[]>([]);
  const [size, setSize] = useState<number>(0);

  // when focus screen
  useEffect(() => {
    setFlag(!flag);
  }, [position === 1]);

  useEffect(() => {
    if (response?.assets) {
      handleArrayMedia();
    }
  }, [response]);

  //toggle show or hide popup
  function handlePressButton(ref: any, choose: TypePage2) {
    setRefView(ref);
    if (choose === TypePage2.CLASSIFY) {
      setDataPopup(handleSelectPopup(titlePopup.classify, popupClassify));
    } else if (choose === TypePage2.VIEW) {
      setDataPopup(popupView);
    } else if (choose === TypePage2.FORM_SHIP) {
      setDataPopup(handleSelectPopup(titlePopup.formShip, popupFormShip));
    }

    setTimeout(() => {
      setIsShow(true);
    }, 200);
  }

  function handlePressItemPopup(item: any) {
    if (refView === ref_classify) {
      if (item.id !== titlePopup.classify.id) {
        setTitlePopup({
          ...titlePopup,
          classify: item,
        });
      }
    } else if (refView === ref_form) {
      if (item.id !== titlePopup.formShip.id) {
        setTitlePopup({
          ...titlePopup,
          formShip: item,
        });
      }
    } else if (refView === ref_view) {
      if (item.id === ViewProduct.CAMERA) {
        handlePressCamera();
      } else if (item.id === ViewProduct.GALLERY) {
        handlePressGallery();
      }
    }

    setIsShow(false);
  }

  function handlePressCamera() {
    console.log('button-camera');
    launchCamera(actions[0].options, setResponse);
  }

  function handlePressGallery() {
    console.log('button-gallery');
    launchImageLibrary(actions[1].options, setResponse);
  }

  function handleArrayMedia() {
    console.log('size: ', size);
    if (response?.assets) {
      if (isSatisfyCapacity(size, response.assets)) {
        console.log('response: ', response.assets);
        if (isDuplicateMedia(arrayData, response.assets)) {
          setSize(handleSizeMedia(size, response.assets));
          setArrayData(handleAddUriMedia(arrayData, response.assets));
          setResponse(null);
        } else {
          alertMediaError('Bạn không thể tải lên hình ảnh/video bị trùng lặp.');
        }
      } else {
        alertMediaError(
          `Tổng dung lượng hình ảnh/video vượt quá ${MAX_SIZE_MEDIA_MB}MB.`,
        );
      }
    }
  }

  function alertMediaError(message: string) {
    Alert.alert(
      'Thông báo',
      message,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
      ],
      {cancelable: true},
    );
  }

  function handlePressDelete(index: number) {
    Alert.alert('Thông báo', 'Bạn có chắc chắn muốn xóa?', [
      {
        text: 'Thoát',
        style: 'cancel',
      },
      {
        text: 'Đồng ý',
        onPress: () => handleDeleteMedia(index),
      },
    ]);
  }

  function handleDeleteMedia(index: number) {
    setSize(handleReturnSize(size, arrayData[index].fileSize));
    setArrayData(handleDeleteItemMedia(arrayData, index));
    ref_scroll.current?.scrollTo({x: 0, y: 0, animated: false});
  }

  function handlePressViewerMedia(index: number) {
    navigation.navigate('ProductMedia', {
      indexItem: index,
      dataMedia: arrayData,
      onDeleteMedia: handleDeleteMedia,
    });
  }

  return (
    <View style={styles.view}>
      <ScrollView
        style={styles.scroll}
        onScrollEndDrag={event => {
          console.log('end-drag: ', event.nativeEvent.contentOffset.y);
          setOffset(event.nativeEvent.contentOffset.y);
        }}
        // scrollEventThrottle={160}
      >
        <View style={styles.container}>
          <BaseInputText
            title={product.name}
            placeholder={`(*) ${product.name}`}
            defaultValue={name.text}
            styleInput={styles.input}
            checkError={name.isError}
            onRef={ref_name}
            autoCapitalize="words"
            onChangeText={(text: string) => {
              setName({text: text, isError: false});
            }}
          />

          <BaseInputText
            title={product.description}
            placeholder={product.description}
            defaultValue={description}
            styleInput={styles.input}
            onRef={ref_description}
            autoCapitalize="sentences"
            onChangeText={(text: string) => {
              setDescription(text);
            }}
          />
          <View style={styles.rowView}>
            <TouchableOpacity
              ref={ref_classify}
              style={styles.classify}
              onPress={() =>
                handlePressButton(ref_classify, TypePage2.CLASSIFY)
              }>
              <Text style={styles.classifyText}>
                {titlePopup.classify.title}
              </Text>
            </TouchableOpacity>

            <BaseInputText
              title={product.weight}
              placeholder={`(*) ${product.weight}`}
              defaultValue={weight.text}
              styleInput={styles.input}
              styleView={[
                styles.viewColumnSecond,
                {flex: 0.6, marginVertical: 0},
              ]}
              onRef={ref_weight}
              checkError={weight.isError}
              keyboardType="number-pad"
              onChangeText={(text: string) => {
                setWeight({text: text, isError: false});
              }}
            />
          </View>
          <View style={styles.row}>
            <Text style={styles.titleText}>{product.view}</Text>
            <View style={styles.inputImage}>
              <ScrollView
                contentContainerStyle={styles.containerMedia}
                horizontal={true}
                showsHorizontalScrollIndicator={true}
                ref={ref_scroll}>
                {arrayData?.map((item, index) => {
                  return (
                    <ItemMediaView
                      uri={item.uri}
                      type={item.type}
                      key={index}
                      index={index}
                      onPressDelete={handlePressDelete}
                      onPressViewerMedia={handlePressViewerMedia}
                    />
                  );
                })}
              </ScrollView>
              <TouchableOpacity
                ref={ref_view}
                onPress={() => handlePressButton(ref_view, TypePage2.VIEW)}
                style={styles.buttonAddMedia}>
                <Ionicons name="add-circle-outline" size={20} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={[styles.form, styles.row]}>
            <View style={styles.viewColumnFirst}>
              <Text style={styles.titleText}>{product.price}</Text>
              <View style={styles.priceView}>
                <Text style={[styles.titleText, {borderWidth: 1, flex: 1}]}>
                  150.000
                </Text>
                <Text
                  style={[
                    styles.titleText,
                    {borderWidth: 1, borderLeftWidth: 0},
                  ]}>
                  {' '}
                  VND
                </Text>
              </View>
            </View>
            <View style={styles.viewColumnSecond}>
              <Text style={styles.titleText}>{product.discountCode}</Text>
              <TouchableOpacity style={styles.discountCode}>
                <Text>123456657</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.row}>
            <BaseInputText
              title={product.note}
              placeholder={product.note}
              defaultValue={note}
              autoCapitalize="sentences"
              styleInput={[styles.input, {height: 100}]}
              styleView={{height: null}}
              onChangeText={(text: string) => {
                setNote(text);
              }}
              multiline={true}
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={onPressNextPage}>
            <Text>Tiếp tục</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <BasePopup
        data={dataPopup}
        ItemViewRender={ViewItemPopup}
        onPressItem={handlePressItemPopup}
        onPressCenteredView={() => setIsShow(false)}
        option="center-right"
        widthPopup={sizePopup.width}
        isShowPopup={isShow}
        refLayout={refView}
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
  scroll: {
    flex: 1,
    width: '100%',
  },
  container: {flex: 1, paddingHorizontal: 20},
  row: {marginVertical: 20},
  input: {
    borderWidth: 1,
    width: '100%',
  },
  buttonView: {
    flexDirection: 'row',
  },
  classify: {
    borderWidth: 1,
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    alignSelf: 'flex-end',
    paddingHorizontal: 5,
  },
  classifyText: {
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  rowView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  inputImage: {
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 70,
    alignItems: 'center',
  },
  buttonAddMedia: {
    marginHorizontal: 5,
  },
  plusDemo: {
    borderWidth: 1,
    borderRadius: 100,
    alignSelf: 'flex-end',
  },
  titleText: {
    fontWeight: 'bold',
  },
  form: {
    flexDirection: 'row',
  },
  viewColumnSecond: {
    flex: 0.6,
    marginLeft: 20,
    justifyContent: 'space-between',
  },
  viewColumnFirst: {
    flex: 0.4,
    justifyContent: 'space-between',
  },
  popupForm: {
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
  },
  dateFormView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateForm: {
    borderWidth: 1,
    flex: 0.45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  priceView: {
    flexDirection: 'row',
    flex: 1,
    marginVertical: 5,
  },
  discountCode: {
    borderWidth: 1,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
  button: {
    borderWidth: 1,
    marginVertical: 10,
    height: 50,
    width: 100,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerMedia: {
    // flexDirection: 'row',
    // flexWrap: 'wrap',
  },
});
