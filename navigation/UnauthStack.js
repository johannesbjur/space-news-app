import React, { useState } from "react";
import { Button, StyleSheet, Text, View, TextInput } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { SignUpScreen } from "../screens/SignUpScreen";

const Stack = createStackNavigator();

export const UnauthStack = () => {
    return (
        <Stack.Navigatior>
            {/* <Stack.Screen
                name="SignUpScreen"
                component={SignUpScreen}
                options={{
                    headerShown: false,
                }}
            /> */}
        </Stack.Navigatior>
    );
};
