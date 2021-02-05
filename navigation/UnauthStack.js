import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SignUpScreen } from '../screens/SignUpScreen';

const Stack = createStackNavigator();

export const UnauthStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='SignUpScreen'
                component={SignUpScreen}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
};
