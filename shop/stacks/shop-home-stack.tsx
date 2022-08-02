/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ShopHomeScreen from '../shop-home/shop-home-screen';
const Stack = createNativeStackNavigator();
export default function ShopHomeStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ShopHome" component={ShopHomeScreen} />
    </Stack.Navigator>
  );
}
