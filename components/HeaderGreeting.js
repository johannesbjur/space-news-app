import React, { useEffect, useState, useContext} from "react";
import { StyleSheet, Text, View } from "react-native";
import { AuthContext } from '../context/AuthContext'

export const HeaderGreating = () => {

    const { user, name } = useContext(AuthContext)

    return (
        <View>
            <Text>Welcome</Text>
            <Text>{name ? name: "Guest"}</Text>
        </View>
    );
};
