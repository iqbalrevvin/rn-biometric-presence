import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import StackNavigator from './StackNavigator';

const Routes = () => (
    <NavigationContainer>
        <StackNavigator />
    </NavigationContainer>
);

export default Routes;
