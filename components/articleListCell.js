import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const ArticleListCell = ({ article }) => {
    const navigation = useNavigation();
    return (
        <Pressable
            onPress={() =>
                navigation.navigate("ArticleScreen", {
                    id: article.id,
                    type: "article",
                })
            }
        >
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={{ uri: article.imageUrl }}
                />

                <View style={styles.textContainer}>
                    <Text style={styles.title}>{article.title}</Text>
                    <Text style={styles.date}>{article.date}</Text>
                </View>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 20,
    },
    textContainer: {
        justifyContent: "center",
        marginLeft: 20,
        width: "65%",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    image: {
        width: 90,
        height: 90,
        borderRadius: 20,
    },
    date: {
        color: "grey",
    },
});
