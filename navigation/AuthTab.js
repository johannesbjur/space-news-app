import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Home } from "../screens/Home";
import { UserScreen } from '../screens/UserScreen'
import { BookmarkedScreen } from "../screens/BookmarkedScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export const AuthTab = () => {
    return (
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="BookmarkedScreen" component={BookmarkedScreen} />
            <Tab.Screen name="UserScreen" component={UserScreen} />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({});
