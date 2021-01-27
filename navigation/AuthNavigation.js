import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthTab } from "./AuthTab";
import { UnauthStack } from "./UnauthStack";

export const AuthNavigation = () => {
    const isLoggedIn = true;

    return (
        <NavigationContainer>
            {isLoggedIn ? <AuthTab /> : <UnauthStack />}
        </NavigationContainer>
    );
};
