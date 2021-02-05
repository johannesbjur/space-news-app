import { useFocusEffect } from "@react-navigation/native";
import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ArticleList } from "../components/ArticleList";
import { FireBaseContext } from "../context/FireBaseContext";

export const BookmarkedScreen = () => {
    const { updateBookmarkedArticles, bookmarkedArticles } = useContext(
        FireBaseContext
    );

    useFocusEffect(
        React.useCallback(() => {
            updateBookmarkedArticles();
        }, [])
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bookmarked</Text>
            {!bookmarkedArticles || bookmarkedArticles.length == 0 ? (
                <Text style={styles.noItemsMessage}>
                    No articles bookmarked
                </Text>
            ) : (
                <ArticleList articles={bookmarkedArticles} />
            )}
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
