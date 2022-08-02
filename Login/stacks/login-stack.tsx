/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../login-login/screens/login-screen';
import EnterPhoneScreen from '../login-enter-phone/screens/enter-phone-screen';
import OTPScreen from '../login-otp/screens/otp-screen';
import RegisterScreen from '../login-register/screens/register-screen';
import NewPasswordScreen from '../login-new-password/screens/new-password-screen';
import WorkingStacks from '../../Working/stacks/working-stacks';
import HelpScreen from '../login-help/screens/help-screen';
import TestOTPScreen from '../../TestScreen/test-otp-screen';
import ShopStack from '../../shop/stacks/shop-stack';
import InformationOptionsScreen from '../login-information-option/information-options-screen';
import ShowInformationScreen from '../login-information-option/show-information-screen';
import TestTime from '../../components/time/test-time';
import TestStepScreen from '../../TestScreen/test-step-screen';
import TestStatusScreen from '../../TestScreen/test-status-screen';
import TestInputScreen from '../../TestScreen/test-input-screen';
import TestRateScreen from '../../TestScreen/test-rate-screen';
import TestLinearGradient from '../../TestScreen/test-linear-gradient';
import TestMaskedView from '../../TestScreen/test-masked-view';
import TestScrollText from '../../TestScreen/test-scroll-text';
import PopularPlaces from '../../TestScreen/popularPlaces';
import TestOutstandingScreen from '../../components/base-outstanding/test-outstanding-screen';
const Stack = createNativeStackNavigator();
export default function LoginStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="InformationOptionsScreen"
        component={InformationOptionsScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ShowInformationScreen"
        component={ShowInformationScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="EnterPhoneScreen"
        component={EnterPhoneScreen}
        options={{
          title: 'Enter Phone',
        }}
      />
      <Stack.Screen
        name="OTPScreen"
        component={OTPScreen}
        options={{
          title: 'OTP',
        }}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          title: 'Register',
        }}
      />
      <Stack.Screen
        name="NewPasswordScreen"
        component={NewPasswordScreen}
        options={{
          title: 'New Password',
        }}
      />
      <Stack.Screen
        name="HelpScreen"
        component={HelpScreen}
        options={{
          title: 'Help',
        }}
      />
      <Stack.Screen
        name="WorkingStacks"
        component={WorkingStacks}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="ShopStack"
        component={ShopStack}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen name="MapsTest" component={TestOutstandingScreen} />

      <Stack.Screen
        name="TestTime"
        component={TestTime}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
