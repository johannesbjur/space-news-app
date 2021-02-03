import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator, HeaderTitle } from "@react-navigation/stack";
import { FeedScreen } from "./FeedScreen";
import { ArticleScreen } from "./ArticleScreen";
import { BookmarkedScreen } from "./BookmarkedScreen";

const Stack = createStackNavigator();

export const Home = () => {
    return (
        <Stack.Navigator initialRouteName="FeedScreen">
            <Stack.Screen
                name="FeedScreen"
                component={FeedScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="ArticleScreen"
                component={ArticleScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

const styles = StyleSheet.create({
    screenContainer: {
        height: "100%",
        marginTop: 30,
    },
    topContainer: {
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    textContainer: {
        flexDirection: "column",
    },
    articleListContainer: {
        height: "50%",
        position: "absolute",
        bottom: 0,
    },
});
