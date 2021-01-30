import React, { useState, useContext } from "react";
import {
    Button,
    StyleSheet,
    Text,
    View,
    TextInput,
    Pressable,
} from "react-native";
import { AuthContext } from "../context/AuthContext";
import { FireBaseContext } from "../context/FireBaseContext";
import { Ionicons } from "@expo/vector-icons";

export const UserScreen = () => {
    const { user, signOut, setName } = useContext(AuthContext);
    const { updateUserData } = useContext(FireBaseContext);
    const [newName, setNewName] = useState();
    const [newEmail, setNewEmail] = useState();

    return (
        <View>
            <Text>Settings</Text>
            <Pressable onPress={() => signOut()}>
                <Ionicons name="log-out-outline" size={24} color="black" />
            </Pressable>
            <TextInput
                placeholder="Name"
                onChangeText={(value) => setNewName(value)}
            />
            <TextInput
                placeholder="Email"
                onChangeText={(value) => setNewEmail(value)}
            />
            <Button
                title="Save"
                onPress={() => {
                    updateUserData(newName, newEmail);
                    setName(newName);
                }}
            />
        </View>
    );
};
