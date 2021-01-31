import { useFocusEffect, useIsFocused } from "@react-navigation/native";
import React, { useEffect, useContext, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { ArticleList } from "../components/ArticleList";
import { AuthContext } from "../context/AuthContext";
import { FireBaseContext } from "../context/FireBaseContext";

export const BookmarkedScreen = () => {
    const { updateBookmarkedArticles, bookmarkedArticles } = useContext(
        FireBaseContext
    );

    const [articles, setArticles] = useState({});

    useFocusEffect(
        React.useCallback(() => {
            updateBookmarkedArticles();
        })
    );

    return (
        <View style={styles.container}>
            <ArticleList articles={bookmarkedArticles} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
    },
});
