import React from "react";
import { StyleSheet, View, Image } from "react-native";

export const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require("../assets/settingsHeader.png")}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    image: {
        width: "100%",
        height: 250,
        resizeMode: "contain",
    },
});
