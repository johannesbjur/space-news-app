import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Home } from "../screens/Home";
import { UserScreen } from "../screens/UserScreen";
import { BookmarkedScreen } from "../screens/BookmarkedScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FireBaseContextProvider } from "../context/FireBaseContext";
import Ionicons from "react-native-vector-icons/Ionicons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export const AuthTab = () => {
    return (
        <FireBaseContextProvider>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === "Home") {
                            iconName = focused ? "home" : "home-outline";
                            return (
                                <Ionicons
                                    name={iconName}
                                    size={size}
                                    color={color}
                                />
                            );
                        } else if (route.name === "BookmarkedScreen") {
                            iconName = focused ? "bookmark" : "bookmark-o";
                            return (
                                <FontAwesome
                                    name={iconName}
                                    size={size}
                                    color={color}
                                />
                            );
                        } else if (route.name === "UserScreen") {
                            iconName = focused ? "user-alt" : "user";
                            return (
                                <FontAwesome5
                                    name={iconName}
                                    size={size}
                                    color={color}
                                />
                            );
                        }
                    },
                })}
                tabBarOptions={{
                    showLabel: false,
                }}
            >
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen
                    name="BookmarkedScreen"
                    component={BookmarkedScreen}
                />
                <Tab.Screen name="UserScreen" component={UserScreen} />
            </Tab.Navigator>
        </FireBaseContextProvider>
    );
};

const styles = StyleSheet.create({});
