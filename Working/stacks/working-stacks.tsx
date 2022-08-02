/* eslint-disable prettier/prettier */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStacks from './home-stack';
import ProfileScreen from '../screens/profile-screen';
const Tab = createBottomTabNavigator();
export default function WorkingStacks() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name={'HomeStack'} component={HomeStacks} />
      <Tab.Screen name={'Settings'} component={ProfileScreen} />
    </Tab.Navigator>
  );
}
