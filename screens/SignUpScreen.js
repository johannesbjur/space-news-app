import React, { useState, useContext } from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    Pressable,
} from "react-native";
import { AuthContext } from "../context/AuthContext";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Dimensions } from "react-native";
import { color, sub } from "react-native-reanimated";

export const SignUpScreen = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();

    const { setIsLoggedIn, signUp } = useContext(AuthContext);

    const submit = () => {
        if (name && email) signUp(name, email);
    };
    const submitGuest = () => {
        signUp("", "");
    };

    return (
        <View style={styles.container}>
            <Image
                style={styles.backgroundVideo}
                source={require("../assets/rocket.png")}
            />
            <Text style={styles.title}>Sign Up</Text>
            <View style={styles.inputsWrapper}>
                {/* TODO: make input component and reuse */}
                <View style={styles.inputContainer}>
                    <FontAwesome5
                        style={styles.inputIcon}
                        name="user"
                        size={24}
                        color="white"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Name"
                        placeholderTextColor={"white"}
                        value={name}
                        onChangeText={setName}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <MaterialCommunityIcons
                        style={styles.inputIcon}
                        name="email-outline"
                        size={24}
                        color="white"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        placeholderTextColor={"white"}
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>
                {/* TODO: make Button component and reuse */}
                <View style={styles.btnsContainer}>
                    <Pressable
                        style={styles.btnContainer}
                        onPress={() => submit()}
                    >
                        <Text style={styles.btnText}>Continue</Text>
                    </Pressable>
                    <Pressable
                        style={styles.btnContainer}
                        onPress={() => submitGuest()}
                    >
                        <Text style={styles.btnText}>Continue as Guest</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundVideo: {
        position: "absolute",
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
        top: 0,
        left: 0,
    },
    title: {
        color: "white",
        fontWeight: "bold",
        fontSize: 40,
        alignSelf: "center",
        marginTop: "25%",
        marginBottom: "30%",
    },
    inputsWrapper: {
        alignItems: "center",
    },
    inputContainer: {
        flexDirection: "row",
        borderBottomColor: "white",
        borderBottomWidth: 2,
        alignItems: "center",
        height: 40,
        marginBottom: 30,
    },
    input: {
        color: "white",
        width: 150,
        fontSize: 15,
        fontWeight: "bold",
    },
    inputIcon: {
        marginRight: 10,
        marginLeft: 10,
    },
    btnContainer: {
        justifyContent: "center",
        alignItems: "center",
        width: 200,
        height: 50,
        backgroundColor: "white",
        borderRadius: 20,
        marginTop: 25,
    },
    btnText: {
        fontWeight: "bold",
        fontSize: 15,
        color: "#63A3FF",
    },
    btnsContainer: {
        marginTop: 20,
    },
});
