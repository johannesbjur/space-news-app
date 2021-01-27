import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthTab } from "./AuthTab";
import { UnauthStack } from "./UnauthStack";
import { AuthContext } from "../context/AuthContext";

export const AuthNavigation = () => {
    const { user } = useContext(AuthContext);

    return (
        <NavigationContainer>
            {user ? <AuthTab /> : <UnauthStack />}
        </NavigationContainer>
    );
};
