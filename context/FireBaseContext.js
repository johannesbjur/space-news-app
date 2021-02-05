import React, { createContext, useState } from 'react';
import { auth, db } from '../firebase';

export const FireBaseContext = createContext();

export const FireBaseContextProvider = ({ children }) => {
    // eslint-disable-next-line no-unused-vars
    const [name, setName] = useState();
    const [bookmarkedArticles, setBookmarkedArticles] = useState();

    const updateUserData = async (name, email) => {
        try {
            await db
                .collection('users')
                .doc(auth.currentUser.uid)
                .update({
                    name: name ? name : '',
                    email: email ? email : '',
                });
            setName(name);
        } catch (error) {
            console.log(error);
        }
    };

    const saveArticleToDb = async (article) => {
        try {
            await db
                .collection('users')
                .doc(auth.currentUser.uid)
                .collection('bookmarked')
                .doc(article.id)
                .set({
                    title: article.title,
                    date: article.date,
                    imageUrl: article.imageUrl,
                    type: article.type,
                });
        } catch (error) {
            console.log(error);
        }
    };

    const removeArticleFromDb = async (article) => {
        try {
            await db
                .collection('users')
                .doc(auth.currentUser.uid)
                .collection('bookmarked')
                .doc(article.id)
                .delete();
        } catch (error) {
            console.log(error);
        }
    };

    const updateBookmarkedArticles = () => {
        db.collection('users')
            .doc(auth.currentUser.uid)
            .collection('bookmarked')
            .get()
            .then((snapshot) => {
                var array = [];
                snapshot.forEach((doc) => {
                    var item = {
                        id: doc.id,
                        ...doc.data(),
                    };
                    array.push(item);
                });
                setBookmarkedArticles(array);
            })
            .catch(function (error) {
                console.log('Error getting documents: ', error);
            });
    };

    return (
        <FireBaseContext.Provider
            value={{
                updateUserData,
                saveArticleToDb,
                updateBookmarkedArticles,
                bookmarkedArticles,
                removeArticleFromDb,
            }}
        >
            {children}
        </FireBaseContext.Provider>
    );
};
