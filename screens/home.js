import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ArticleList } from "../components/articleList";
import { createStackNavigator, HeaderTitle } from "@react-navigation/stack";
import { FeedScreen } from "./feedScreen";
import { ArticleScreen } from "./articleScreen";

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
            <Stack.Screen name="ArticleScreen" component={ArticleScreen} />
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
