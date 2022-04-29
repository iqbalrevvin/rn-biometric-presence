/* eslint-disable max-lines-per-function */
/* eslint-disable complexity */
import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import { Screen } from '../Utility';

const screenOptionsConfig = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        size = focused ? 30 : 25;
        switch (route.name) {
            case 'Home':
                iconName = focused ? 'home' : 'home';
                break;
            case 'Profile':
                iconName = focused ? 'user' : 'user';
                break;
            default:
                iconName = focused ? 'user' : 'user';
        }
        return (
          <View style={{ top: 5 }}>
            <Icon
              name={iconName}
              size={size}
              style={!focused ? { color: 'gray', fontWeight: 'bold' } : { fontSize: size, color }}
                />
          </View>
        );
    },
});

const tabBarOptionsConfig = {
    showLabel: true,
    activeTintColor: '#005CEE',
    inactiveTintColor: 'dimgray',
    labelStyle: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    style: {
      height: 55,
      paddingBottom: 5,
    },
};

const Tab = createBottomTabNavigator();

const TabNavigator = (props) => (
  <Tab.Navigator
    tabBarOptions={tabBarOptionsConfig}
    screenOptions={screenOptionsConfig}
  >
    <Tab.Screen
      name={Screen.HOME_SCREEN.name}
      component={Screen.HOME_SCREEN.component}
      {...props}
    />
  </Tab.Navigator>
);

export default TabNavigator;
