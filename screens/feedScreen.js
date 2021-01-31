import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useContext } from "react/cjs/react.development";
import { ArticleList } from "../components/ArticleList";
import { HeaderGreating } from "../components/HeaderGreeting";
import { FireBaseContext } from "../context/FireBaseContext";

export const FeedScreen = () => {
    const url = "https://test.spaceflightnewsapi.net/api/v2/articles";
    const { updateBookmarkedArticles } = useContext(FireBaseContext);
    const [articles, setArticles] = useState({});

    useEffect(() => {
        updateBookmarkedArticles();
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                var array = [];
                json.forEach((element) => {
                    let dateString = new Date(element.publishedAt)
                        .toDateString()
                        .substring(4);

                    const item = {
                        id: element.id,
                        title: element.title,
                        date: dateString,
                        imageUrl: element.imageUrl,
                    };
                    array.push(item);
                });
                setArticles(array);
            });
    }, []);

    return (
        <View style={styles.screenContainer}>
            <View style={styles.topContainer}>
                <HeaderGreating />
            </View>
            <View style={styles.articleListContainer}>
                <ArticleList articles={articles} />
            </View>
        </View>
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
