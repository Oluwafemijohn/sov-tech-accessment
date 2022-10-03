import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import FavouritJokeScreen from '../screens/FavouritJokeScreen';
import AppStackNavigation from './AppStackNavigation';
import RoutConstants from './RoutConstants';

const Tab = createBottomTabNavigator();

function TabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen name={RoutConstants.AppStackNavigator} component={AppStackNavigation} />
            <Tab.Screen name={RoutConstants.FavouritJokeScreen} component={FavouritJokeScreen} />
        </Tab.Navigator>
    );
}

export default TabNavigator;