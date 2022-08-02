import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import BaseHeader from '../../components/base-header';
import Ionicons from 'react-native-vector-icons/Ionicons';
function ShowInformationScreen({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) {
  const {item} = route.params;
  const ViewHeaderLeft = () => (
    <Ionicons
      name="arrow-back"
      size={20}
      color="white"
      style={styles.iconLeftHeader}
    />
  );

  function handlePressLeft() {
    navigation.goBack();
  }

  function handlePressButton() {
    navigation.navigate('LoginScreen');
  }
  return (
    <View style={styles.view}>
      <BaseHeader
        title={item.title}
        ViewHeaderLeft={ViewHeaderLeft}
        onPressLeft={handlePressLeft}
      />
      <ScrollView style={styles.container}>
        <Text style={styles.textBody}>{item.body}</Text>
      </ScrollView>
      <TouchableOpacity style={styles.button} onPress={handlePressButton}>
        <Text>Đăng ký / Đăng nhập</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  iconLeftHeader: {
    padding: 5,
  },
  textBody: {
    marginBottom: 20,
  },
  container: {
    backgroundColor: '#fff',
    margin: 20,
    borderWidth: 1,
    padding: 5,
    flexGrow: 1,
  },
  button: {
    backgroundColor: '#fff',
    width: '40%',
    // borderRadius: 5,
    borderWidth: 1,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 20,
  },
});
export default ShowInformationScreen;
