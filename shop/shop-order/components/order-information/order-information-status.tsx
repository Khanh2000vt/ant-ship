/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {OrderInformation} from '../../model/shop-order-models';

function OrderInformationStatus({
  position,
  navigation,
  onPressNextPage,
}: OrderInformation) {
  const lastIndex = testAPI.length - 1;
  return (
    <View style={styles.view}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {testAPI.map((item, index) => {
          return (
            <View style={styles.item} key={index}>
              <View style={styles.progress}>
                <View style={styles.node} />
                {index !== lastIndex && <View style={styles.rule} />}
              </View>
              <View style={styles.container}>
                <Text style={styles.textTitle}>{item.title}</Text>
                <Text style={styles.textTime}>{item.time}</Text>
                <Text style={styles.textNote}>{item.note}</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const testAPI = [
  {
    title: 'Đã xác nhận',
    time: '13:00 08/07/2022',
    note: undefined,
  },
  {
    title: 'Đang lấy hàng',
    time: '14:00 08/07/2022',
    note: 'Dự kiến đến nơi vào lúc 14h30',
  },
  {
    title: 'Đã lấy hàng',
    time: '14:25 08/07/2022',
    note: 'Tài xế Nguyễn Ngọc Khánh - 29V155822',
  },
  {
    title: 'Đang giao hàng',
    time: '14:25 08/07/2022',
    note: 'Dự kiến đến nơi vào lúc 16h00',
  },
  {
    title: 'Giao không thành công',
    time: '16:05 08/07/2022',
    note: 'Gọi điện khách hàng không trả lời',
  },
  {
    title: 'Đang giao hàng',
    time: '17:25 08/07/2022',
    note: 'Dự kiến đến nơi vào lúc 17h30',
  },
  {
    title: 'Đã giao thành công',
    time: '17:30 08/07/2022',
    note: 'Đã giao thành công',
  },
];

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  scrollView: {
    paddingVertical: 20,
  },
  item: {
    flexDirection: 'row',
  },
  progress: {
    height: 80,
    width: 20,
    alignItems: 'center',
    marginHorizontal: 20,
  },
  container: {
    flex: 1,
    paddingRight: 20,
  },
  node: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#C15656',
    marginVertical: 5,
  },
  rule: {
    flexGrow: 1,
    width: 2,
    backgroundColor: '#C15656',
  },
  textTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  textTime: {
    fontSize: 8,
    fontStyle: 'italic',
    opacity: 0.5,
  },
  textNote: {
    fontSize: 11,
    opacity: 0.8,
  },
});

export default OrderInformationStatus;
