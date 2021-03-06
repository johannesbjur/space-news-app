import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { ArticleCarouselCell } from './ArticleCarouselCell';

export const ArticleCarousel = ({ articles }) => {
    return (
        <>
            <FlatList
                data={articles}
                horizontal
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <ArticleCarouselCell article={item} />
                )}
            />
        </>
    );
};
