import React, { createContext, useState, useEffect } from "react";
import { auth, db } from "../firebase";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
        });

        return unsubscribe;
    });

    const signUp = async (name = "", email = "") => {
        try {
            await auth.signInAnonymously();
            // console.log(auth.currentUser.uid);
            db.collection("users").doc(auth.currentUser.uid).set({
                name: name,
                email: email,
            });
            // setIsLoggedIn(true);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <AuthContext.Provider value={{ user, signUp }}>
            {children}
        </AuthContext.Provider>
    );
};
