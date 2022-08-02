/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ShopOrdersScreen from '../shop-order/shop-orders-screen';
import ProductMediaViewer from '../shop-order/order-product-media';
import OrderInformationProduct from '../shop-order/components/order-information/order-information-product';
import OrderInformation from '../shop-order/order-information';
import StatusProductScreen from '../shop-order/status-product-screen';
const Stack = createNativeStackNavigator();

export default function ShopOrdersStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ShopOrders" component={ShopOrdersScreen} />
      <Stack.Screen
        name="OrderInformationProduct"
        component={OrderInformationProduct}
      />
      <Stack.Screen name="ProductMedia" component={ProductMediaViewer} />
      <Stack.Screen name="OrderInformation" component={OrderInformation} />
      <Stack.Screen
        name="StatusProductScreen"
        component={StatusProductScreen}
      />
    </Stack.Navigator>
  );
}
