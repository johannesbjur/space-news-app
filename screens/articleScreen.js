import React, { useContext, useEffect, useState } from "react";
import { Button, StyleSheet, Text, View, Image, Pressable } from "react-native";
import { FireBaseContext } from "../context/FireBaseContext";
import { FontAwesome } from "@expo/vector-icons";

export const ArticleScreen = ({ route }) => {
    const { id } = route.params;
    const { saveArticleToDb } = useContext(FireBaseContext);

    const url = `https://test.spaceflightnewsapi.net/api/v2/articles/${id}`;
    const [article, setArticle] = useState({});

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                let dateString = new Date(json.publishedAt)
                    .toDateString()
                    .substring(4);

                setArticle({
                    id: id,
                    title: json.title,
                    imageUrl: json.imageUrl,
                    date: dateString,
                    body: json.summary,
                    articleUrl: json.url,
                });
            });
    }, []);

    return (
        <View>
            <Pressable onPress={() => saveArticleToDb(article)}>
                <FontAwesome name="bookmark-o" size={24} color="black" />
            </Pressable>
            <Image style={styles.image} source={{ uri: article.imageUrl }} />
            <Text style={styles.title}>{article.title}</Text>
            <Text style={styles.date}>{article.date}</Text>
            <Text style={styles.body}>{article.body}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {},
    image: {
        width: "100%",
        height: 200,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
    },
    date: {
        color: "grey",
    },
});
