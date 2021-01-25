import React from "react";
import { StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { ArticleListCell } from "./articleListCell";

export const ArticleList = ({ articles }) => {
    // console.log(articles);
    return (
        <>
            <FlatList
                style={styles.container}
                data={articles}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item, index }) => (
                    <ArticleListCell article={item} />
                )}
            />
        </>
    );
};

const styles = StyleSheet.create({
    container: {},
});
