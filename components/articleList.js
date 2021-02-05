import React from 'react';
import { StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { ArticleListCell } from './ArticleListCell';

export const ArticleList = ({ articles }) => {
    return (
        <>
            <FlatList
                style={styles.flatList}
                data={articles}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <ArticleListCell article={item} />}
            />
        </>
    );
};

const styles = StyleSheet.create({
    flatList: {},
});
