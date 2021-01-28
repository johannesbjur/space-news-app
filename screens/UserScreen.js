import React, { useEffect, useState, useContext } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { AuthContext } from "../context/AuthContext";


export const UserScreen = () => {

    const { user, signOut, updateUserData } = useContext(AuthContext)
    const [newName, setNewName] = useState()
    const [newEmail, setNewEmail] =useState()

    return(
        <View>
            <Text>Settings</Text>
            <Button 
                title="Sign Out"
                onPress={() => signOut()}
            />
            <TextInput 
                placeholder="Name"
                onChangeText={(value) => setNewName(value)
                }
            /> 
            <TextInput
                placeholder="Email"
                onChangeText={(value) => setNewEmail(value)}
            />
            <Button
                 title="Save"
                 onPress={()=> updateUserData(newName, newEmail)}
            />
        </View>
    )
}