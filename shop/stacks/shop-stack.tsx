/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {SvgXml} from 'react-native-svg';
import ShopHomeStack from './shop-home-stack';
import ShopOrdersStack from './shop-orders-stack';
import ShopMessagesStack from './shop-messages-stack';
import ShopSettingsStack from './shop-settings-stack';
// import homeTabIcon from '../../assets/icon/home-tab.svg';
const Tab = createBottomTabNavigator();

export default function ShopStack() {
  return (
    <Tab.Navigator
      initialRouteName="Orders"
      screenOptions={({route}) => ({
        // tabBarIcon: ({focused, color, size}) => {
        //   let iconName;
        //   if (route.name === 'Home') {
        //     iconName = focused ? homeTabIcon : homeTabIcon;
        //   } else if (route.name === 'Orders') {
        //     iconName = focused ? homeTabIcon : homeTabIcon;
        //   } else if (route.name === 'Messages') {
        //     iconName = focused ? homeTabIcon : homeTabIcon;
        //   } else if (route.name === 'Settings') {
        //     iconName = focused ? homeTabIcon : homeTabIcon;
        //   }
        //   return <SvgXml width="20" height="20" xml={iconName}/>;
        // },
        headerShown: false,
      })}>
      <Tab.Screen name="Home" component={ShopHomeStack} />
      <Tab.Screen name="Orders" component={ShopOrdersStack} />
      <Tab.Screen name="Messages" component={ShopMessagesStack} />
      <Tab.Screen name="Settings" component={ShopSettingsStack} />
    </Tab.Navigator>
  );
}
