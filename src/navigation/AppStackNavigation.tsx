import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RoutConstants from './RoutConstants';
import HomeScreen from '../screens/HomeScreen';
import JokeDetailsScreen from '../screens/JokeDetailsScreen';


const Stack = createNativeStackNavigator();

export default function AppStackNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={RoutConstants.HomeScreen}
                component={HomeScreen}
                options={{
                    headerShown: true,
                    title: 'Jokes Categories',

                }}
            />
            <Stack.Screen
                name={RoutConstants.JokeDetailsScreen}
                component={JokeDetailsScreen}
                options={{
                    headerShown: true,
                    title: 'Joke Details',
                }}

            />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})