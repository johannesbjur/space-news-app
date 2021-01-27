import React, { useState, useContext } from "react";
import { Button, StyleSheet, Text, View, TextInput } from "react-native";
import { AuthContext } from "../context/AuthContext";

export const SignUpScreen = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();

    const { setIsLoggedIn } = useContext(AuthContext);

    const submit = () => {
        setIsLoggedIn(true);
    };

    return (
        <View style={styles.container}>
            <Text>Sign Up</Text>
            <TextInput
                placeholder="Enter name"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                placeholder="Enter email"
                value={email}
                onChangeText={setEmail}
            />
            <Button title="Continue" onPress={() => submit()} />
            <Button
                title="Continue as Guest"
                onPress={() => console.log("Create guest")}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});
