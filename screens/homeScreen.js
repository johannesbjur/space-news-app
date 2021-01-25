import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ArticleList } from "../components/articleList";

export const HomeScreen = () => {
    const url = "https://test.spaceflightnewsapi.net/api/v2/articles";
    const [articles, setArticles] = useState({});

    useEffect(() => {
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
        <View>
            <View>
                <Text>Welcome</Text>
                <Text>Guest</Text>
            </View>
            <ArticleList articles={articles} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
