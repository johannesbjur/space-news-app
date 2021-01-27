import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Home } from "../screens/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export const AuthTab = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" components={Home} />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({});
