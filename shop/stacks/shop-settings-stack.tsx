/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ShopSettingsScreen from '../shop-settings/shop-settings-screen';
import TermScreen from '../../components/term/term-screen';
import ChangePasswordScreen from '../shop-settings/components/change-password/change-password-screen';
import LoginStack from '../../Login/stacks/login-stack';
const Stack = createNativeStackNavigator();

export default function ShopSettingsStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ShopSettings" component={ShopSettingsScreen} />
      <Stack.Screen name="TermScreen" component={TermScreen} />
      <Stack.Screen
        name="ChangePasswordScreen"
        component={ChangePasswordScreen}
      />
      <Stack.Screen name={'LoginStack'} component={LoginStack} />
    </Stack.Navigator>
  );
}
