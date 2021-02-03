import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthTab } from "./AuthTab";
import { UnauthStack } from "./UnauthStack";
import { AuthContext } from "../context/AuthContext";
import { SplashScreen } from "../screens/SplashScreen";

export const AuthNavigation = () => {
    const { user, isLoading } = useContext(AuthContext);

    if (isLoading) return <SplashScreen />;

    return (
        <NavigationContainer>
            {user ? <AuthTab /> : <UnauthStack />}
        </NavigationContainer>
    );
};
