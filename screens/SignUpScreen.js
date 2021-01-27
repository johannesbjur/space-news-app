import React, { useState } from "react";
import { Button, StyleSheet, Text, View, TextInput } from "react-native";

export const SignUpScreen = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();

    return (
        <View>
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
            <Button
                title="Continue"
                onPress={() => console.log("Create user")}
            />
            <Button
                title="Continue as Guest"
                onPress={() => console.log("Create guest")}
            />
        </View>
    );
};
