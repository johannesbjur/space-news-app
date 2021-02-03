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
            <Text style={styles.title}>Bookmarked</Text>
            {bookmarkedArticles.length == 0 ? (
                <Text style={styles.noItemsMessage}>
                    No articles bookmarked
                </Text>
            ) : null}

            <ArticleList articles={bookmarkedArticles} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
    },
    title: {
        fontWeight: "bold",
        fontSize: 40,
        marginTop: 70,
        marginLeft: 20,
        marginBottom: 10,
    },
    noItemsMessage: {
        marginTop: 30,
        color: "grey",
        alignSelf: "center",
    },
});
