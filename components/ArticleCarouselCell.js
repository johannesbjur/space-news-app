import React, { useEffect, useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const ArticleCarouselCell = ({ article }) => {
    const navigation = useNavigation();

    return (
        <Pressable
            onPress={() => {
                navigation.navigate("ArticleScreen", {
                    id: article.id,
                    type: "blog",
                });
            }}
        >
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={{ uri: article.imageUrl }}
                />
                <Text numberOfLines={2} style={styles.title}>
                    {article.title}
                </Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 200,
        marginRight: 40,
    },
    image: {
        height: "75%",
        width: "100%",
        borderRadius: 20,
    },
    title: {
        fontWeight: "bold",
        fontSize: 20,
    },
});
