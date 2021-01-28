import React, { createContext, useState, useEffect } from "react";
import { auth, db } from "../firebase";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [name, setName] = useState()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
        });

        return unsubscribe;
    });

    const signUp = async (name = "", email = "") => {
        try {

            // TODO: validate email

            await auth.signInAnonymously();

            setName(name)

            db.collection("users").doc(auth.currentUser.uid).set({
                name: name,
                email: email,
            });
        } catch (error) {
            console.log(error);
        }
    };

    const signOut = async () => {
        try {
            await auth.signOut() 
            setName("")
        }catch(error) {
            console.log(error)
        }
    }

    return (
        <AuthContext.Provider value={{ user, name, signUp, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};
