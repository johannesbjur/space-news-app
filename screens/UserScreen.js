import React, { useEffect, useState, useContext } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { AuthContext } from "../context/AuthContext";


export const UserScreen = () => {

    const { user, signOut } = useContext(AuthContext)

    return(
        <View>
            <Text>Settings</Text>
            <Button 
                title="Sign Out"
                onPress={() => signOut()}
            />
            {/* <TextInput 
                placeholder="Name"
                value={userData}
                onChangeText={(value) => {
                }}
            /> */}
            {/* <TextInput
                placeholder="Email"
                value={newEmail}
                onChangeText={(value) => setNewEmail(value)}
            /> */}
            <Button
                 title="Save"
                 onPress={()=> signUp(newName, newEmail)}
            />
        </View>
    )
}