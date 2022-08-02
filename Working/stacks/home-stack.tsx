/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/home-screen';
import ProfileScreen from '../screens/profile-screen';
import LoginStack from '../../Login/stacks/login-stack';
import NewPasswordScreen from '../../Login/login-new-password/screens/new-password-screen';
const Stack = createNativeStackNavigator();
export default function HomeStacks() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="LoginStack"
        component={LoginStack}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="NewPasswordScreen"
        component={NewPasswordScreen}
        options={{
          title: 'New Password',
        }}
      />
    </Stack.Navigator>
  );
}
