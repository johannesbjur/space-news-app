import React, { useState, useContext } from "react";
import {
    Button,
    Image,
    StyleSheet,
    Text,
    View,
    TextInput,
    Pressable,
} from "react-native";
import { AuthContext } from "../context/AuthContext";
import { FireBaseContext } from "../context/FireBaseContext";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const UserScreen = () => {
    const { user, signOut, setName } = useContext(AuthContext);
    const { updateUserData } = useContext(FireBaseContext);
    const [newName, setNewName] = useState();
    const [newEmail, setNewEmail] = useState();
    const navigation = useNavigation();

    const submit = () => {
        updateUserData(newName, newEmail);
        setName(newName);
        setNewName("");
        setNewEmail("");
        navigation.navigate("FeedScreen");
    };

    return (
        <View style={styles.container}>
            <Pressable style={styles.logoutBtn} onPress={() => signOut()}>
                <Ionicons name="log-out-outline" size={32} color="black" />
            </Pressable>
            <Image
                style={styles.headerImage}
                source={require("../assets/settingsHeader.png")}
            />
            <Text style={styles.title}>Settings</Text>
            <View style={styles.inputsWrapper}>
                <View style={styles.inputContainer}>
                    <FontAwesome5
                        style={styles.inputIcon}
                        name="user"
                        size={24}
                        color="black"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Name"
                        onChangeText={(value) => setNewName(value)}
                        value={newName}
                        onSubmitEditing={() => submit()}
                    />
                </View>
                <View style={{ ...styles.inputContainer, marginTop: 10 }}>
                    <MaterialCommunityIcons
                        style={styles.inputIcon}
                        name="email-outline"
                        size={24}
                        color="black"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        onChangeText={(value) => setNewEmail(value)}
                        value={newEmail}
                        onSubmitEditing={() => submit()}
                    />
                </View>
                <Pressable
                    style={styles.saveBtnContainer}
                    onPress={() => submit()}
                >
                    <Text style={styles.saveBtnText}>Save</Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
    },
    headerImage: {
        marginTop: 10,
        alignSelf: "center",
        width: "90%",
        height: "50%",
        resizeMode: "contain",
    },
    title: {
        fontWeight: "bold",
        fontSize: 40,
        marginLeft: 70,
        marginTop: -10,
    },
    inputsWrapper: {
        alignItems: "center",
        marginTop: 30,
        marginBottom: 40,
    },
    inputContainer: {
        flexDirection: "row",
        borderBottomColor: "black",
        borderBottomWidth: 2,
        height: 50,
        alignItems: "center",
    },
    input: {
        backgroundColor: "white",
        width: "45%",
    },
    inputIcon: {
        marginRight: 20,
        marginLeft: 10,
    },
    logoutBtn: {
        position: "absolute",
        top: 40,
        right: 20,
        zIndex: 99,
    },
    saveBtnContainer: {
        marginTop: 40,
        backgroundColor: "#201E6D",
        width: 150,
        height: 60,
        borderRadius: 30,
        textAlignVertical: "center",
        justifyContent: "center",
        alignItems: "center",
    },
    saveBtnText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
    },
});
