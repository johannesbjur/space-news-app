import React, { useEffect, useState, useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AuthContext } from "../context/AuthContext";

export const HeaderGreating = () => {
    const { user, name } = useContext(AuthContext);

    return (
        <View>
            <Text style={styles.greeting}>Welcome</Text>
            <Text style={styles.name}>{name ? name : "Guest"}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    name: {
        fontSize: 30,
        fontWeight: "bold",
        marginTop: -5,
    },
    greeting: {
        color: "grey",
        fontWeight: "bold",
        fontSize: 20,
        alignSelf: "flex-end",
    },
});
