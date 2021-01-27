import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export const HeaderGreating = () => {
    // TODO: get user.name from context

    return (
        <View>
            <Text>Welcome</Text>
            <Text>{}</Text>
        </View>
    );
};
