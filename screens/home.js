import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { FeedScreen } from './FeedScreen';
import { ArticleScreen } from './ArticleScreen';

const Stack = createStackNavigator();

export const Home = () => {
    return (
        <Stack.Navigator initialRouteName='FeedScreen'>
            <Stack.Screen
                name='FeedScreen'
                component={FeedScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name='ArticleScreen'
                component={ArticleScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};
