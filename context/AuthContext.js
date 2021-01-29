import React, { createContext, useState, useEffect } from "react";
import { auth, db } from "../firebase";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [name, setName] = useState();
    const [bookmarkedArticles, setBookmarkedArticles] = useState();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
        });

        if (user) {
            db.collection("users")
                .doc(auth.currentUser.uid)
                .get()
                .then((doc) => {
                    setName(doc.data().name ? doc.data().name : "");
                });
        }

        return unsubscribe;
    });

    const signUp = async (name = "", email = "") => {
        try {
            // TODO: validate email
            await auth.signInAnonymously();
            await db.collection("users").doc(auth.currentUser.uid).set({
                name: name,
                email: email,
            });
            setName(name);
        } catch (error) {
            console.log(error);
        }
    };

    const updateUserData = async (name, email) => {
        try {
            await db
                .collection("users")
                .doc(auth.currentUser.uid)
                .update({
                    name: name ? name : "",
                    email: email ? email : "",
                });
            setName(name);
        } catch (error) {
            console.log(error);
        }
    };

    const signOut = async () => {
        try {
            await auth.signOut();
            setName("");
        } catch (error) {
            console.log(error);
        }
    };

    const saveArticleToDb = async (article) => {
        try {
            await db
                .collection("users")
                .doc(auth.currentUser.uid)
                .collection("bookmarked")
                .doc(article.id)
                .set({
                    title: article.title,
                    date: article.date,
                    imageUrl: article.imageUrl,
                });
        } catch (error) {
            console.log(error);
        }
    };

    const updateBookmarkedArticles = (article) => {
        db.collection("users")
            .doc(auth.currentUser.uid)
            .collection("bookmarked")
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
                console.log("Error getting documents: ", error);
            });
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                name,
                signUp,
                signOut,
                updateUserData,
                saveArticleToDb,
                updateBookmarkedArticles,
                bookmarkedArticles,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
