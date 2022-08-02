/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ShopMessagesScreen from '../shop-messages/shop-messages-screen';
import ProductMediaViewer from '../shop-order/order-product-media';
// import ProductMediaViewer from '../shop-order/order-product-media';
const Stack = createNativeStackNavigator();

export default function ShopMessagesStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ShopMessages" component={ShopMessagesScreen} />
      <Stack.Screen name="ProductMedia" component={ProductMediaViewer} />
    </Stack.Navigator>
  );
}
