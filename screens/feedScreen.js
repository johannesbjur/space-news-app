import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useContext } from 'react/cjs/react.development';
import { ArticleList } from '../components/ArticleList';
import { ArticleCarousel } from '../components/ArticleCarousel';
import { HeaderGreating } from '../components/HeaderGreeting';
import { FireBaseContext } from '../context/FireBaseContext';

export const FeedScreen = () => {
    const articlesUrl = 'https://test.spaceflightnewsapi.net/api/v2/articles';
    const blogsUrl = 'https://test.spaceflightnewsapi.net/api/v2/blogs';
    const { updateBookmarkedArticles } = useContext(FireBaseContext);
    const [articles, setArticles] = useState({});
    const [blogs, setBlogs] = useState({});

    useEffect(() => {
        updateBookmarkedArticles();
        setItems();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const setItems = async () => {
        setBlogs(await getDataFrom(blogsUrl, 'blog'));
        setArticles(await getDataFrom(articlesUrl, 'article'));
    };

    const getDataFrom = (url, type) => {
        return new Promise((resolve, reject) => {
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
                            type: type,
                        };
                        array.push(item);
                    });
                    resolve(array);
                });
        });
    };

    return (
        <View style={styles.screenContainer}>
            <View style={styles.topContainer}>
                <HeaderGreating />
            </View>
            <View style={styles.carouselContainer}>
                <ArticleCarousel articles={blogs} />
            </View>
            <View style={styles.articleListContainer}>
                <ArticleList articles={articles} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screenContainer: {
        height: '100%',
        marginTop: 30,
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginRight: 20,
        marginTop: 10,
    },
    textContainer: {
        flexDirection: 'column',
    },
    carouselContainer: {
        marginTop: 20,
        marginLeft: 25,
        width: '100%',
        height: '40%',
    },
    articleListContainer: {
        height: '50%',
        position: 'absolute',
        bottom: 0,
    },
});
