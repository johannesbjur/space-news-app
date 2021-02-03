import React, { useContext, useEffect, useState } from "react";
import { View, Pressable } from "react-native";
import { FireBaseContext } from "../context/FireBaseContext";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const BookmarkButton = ({ article, style }) => {
    const {
        saveArticleToDb,
        bookmarkedArticles,
        removeArticleFromDb,
    } = useContext(FireBaseContext);
    const [isBookmarked, setIsBookmarked] = useState(false);

    useEffect(() => {
        if (bookmarkedArticles.find((item) => item.id === article.id)) {
            setIsBookmarked(true);
        }
    }, [article]);
    return (
        <View style={style}>
            {isBookmarked ? (
                <Pressable
                    onPress={() => {
                        removeArticleFromDb(article);

                        setIsBookmarked(false);
                    }}
                >
                    <MaterialCommunityIcons
                        name="bookmark-check"
                        size={32}
                        color="white"
                    />
                </Pressable>
            ) : (
                <Pressable
                    onPress={() => {
                        saveArticleToDb(article);
                        setIsBookmarked(true);
                    }}
                >
                    <MaterialCommunityIcons
                        name="bookmark-outline"
                        size={32}
                        color="white"
                    />
                </Pressable>
            )}
        </View>
    );
};
