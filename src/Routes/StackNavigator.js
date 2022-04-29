/* eslint-disable no-useless-escape */
import React from 'react';
import { Easing, LogBox } from 'react-native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { Screen } from '../Utility';

const openConfig = {
  animation: 'spring',
  config: {
    stiffness: 1250,
    damping: 75,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.1,
    restSpeedThreshold: 0.1,
  },
};

const closeConfig = {
  animation: 'timing',
  config: {
    duration: 150,
    Easing: Easing.linear,
  },
};

const screenOptionsConfig = {
  headerShown: false,
  gestureEnabled: true,
  gestureDirection: 'horizontal',
  cardOverlayEnabled: true,
  ...TransitionPresets.SlideFromRightIOS,
  transitionSpec: {
    open: openConfig,
    close: closeConfig,
  },
};

LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator screenOptions={screenOptionsConfig} animation={true}>
    <Stack.Screen name={Screen.SPLASH_SCREEN.name} component={Screen.SPLASH_SCREEN.component} />
    <Stack.Screen name={Screen.WELCOME_SCREEN.name} component={Screen.WELCOME_SCREEN.component} />
    <Stack.Screen name={Screen.LOGIN_SCREEN.name} component={Screen.LOGIN_SCREEN.component} />
    <Stack.Screen name={Screen.INDEX_SCREEN.name} component={Screen.INDEX_SCREEN.component} />
    <Stack.Screen name={Screen.PRESENCE_SCREEN.name} component={Screen.PRESENCE_SCREEN.component} />
  </Stack.Navigator>
);

export default StackNavigator;
