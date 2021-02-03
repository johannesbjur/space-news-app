import React, { useContext, useEffect, useState } from "react";
import { Button, StyleSheet, Text, View, Image, Pressable } from "react-native";
import { FireBaseContext } from "../context/FireBaseContext";
import { BookmarkButton } from "../components/BookmarkButton";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export const ArticleScreen = ({ route }) => {
    const { id, type } = route.params;
    const { bookmarkedArticles } = useContext(FireBaseContext);
    const [article, setArticle] = useState({});
    const navigation = useNavigation();

    const articleUrl = `https://test.spaceflightnewsapi.net/api/v2/articles/${id}`;
    const blogUrl = `https://test.spaceflightnewsapi.net/api/v2/blogs/${id}`;
    let url;

    useEffect(() => {
        switch (type) {
            case "article":
                url = articleUrl;
                break;
            case "blog":
                url = blogUrl;
                break;
            default:
                return;
        }

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
            <LinearGradient
                style={styles.greyLayer}
                colors={["rgba(0,0,0,0.8)", "transparent"]}
            />
            <Pressable
                style={styles.backBtn}
                onPress={() => {
                    navigation.navigate("FeedScreen");
                }}
            >
                <Ionicons name="chevron-back-outline" size={34} color="white" />
            </Pressable>
            <BookmarkButton style={styles.bookBtn} article={article} />
            <Image style={styles.image} source={{ uri: article.imageUrl }} />
            <View style={styles.textContainer}>
                <ScrollView>
                    <Text style={styles.title}>{article.title}</Text>
                    <Text style={styles.date}>{article.date}</Text>
                    <Text style={styles.body}>{article.body}</Text>
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {},
    topBar: {
        position: "absolute",
        flexDirection: "row",
        width: "100%",
        alignItems: "flex-end",
    },
    image: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: 300,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 10,
    },
    date: {
        color: "grey",
        fontWeight: "bold",
        marginBottom: 10,
    },
    body: {
        lineHeight: 20,
    },
    backBtn: {
        position: "absolute",
        left: 20,
        top: 30,
        width: 50,
        zIndex: 99,
    },
    bookBtn: {
        position: "absolute",
        right: 20,
        top: 30,
        zIndex: 99,
    },
    textContainer: {
        marginTop: 270,
        backgroundColor: "white",
        borderTopEndRadius: 30,
        borderTopLeftRadius: 30,
        padding: 30,
    },
    greyLayer: {
        width: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 98,
        // backgroundColor: "black",
        height: 100,
        opacity: 0.9,
    },
});
